import React,{useState} from 'react';
import { createNewUser } from '../axiosRequests/Tests/axiosService';
import { useDispatch } from 'react-redux'; 
import { saveToken } from '../features/questions/questionSlice';

const CreateUserForm = () => {
    const dispatch = useDispatch()
    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        cellphone:"",
        level:"",
        schedule:"",
        password:""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        //console.log({newUser});
        const answer = await createNewUser(newUser)
        console.log(answer);
        dispatch(saveToken(answer.data.body.password))
    }
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        
    }
    return (
        <form
            onSubmit={handleSubmit}
        >
            <label htmlFor='name'>Apellidos y Nombres: </label>
            <input
                type='text'
                id='name'
                name='name'
                onChange={handleChange}
            />
            <label htmlFor='email'>Email: </label>
            <input
                type='text'
                id='email'
                name='email'
                onChange={handleChange}
            />
            <label htmlFor='cellphone'>Celular: </label>
            <input
                type='text'
                id='cellphone'
                name='cellphone'
                onChange={handleChange}
            />
            <label htmlFor='level'>Nivel: </label>
                <select 
                    name='level'
                    id='level'
                    onChange={handleChange}
                >
                    <option value='Básico'>Básico</option>
                    <option value='Auxiliar'>Auxiliar</option>
                    <option value='Medio I'>Medio I</option>
                    <option value='Medio II'>Medio II</option>
                </select>
            <label htmlFor='schedule'>Horario: </label>
                <select
                    name='schedule'
                    id='schedule'
                    onChange={handleChange}
                >
                    <option value='Mañana'>Mañana</option>
                    <option value='Tarde'>Tarde</option>
                    <option value='Noche'>Noche</option>
                </select>
            <label htmlFor='password'>Contraseña:</label>
            <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
            />
            <button>Registrarse</button>
        </form>
    );
}

export default CreateUserForm;
