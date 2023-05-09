import React from 'react';
import { login } from '../axiosRequests/Tests/axiosService';
import { useDispatch } from 'react-redux';
import { saveUser } from '../features/questions/questionSlice';
import successAlert from '../alerts/successAlert';
import errorAlert from '../alerts/errorAlert';

const LoginForm = () => {
    const dispatch = useDispatch()
    let user = {
        email: "",
        password:""
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log({user});
        if(user.email==="" || user.password===""){
            return alert("El email y el password son necesarios para Iniciar sesión")
        }
        await login(user)
            .then( answer=>{
                sessionStorage.setItem('t',answer.data.body.token)
                sessionStorage.setItem('n',answer.data.body.name)
                sessionStorage.setItem('r',answer.data.body.rol)
                successAlert('Bienvenida '+answer.data.body.name)
                dispatch(saveUser(answer.data.body))
                setTimeout(() => {
                    window.location.reload()  
                  }, 2500);
            })
            .catch( error=>{
                errorAlert()
            })
    }
    const handleChange = (e) => {
        user[e.target.name] = e.target.value
    } 
    return (
        <div className='bg-transparent text-white border-white card'>
            <form className='bg-transparent text-white card-body' onSubmit={handleSubmit}>
                <div className='bg-transparent text-white mb-3'>
                    <label className='bg-transparent text-white form-label' htmlFor='email'>Correo electrónico </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        className='bg-transparent text-white form-control'
                        onChange={handleChange}
                    />
                </div>
                <div className='bg-transparent text-white mb-3'>
                    <label className='bg-transparent text-white form-label' htmlFor='password'>Contraseña </label>
                    <input
                        className='bg-transparent text-white form-control'
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <button className='bg-transparent text-white btn btn-secondary'>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;
