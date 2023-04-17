import React,{useState,useEffect} from 'react';
import { getScoresBackend } from '../axiosRequests/Users/axiosServiceUsers';
import ScoreTable from '../components/ScoreTable';

const Scores = () => {
    const [info, setInfo] = useState(false);
    const [quaflifications, setQuaflifications] = useState([]);
    const getScores = ()=>{
        getScoresBackend()
            .then( user => {
                console.log(user.data.body);
                //setQuaflifications(user.data.body[0].points)
                setQuaflifications(user.data.body)
                setInfo(true)
            })
            .catch(e=>{
                console.log({e});
            })
    }
    useEffect( ()=>{
        getScores();
        setInfo(true)
    },[])
    return (
        <div className='text-center'>
            <button onClick={()=>getScores()} className='btn btn-primary'> Solicitar notas </button>
            {
                info 
                &&
                <div>
                {/* <ScoreTable scores={quaflifications}></ScoreTable>     */}
                </div>
            }
            {quaflifications.map(q=>(
                <div>
                    <h5>{q.name}</h5>
                    <ScoreTable scores={q.points}></ScoreTable>
                </div>
            ))
            }
        </div>
    );
}

export default Scores;
