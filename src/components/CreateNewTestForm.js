import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setNewTest } from '../features/questions/questionSlice';
import errorAlert from '../alerts/errorAlert';
import { postNewTest } from '../axiosRequests/Tests/axiosService';


export default function CreateNewTestForm(props) {
    const dispatch = useDispatch()
    let test = { name:'',number:0,description:'',level:'',questions:0,type:'',auxiliar:'' }
    const handleSubmit = (e) => {
        e.preventDefault()
        postNewTest(test)
            .then(a=>{
                console.log({a});
                if(a.data.message="Test añadido correctamente"){
                    dispatch(setNewTest(test));
                    props.function(true)
                }
                else{
                    errorAlert()
                }
            })
            .catch(e=>{
                console.log(e);
                errorAlert()
            })
        
    }
    const handleChange = (e) => {   
        test[e.target.name] = e.target.value
    }
  
  return (
    <div className='card mt-2'>
        <div className='card-body'>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label className='form-label' htmlFor='name'>Name of the Test:</label>
                    <input className='form-control' type='text' id='name' name='name' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='number'>Test Number:</label>
                    <input className='form-control' type='number' id='number' name='number' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='description'>Description or instrucitons</label>
                    <input className='form-control' type='text' id='description' name='description' onChange={handleChange}/>
                </div>
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
                <div className=''>
                    <label className='form-label' htmlFor='questions'>Number of Questions</label>
                    <input className='form-control' type='number' id='questions' name='questions' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='type'>Type of test:</label>
                    <input className='form-control' type='text' id='type' name='type' onChange={handleChange}/>
                </div>
                <div className=''>
                    <label className='form-label' htmlFor='auxiliar'>Info Auxiliar Audio:</label>
                    <input className='form-control' type='text' id='auxiliar' name='auxiliar' onChange={handleChange}/>
                </div>
                <button className='btn btn-dark'>Crear Nuevo Test</button>
            </form>
        </div>
    </div>
    )
}
