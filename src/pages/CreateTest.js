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
            Crear test
            {
                testSet ? 
                <CreateTestForm></CreateTestForm>
                :
                <form onSubmit={handleSubmit}>
                <label htmlFor='t'>Test Number:</label>
                <input type='number' id='t' name='t' onChange={handleChange}/>
                <label htmlFor='qu'>Number of Questions</label>
                <input type='number' id='qu' name='qu' onChange={handleChange}/>
                <button>Crear Nuevo Test</button>
            </form>
            }
        </div>
    );
}

export default CreateTest;
