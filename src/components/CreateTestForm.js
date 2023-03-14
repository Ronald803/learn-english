import React from 'react';
import { useDispatch } from 'react-redux';
import { saveQuestion } from '../features/questions/questionSlice';


const CreateTestForm = () => {
    const dispatch = useDispatch()
    let newQuestion = {
        question: '',
        answers: [],
        response: '',
        test: ''
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("se realizó un Submit");
        console.log({newQuestion});
        dispatch(saveQuestion(newQuestion));
    }
    const handleChange = (e) => {
        newQuestion[e.target.name] = e.target.value
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='question'>Questions: </label>
            <textarea
                name='question'
                id='question'
                placeholder='New question'
                onChange={handleChange}
            >
            </textarea>
            <label>Answers: </label>
                <input name='a' type='text' onChange={handleChange}/>
                <input name='b' type='text' onChange={handleChange}/>
                <input name='c' type='text' onChange={handleChange}/>
                <input name='d' type='text' onChange={handleChange}/>
                <input name='e' type='text' onChange={handleChange}/>
            <label htmlFor='response'>Correct Answer: </label>
            <input name='response' type='text' id='response' onChange={handleChange} />            
            <button>Save Question</button>
        </form>
    );
}

export default CreateTestForm;
