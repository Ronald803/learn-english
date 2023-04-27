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
    function deleteUser(id){
        console.log({id});
        function deleteU (){
            console.log(`El usuario con el ID: ${id} fue eliminado`)
            deleteUserBackend(id)
                .then(userDeleted=>{
                    console.log(userDeleted.data);
                })
                .catch(e=>{
                    console.log(e);
                })
        }
        areYouSure(deleteU)
    }
    return (
        <div className='text-center mt-2'>
            <button onClick={()=>getScores()} className='btn btn-primary'> Solicitar notas </button>
            {
                info 
                &&
                <div>
                {/* <ScoreTable scores={quaflifications}></ScoreTable>     */}
                </div>
            }
            {quaflifications.map(q=>(
                <div className='card border-dark mt-2'>
                    <div className='card-header'>
                        <div className='row'>
                            <div className='col-sm-10'>
                                <h5>{q.name}</h5>    
                            </div>
                            {
                                sessionStorage.getItem('r')==="admin"
                                &&
                                <div className='col-sm-2'>
                                    <button onClick={()=>deleteUser(q._id)} className='btn btn-danger'>Del</button>
                                </div>
                            }
                        </div>

                    </div>
                    <ScoreTable scores={q.points} studentID={q._id}></ScoreTable>
                </div>
            ))
            }
        </div>
    );
}

export default Scores;
