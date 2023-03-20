import React from 'react';
import { getTest } from '../axiosRequests/Tests/axiosService'
import { useDispatch, useSelector } from 'react-redux';
import { cleanEvaluation, getQuestions } from '../features/questions/questionSlice';

const ExamRequest = () => {
    const dispatch = useDispatch()
    
    const getExam = async ()=>{
        getTest()
            .then( questions => {
                console.log(questions.data);
                dispatch(cleanEvaluation())
                dispatch(getQuestions(questions.data))
            } )
            .catch( e=> {
                alert(`Something went wrong: ${e}`)
            })
    }
    return (
        <div>
            <button onClick={getExam} className='btn btn-dark'>Solicitar exámen</button>
        </div>
    );
}

export default ExamRequest;
