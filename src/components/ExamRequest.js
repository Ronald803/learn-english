import React from 'react';
import { getTest } from '../axiosRequests/Tests/axiosService'
import { useDispatch, useSelector } from 'react-redux';
import { cleanEvaluation, getQuestions } from '../features/questions/questionSlice';

const ExamRequest = () => {
    const dispatch = useDispatch()
    
    const getExam = async ()=>{
        let n = sessionStorage.getItem('n')
        if(!n){
            return alert("Debes iniciar sesión para solicitar examenes")
        }
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
        <div className='text-center'>
            <button onClick={getExam} className='btn btn-dark'>Solicitar exámen</button>
        </div>
    );
}

export default ExamRequest;
//79106826
//etn 606 conversiones electromagneticas teoria y laboratorio

//etn-640 proyecto II 

//etn-832 electronica industrial teoria y laboratorio

//martes a las 9am