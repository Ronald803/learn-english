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
        sessionStorage.setItem('t',answer.data.body.token)
        sessionStorage.setItem('n',answer.data.body.name)
        sessionStorage.setItem('r',answer.data.body.rol)
        dispatch(saveUser(answer.data.body))
    }
    const handleChange = (e) => {
        user[e.target.name] = e.target.value
    } 
    return (
        <div className='card'>
            <form className='card-body' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='email'>Correo electrónico </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        className='form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='mb-3'>
                    <label className='form-label' htmlFor='password'>Contraseña </label>
                    <input
                        className='form-control'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <button className='btn btn-secondary'>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
