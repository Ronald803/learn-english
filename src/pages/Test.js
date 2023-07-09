import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../axiosRequests/Tests/axiosService';
import ExamRequest from '../components/ExamRequest';
import QuestionsList from '../components/QuestionsList';
import ResultsTest from '../components/ResultsTest';
import { addResults,finishedTest } from '../features/questions/questionSlice';
import infoAlert from '../alerts/infoAlert';
import errorAlert from '../alerts/errorAlert';

const Test = () => {
    const dispatch = useDispatch()
    
    const questions = useSelector( state => state.questions )
    const getAnswers=()=>{
        checkAnswers(questions.evaluation)
            .then( answers => {
                dispatch(addResults(answers.data.califications))
                infoAlert(`${answers.data.score.points[answers.data.score.points.length-1].points} respuestas correctas de ${answers.data.score.points[answers.data.score.points.length-1].questions} preguntas`)
            })
            .catch( e=>{
                errorAlert(e)
            })
        dispatch(finishedTest());
    }
    return (
        <div className='container mt-2'>
            {
                questions.evaluation.length===0 
                ? 
                <ExamRequest/>
                :
                <div className=''>
                    { 
                        questions.statusTest 
                        ?
                        <div className='container d-flex justify-content-center'><ResultsTest/></div>
                        :
                        <div>
                            <QuestionsList/>
                            <hr/>
                            <div className='text-center'>
                                <button onClick={getAnswers} className='btn btn-dark'>Registrar respuestas</button>
                            </div>
                        </div>
                    }
                </div>
            }
        </div>
    );
}

export default Test;
