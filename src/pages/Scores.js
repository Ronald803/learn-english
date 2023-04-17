import React from 'react';
import { getScoresBackend } from '../axiosRequests/Users/axiosServiceUsers';

const Scores = () => {
    const getScores = ()=>{
        getScoresBackend()
            .then( user => {
                console.log(user);
            })
            .catch(e=>{
                console.log({e});
            })
    }
    return (
        <div>
            <button onClick={()=>getScores()}> Solicitar notas </button>
            Scores
        </div>
    );
}

export default Scores;
