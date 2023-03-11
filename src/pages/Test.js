import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkAnswers } from '../axiosRequests/Tests/axiosService';
import ExamRequest from '../components/ExamRequest';
import QuestionsList from '../components/QuestionsList';
import QuestionsPanel from '../components/QuestionsPanel';
import { addResults } from '../features/questions/questionSlice';

const Test = () => {
    const dispatch = useDispatch()
    
    const [finishedTest, setfinishedTest] = useState(false);
    const questions = useSelector( state => state.questions )
    const getAnswers=()=>{
        checkAnswers(questions)
            .then( answers => {
                //console.log(answers.data);
                dispatch(addResults(answers.data))
            })
            .catch( e=>{
                console.log(e);
            })
        setfinishedTest(true)
    }
    return (
        <div>
            test page
            <ExamRequest></ExamRequest>
            <QuestionsPanel></QuestionsPanel>
            <QuestionsList></QuestionsList>
            <button onClick={getAnswers}>Calificar desde la página test</button>
        </div>
    );
}

export default Test;
