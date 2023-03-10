import React from 'react';
import { getTest } from '../axiosRequests/Tests/axiosService'
import { useDispatch } from 'react-redux';
import { getQuestions } from '../features/questions/questionSlice';

const ExamRequest = () => {
    const dispatch = useDispatch()
    const getExam = async ()=>{
        getTest()
            .then( questions => {
                console.log(questions.data);
                dispatch(getQuestions(questions.data))
            } )
            .catch( e=> {
                alert(`Something went wrong: ${e}`)
            })
    }
    return (
        <div>
            <button onClick={getExam}>Solicitar exámen</button>
        </div>
    );
}

export default ExamRequest;
