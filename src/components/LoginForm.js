import React from 'react';
import { login } from '../axiosRequests/Tests/axiosService';
import { useDispatch } from 'react-redux';
import { saveUser } from '../features/questions/questionSlice';

const LoginForm = () => {
    const dispatch = useDispatch()
    let user = {
        email: "",
        password:""
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log({user});
        const answer = await login(user)
        console.log(answer.data.body);
        dispatch(saveUser(answer.data.body))
    }
    const handleChange = (e) => {
        user[e.target.name] = e.target.value
    } 
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='email'>Correo electrónico: </label>
            <input
                type='text'
                id='email'
                name='email'
                onChange={handleChange}
            />
            <label htmlFor='password'>Contraseña: </label>
            <input
                type='password'
                id='password'
                name='password'
                onChange={handleChange}
            />
            <button>Login</button>
        </form>
    );
}

export default LoginForm;
