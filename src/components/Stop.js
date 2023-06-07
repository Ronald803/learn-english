import React,{useState,useEffect} from 'react'
import StopForm from './StopForm';
import RoundStopForm from './RoundStopForm';
import { getRoundBackend } from '../axiosRequests/Stops/axiosServiceStops';
import StopResults from './StopResults';

function Stop() {
  const [newRoundStop, setnewRoundStop] = useState(false);
  const [rounds, setRounds] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [roundSelected, setRoundSelected] = useState({letter:"",id:""});
  const [roundResults, setRoundResults] = useState(false);
  const [answersResult, setAnswersResult] = useState([]);
  const [winnersResult, setWinnersResult] = useState([]);
  const [roundsTable, setRoundsTable] = useState(true)
  const r = sessionStorage.getItem('r');
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
    setRoundsTable(false)
    console.log({letra});
  }
  const setResults = async(winners,id)=>{
    setRoundSelected({id})
    setRoundResults(true);
    setAnswersResult(winners);
    setRoundsTable(false)
  }
return (
    <div className='px-2' style={{"maxWidth":"450px","margin":"auto"}} >
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
        roundsTable
        &&
        <div>
        <table className='table table-dark table-bordered text-center'>
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
                        <button onClick={()=>setRound(round.letter,round._id)} className='btn btn-warning'>Jugar</button>
                        :
                        <button onClick={()=>setResults(round.winners,round._id)} className='btn btn-warning'>Ver Resultados</button>
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
        <div><StopResults winners={answersResult} round={roundSelected}/></div>
      }
    </div>
  )
}

export default Stop