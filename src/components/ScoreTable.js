import React from 'react';
import { enableFailedTest } from '../axiosRequests/Tests/axiosService';
import successAlert from '../alerts/successAlert';
import errorAlert from '../alerts/errorAlert'

const ScoreTable = (props) => {
    const scores = props.scores
    const studentID = props.studentID
    const enableTest = (test)=>{
        console.log({studentID},{test});
        enableFailedTest(studentID,test)
            .then( user=>{
                console.log(user.data);
                successAlert(user.data.message)
                setTimeout(()=>{
                    window.location.reload()
                },2000)
            })
            .catch(e=>{
                errorAlert("")
            })
    }
    return (
        <div>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Test</th>
                        <th scope='col'>Respuestas</th>
                        <th scope='col'>Calificación</th>
                        {
                            sessionStorage.getItem('r')==="teacher"
                            &&
                            <th scope='col'>Acción</th>
                        }
                        {
                            sessionStorage.getItem('r')==="admin"
                            &&
                            <th scope='col'></th>
                        }
                    </tr>                    
                </thead>
                <tbody>
                    {
                     scores.map( (score,index)=>{
                        return(
                            <tr className='text-center'>
                                <th>
                                    <span>{score.test}</span>
                                </th>
                                <th>
                                    <span>{score.points}/{score.questions}</span>
                                </th>
                                <th>
                                    <span>{Math.ceil(score.points*(100/score.questions))}</span>
                                </th>
                                {
                                    sessionStorage.getItem('r')==="teacher"
                                    &&
                                    <th scope='col'><button className='btn btn-warning ' onClick={()=>enableTest(score.test)}>Reactivar</button></th>
                                }
                                {
                                    sessionStorage.getItem('r')==="admin"
                                    &&
                                    <th scope='col'><button className='btn btn-warning ' onClick={()=>enableTest(score.test)}>R</button></th>
                                }
                            </tr>
                        )
                     } )   
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ScoreTable;
