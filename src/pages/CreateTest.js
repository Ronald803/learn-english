import React from 'react';
import CreateTestForm from '../components/CreateTestForm';

const CreateTest = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        console.log("cambio");
    }
    return (
        <div>
            Crear test
            <form onSubmit={handleSubmit}>
                <label htmlFor='test'>Número de Test</label>
                <input type='number' id='test' name='test' onChange={handleChange}/>
                <button>Crear Nuevo Test</button>
            </form>
            <CreateTestForm></CreateTestForm>
        </div>
    );
}

export default CreateTest;
