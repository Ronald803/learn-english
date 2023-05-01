import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CreateTestForm from '../components/CreateTestForm';
import { setNewTest } from '../features/questions/questionSlice';


const CreateTest = () => {
    const dispatch = useDispatch();
    const [testSet, setTestSet] = useState(false);
    let test = {
        qu:0,t:0
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setNewTest(test))
        setTestSet(true)        
    }
    const handleChange = (e) => {   
        test[e.target.name] = e.target.value
    }
    return (
        <div>
            {
                testSet ? 
                <CreateTestForm></CreateTestForm>
                :
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='t'>Test Number:</label>
                        <input className='form-control' type='number' id='t' name='t' onChange={handleChange}/>
                    </div>
                    
                    <div className='mb-3'>
                        <label className='form-label' htmlFor='qu'>Number of Questions</label>
                        <input className='form-control' type='number' id='qu' name='qu' onChange={handleChange}/>
                    </div>
                                        
                    <button className='btn btn-dark'>Crear Nuevo Test</button>
                </form>
            }
        </div>
    );
}

export default CreateTest;
