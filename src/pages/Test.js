import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../axiosRequests/Tests/axiosService';
import ExamRequest from '../components/ExamRequest';
import QuestionsList from '../components/QuestionsList';
import QuestionsPanel from '../components/QuestionsPanel';
import ResultsTest from '../components/ResultsTest';
import TestsTable from '../components/TestsTable';
import { addResults,finishedTest } from '../features/questions/questionSlice';

const Test = () => {
    const dispatch = useDispatch()
    
    const questions = useSelector( state => state.questions )
    const getAnswers=()=>{
        checkAnswers(questions.evaluation)
            .then( answers => {
                //console.log(answers.data);
                dispatch(addResults(answers.data.califications))
                //console.log(answers.data.score.points)
                //console.log(questions.evaluation[0].test,"este es el numero de test");
                alert(`${answers.data.score.points[answers.data.score.points.length-1].points} respuestas correctas de ${answers.data.score.points[answers.data.score.points.length-1].questions} preguntas`)
            })
            .catch( e=>{
                console.log(e);
            })
        dispatch(finishedTest());
    }
    return (
        <div style={{"marginTop":"10px","width":"100%"}}>
            {
                questions.evaluation.length===0 
                ? 
                <ExamRequest></ExamRequest>
                :
                <div className='card'>
                <div className='card-body'>
                    { 
                        questions.statusTest 
                        ?
                        <div>
                            <ResultsTest></ResultsTest>
                        </div>
                        :
                        <div>
                            <div className='row'>
                                <div className='col-2'>
                                    <QuestionsPanel></QuestionsPanel>
                                </div>
                                <div className='col-10'>
                                    <QuestionsList></QuestionsList>
                                </div>
                            </div>
                            <hr/>
                            <div className='text-center'>
                                <button onClick={getAnswers} className='btn btn-dark'>Registrar respuestas</button>
                            </div>
                        </div>
                    }
                </div>
                

                </div>                
            }
            {/* <TestsTable></TestsTable> */}
            
        </div>
    );
}

export default Test;
