import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import { addAnswer } from '../features/questions/questionSlice';
import "./css/QuestionsList.css";
import Audio from './Audio';
import VideoPlayer from './VideoPlayer';
import QuestionsPanel from './QuestionsPanel';

const QuestionsList = () => {
    const dispatch = useDispatch()
    const handleChange = (value,id)=>{
        console.log({value},{id});
        dispatch(addAnswer({value,id}))
    }
    const questions = useSelector(state => state.questions)
    const type = useSelector(state=>state.questions.type)
    console.log({type});

    return (
        <div className='question-list'>
            {
                type==="listening" && <Audio/>
            }
            {
                type==="video" && <VideoPlayer/>
            }
            <div className='mt-3 row'>
                <div className='col-2'><QuestionsPanel/></div>
                <div className='col-10'>
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
            </div>
            
        </div>
    );
}

export default QuestionsList;
