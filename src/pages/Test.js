import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../axiosRequests/Tests/axiosService';
import ExamRequest from '../components/ExamRequest';
import QuestionsList from '../components/QuestionsList';
import QuestionsPanel from '../components/QuestionsPanel';
import ResultsTest from '../components/ResultsTest';
import { addResults,finishedTest } from '../features/questions/questionSlice';

const Test = () => {
    const dispatch = useDispatch()
    
    const questions = useSelector( state => state.questions )
    const getAnswers=()=>{
        checkAnswers(questions.evaluation)
            .then( answers => {
                //console.log(answers.data);
                dispatch(addResults(answers.data))
            })
            .catch( e=>{
                console.log(e);
            })
        dispatch(finishedTest());
    }
    return (
        <div>
            test page
            <ExamRequest></ExamRequest>
            { 
                questions.statusTest 
                ?
                <div>
                    <ResultsTest></ResultsTest>
                </div>
                :
                <div>
                    <QuestionsPanel></QuestionsPanel>
                    <QuestionsList></QuestionsList>
                    <button onClick={getAnswers}>Calificar desde la página test</button>
                </div>
            }
            
        </div>
    );
}

export default Test;
