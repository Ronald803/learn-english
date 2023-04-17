import React from 'react';

const ScoreTable = ({scores}) => {
    console.log({scores});
    return (
        <div>
            <table className='table table-dark table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Test</th>
                        <th scope='col'>Respuestas</th>
                        <th scope='col'>Calificación</th>
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
