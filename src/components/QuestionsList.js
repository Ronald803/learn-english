import React from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { addAnswer } from '../features/questions/questionSlice';


const QuestionsList = () => {
    const dispatch = useDispatch()
    const handleChange = (value,id)=>{
        console.log({value},{id});
        dispatch(addAnswer({value,id}))
    }
    const questions = useSelector(state => state.questions)
    console.log(questions.evaluation, 'from questions List');

    return (
        <div>
            <h3>Questions List</h3>
            {questions.evaluation.map( question => (
                <div key={question._id}>
                    <h3>{question.question}</h3>
                    {question.answers.map(answer => (
                        <div key={question._id+answer}>
                            <input 
                                name={question._id} 
                                type='radio' 
                                id={answer+question._id} 
                                value={answer}
                                onClick={()=>handleChange(answer,question._id)}    
                            />                                
                            <label for={answer+question.id}>{answer}</label>
                        </div>
                    ))}
                </div>
            ))}            
        </div>
    );
}

export default QuestionsList;
