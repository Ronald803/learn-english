import React,{useState,useEffect} from 'react';
import { getScoresBackend } from '../axiosRequests/Users/axiosServiceUsers';
import ScoreTable from '../components/ScoreTable';
import areYouSure from '../alerts/areYouSure';
import { deleteUserBackend } from '../axiosRequests/Tests/axiosService';

const Scores = () => {
    const [info, setInfo] = useState(false);
    const [quaflifications, setQuaflifications] = useState([]);
    const getScores = ()=>{
        getScoresBackend()
            .then( user => {
                //console.log(user.data.body);
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
    function deleteUser(id){ areYouSure(deleteUserBackend,id) }
    let clase = "";
    if(quaflifications.length>1){clase="col-12 col-md-6"}
    return (
        <div className='text-center container mt-2'>
            <button onClick={()=>getScores()} className='btn btn-primary'> Solicitar notas </button>
            <div className=''>
                <div className='row'>
                    {quaflifications.map(q=>(
                        <div className={clase}>
                            <div className='card bg-dark border-white mt-2'>
                                <div className='card-header'>
                                    <div className='row'>
                                        <div className='col-sm-10 text-white'>
                                            <h5>{q.name}</h5>    
                                        </div>
                                        {
                                            sessionStorage.getItem('r')==="admin"
                                            &&
                                            <div className='col-sm-2'>
                                                <button onClick={()=>deleteUser(q._id)} className='btn btn-info'>Del</button>
                                            </div>
                                        }
                                    </div>                                
                                </div>
                                <ScoreTable scores={q.points} studentID={q._id}></ScoreTable>
                            </div>
                        </div>))
                    }                    
                </div>
            </div>
        </div>
    );
}

export default Scores;
