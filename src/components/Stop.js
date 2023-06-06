import React,{useState,useEffect} from 'react'
import StopForm from './StopForm';
import RoundStopForm from './RoundStopForm';
import { getRoundBackend } from '../axiosRequests/Stops/axiosServiceStops';

function Stop() {
  const [newRoundStop, setnewRoundStop] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [roundSelected, setRoundSelected] = useState({letter:"",id:""})
  const [roundResults, setRoundResults] = useState(false)
  const [answersResult, setAnswersResult] = useState([])
  const r = sessionStorage.getItem('r')
  let student = false
  if(r!="admin" && r!="teacher"){student = true}
  useEffect(()=>{
    getRounds()
  },[])
  const getRounds = async()=>{
    getRoundBackend()
      .then(answer=>{
        console.log(answer.data.body);
        setRounds(answer.data.body)
      })
      .catch(e=>{
        console.log(e);
      })
  }
  const setRound = async(letra,id)=>{
    setRoundSelected({letter:letra,id})
    setGameStarted(true);
    console.log({letra});
  }
  const setResults = async(winners)=>{
    setRoundResults(true);
    setAnswersResult(winners)    
    console.log(answersResult);
  }
return (
    <div>
      {
        !student 
        &&
        <div className='text-center my-2'>
          <button onClick={()=>setnewRoundStop(!newRoundStop)} className='btn btn-success'>Nuevo Round</button>
        </div>
      }
      {
        newRoundStop
        &&
        <div><RoundStopForm/></div>            
      }
      {
        !gameStarted
        &&
        <div>
        <table className='table table-dark table-bordered'>
          <thead>
            <tr>
              <th scope='col'>Round</th>
              <th scope='col'># Winners</th>
              <th scope='col'>State</th>
              <th scope='col'>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              rounds.map((round,index)=>{
                return(
                  <tr>
                    <th>
                      <span>{index}</span>
                    </th>
                    <td>
                      <span>{round.numberOfWinners}</span>
                    </td>
                    <td>
                      {
                        round.state
                        ?
                        <span>Habilitado</span>
                        :
                        <span>Finalizado</span>
                      }
                    </td>
                    <td>
                      {
                        round.state
                        ?
                        <button onClick={()=>setRound(round.letter,round._id)}>Jugar</button>
                        :
                        <button onClick={()=>setResults(round.winners)}>Ver Resultados</button>
                      }
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      }
      {
        gameStarted
        &&
        <div><StopForm round={roundSelected}/></div>
      }
      {
        roundResults
        &&
        <div>
          Respuestas
        </div>
      }
    </div>
  )
}

export default Stop