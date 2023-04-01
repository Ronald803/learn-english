import React from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { addAnswer } from '../features/questions/questionSlice';
import "./css/QuestionsList.css";

const QuestionsList = () => {
    const dispatch = useDispatch()
    const handleChange = (value,id)=>{
        console.log({value},{id});
        dispatch(addAnswer({value,id}))
    }
    const questions = useSelector(state => state.questions)
    console.log(questions.evaluation, 'from questions List');

    return (
        <div className='question-list'>
            {/* <h3>Questions List</h3> */}
            {questions.evaluation.map( (question,index) => (
                <div key={question._id} className='card mb-2'>
                    
                        <h6 className='card-header'>{index+1}. {question.question}</h6>
                        {question.answers.map(answer => (
                            <div key={question._id+answer} id='answer' className='form-check'>
                                <input 
                                    name={question._id} 
                                    type='radio' 
                                    id={answer+question._id} 
                                    value={answer}
                                    onClick={()=>handleChange(answer,question._id)}
                                    className='form-check-input'    
                                />                                
                                <label for={answer+question.id} className='form-check-label'>{answer}</label>
                            </div>
                        ))}
                    
                </div>
            ))}            
        </div>
    );
}

export default QuestionsList;
