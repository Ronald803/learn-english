import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTest } from '../axiosRequests/Tests/axiosService';
import { saveQuestion, updateQuestion } from '../features/questions/questionSlice';


const CreateTestForm = () => {
    const dispatch = useDispatch()
    const questions = useSelector(state=>state.questions.newQuestions)
    console.log({questions});
    const handleSubmit = (e) => {
        console.log("se realizó un Submit");
        saveTest(questions)
    }
    const handleAllChanges = (value,i,j,k) => {
        console.log({value},{i},{j},{k});
        dispatch(updateQuestion({value,i,j,k}))
    }
    return (
        <div>
            {
                questions.map( (q,i) => (
                    <div className='card' key={i}>
                        <div className='card-body'>
                            <label className='form-label' htmlFor='question'>Question {i+1}:</label>
                            <textarea 
                                id='question'
                                name='question'
                                className='form-control'
                                onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name)}
                            />
                            <label>Possible Answers: </label>
                            {q.answers.map( (a,j) => (
                                <div key={i+j+10}>
                                    <input
                                        name='answers'
                                        type='text'
                                        className='form-control form-control-sm'
                                        onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name,j)}
                                    />
                                </div>
                            ))}
                            <label className='form-label' htmlFor='response'>Correct Answer:</label>
                            <input 
                                id='response' 
                                name='response' 
                                type='text'
                                className='form-control' 
                                onChange={(e)=>handleAllChanges(e.target.value,i,e.target.name)}
                            />
                        </div>                            
                    </div>
                ))
            }
            <button className='btn btn-dark' onClick={handleSubmit}>Save Question</button>
        </div>
    );
}

export default CreateTestForm;
