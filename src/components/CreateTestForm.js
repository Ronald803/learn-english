import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveQuestionsBackend } from '../axiosRequests/Tests/axiosService';
import { saveQuestion, updateQuestion } from '../features/questions/questionSlice';
import { useNavigate } from 'react-router-dom';
import successAlert from '../alerts/successAlert';


const CreateTestForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const questions = useSelector(state=>state.questions.newQuestions)
    console.log({questions});
    const handleSubmit = async (e) => {
        console.log("se realizó un Submit");
        await saveQuestionsBackend(questions)
            .then( answer => {
                answer.map( q=>{
                    console.log(q.data);
                })
                successAlert("Pregunta(s) registrada(s) correctamente")
                setTimeout(()=>{
                    navigate('/')
                },2000)
        
            })
            .catch( e => {
                console.log(e);
            })
    }
    const handleAllChanges = (value,i,j,k) => {
        //console.log({value},{i},{j},{k});
        dispatch(updateQuestion({value,i,j,k}))
    }
    return (
        <div className='container mt-3'>
            <div className='row g-3'>
            {
                questions.map( (q,i) => (
                    <div className='col-12 col-md-6 col-lg-4'>
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
                    </div>
                ))
            }
            <button className='btn btn-dark' onClick={handleSubmit}>Save Question</button>
 
            </div>
        </div>
    );
}

export default CreateTestForm;
