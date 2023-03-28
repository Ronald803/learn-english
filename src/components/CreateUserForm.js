import React,{useState} from 'react';
import { createNewUser } from '../axiosRequests/Tests/axiosService';
import { useDispatch } from 'react-redux'; 
import { saveUser } from '../features/questions/questionSlice';

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
        for(const property in newUser){
            if(newUser[property]===""){
                return alert("Todos los datos son necesarios para crear un nuevo usuario")
            }
        }
        console.log("uuuuu la la la ");
        await createNewUser(newUser)
            .then( answer =>{
                console.log(answer.data);
                sessionStorage.setItem('t',answer.data.body.token)
                sessionStorage.setItem('n',answer.data.body.name)
                sessionStorage.setItem('r',answer.data.body.rol)
                alert(answer.data.message)
                window.location.href='/'
            })
            .catch( error => {
                console.log(error.data);
                alert(error.data.body.message)
            })

        // const answer = await createNewUser(newUser)
        // console.log(answer);
        // dispatch(saveUser(answer.data.body))

    }
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
        
    }
    return (
        <div className='card'>
            <form
                onSubmit={handleSubmit}
                className='card-body'
            >
                <div>
                    <label 
                        htmlFor='name'
                        className='form-label'
                    >
                        Apellidos y Nombres 
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                
                <div>
                    <label htmlFor='email'>Email </label>
                    <input
                        type='text'
                        id='email'
                        name='email'
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                
                <div>
                    <label htmlFor='cellphone'>Celular </label>
                    <input
                        type='text'
                        id='cellphone'
                        name='cellphone'
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                
                <div>
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        onChange={handleChange}
                        className='form-control'
                    />
                </div>
                
                <div className='row'>
                    <div className='col'>
                        <label htmlFor='level'>Nivel </label>
                        <select 
                            name='level'
                            id='level'
                            onChange={handleChange}
                            className='col form-select'
                        >
                            <option value="">Elige una opción</option>
                            <option value='Básico'>Básico</option>
                            <option value='Auxiliar'>Auxiliar</option>
                            <option value='Medio I'>Medio I</option>
                            <option value='Medio II'>Medio II</option>
                        </select>
                    </div>
                    <div className='col'>
                        <label htmlFor='schedule'>Horario</label>
                            <select
                                name='schedule'
                                id='schedule'
                                onChange={handleChange}
                                className='form-select'
                            >
                                <option value="">Elige una opción</option>
                                <option value='Mañana'>Mañana</option>
                                <option value='Tarde'>Tarde</option>
                                <option value='Noche'>Noche</option>
                            </select>
                    </div>
                </div>
                
               
                <button className='btn btn-secondary'>Registrarse</button>
            </form>
        </div>
        
    );
}

export default CreateUserForm;
