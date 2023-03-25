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
        await login(user)
            .then( answer=>{
                console.log(answer.data.body);
                sessionStorage.setItem('t',answer.data.body.token)
                sessionStorage.setItem('n',answer.data.body.name)
                sessionStorage.setItem('r',answer.data.body.rol)
                alert('Bienvenida '+answer.data.body.name)
                dispatch(saveUser(answer.data.body))
                window.location.href='/'
            })
            .catch( error=>{
                console.log({error});
                alert('Lo sentimos algo salió mal')
            })
        
        // const answer = await login(user)
        // console.log(answer.data.body);
        // sessionStorage.setItem('t',answer.data.body.token)
        // sessionStorage.setItem('n',answer.data.body.name)
        // sessionStorage.setItem('r',answer.data.body.rol)
        // alert('Bienvenida '+answer.data.body.name)
        // dispatch(saveUser(answer.data.body))
        // window.location.href='/'
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
