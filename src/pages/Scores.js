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
                    {quaflifications.map((q,index)=>(
                        <div className={clase} key={index}>
                            <div className='card bg-dark border-white mt-2'>
                                <div className='card-header text-white'>
                                    <h5>{q.name}</h5>
                                </div>
                                <div className='row py-2'>
                                    <div className='col'>
                                        <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="collapseExample">
                                        Ver Notas
                                        </button>
                                    </div> 
                                    {
                                    sessionStorage.getItem('r')==="admin"
                                    &&
                                    <div className='col'>
                                        <button onClick={()=>deleteUser(q._id)} className='btn btn-danger'>Eliminar Usuario</button>
                                    </div>
                                    }
                                </div>
                                <div className="collapse" id={index}>
                                    <ScoreTable scores={q.points} studentID={q._id}></ScoreTable>                                    
                                    <button className="btn btn-primary mb-2" type="button" data-bs-toggle="collapse" data-bs-target={`#${index}`} aria-expanded="false" aria-controls="collapseExample">
                                        Ocultar Tabla
                                    </button>
                                </div>
                            </div>
                        </div>))
                    }                    
                </div>
            </div>
        </div>
    );
}

export default Scores;
