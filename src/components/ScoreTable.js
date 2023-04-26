import React from 'react';
import { enableFailedTest } from '../axiosRequests/Tests/axiosService';

const ScoreTable = (props) => {
    const scores = props.scores
    const studentID = props.studentID
    console.log({scores});
    const enableTest = (test)=>{
        console.log({studentID},{test});
        enableFailedTest(studentID,test)
            .then( user=>{
                console.log(user.data);
            })
            .catch(e=>{
                console.log(e);
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
                                    <th scope='col'><button onClick={()=>enableTest(score.test)}>Reactivar</button></th>
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
