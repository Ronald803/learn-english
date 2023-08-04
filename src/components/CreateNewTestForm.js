import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { setNewTest } from '../features/questions/questionSlice';
import errorAlert from '../alerts/errorAlert';
import { postNewTest } from '../axiosRequests/Tests/axiosService';


export default function CreateNewTestForm(props) {
    const dispatch = useDispatch()
    //let test = { name:'',number:0,description:'',questions:0,type:'',auxiliar:'',level:[]}
    const [test, setTest] = useState({});
    const [checkedBoxes, setCheckedBoxes] = useState({
        Básico:     false,
        Auxiliar:   false,
        Medio1:     false,
        Medio2:     false,
        Mañana:     false,
        Tarde:      false,
        Noche:      false
    })
    const handleCheck = (e) => {
        const {name,checked} = e.target;
        setCheckedBoxes({
            ...checkedBoxes,
            [name]: checked
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let level = [];
        if(checkedBoxes.Básico){level.push("Básico")};
        if(checkedBoxes.Auxiliar){level.push("Auxiliar")};
        if(checkedBoxes.Medio1){level.push("Medio1")};
        if(checkedBoxes.Medio2){level.push("Medio2")};
        let schedule = [];
        if(checkedBoxes.Mañana){schedule.push("Mañana")};
        if(checkedBoxes.Tarde){schedule.push("Tarde")};
        if(checkedBoxes.Noche){schedule.push("Noche")};
        postNewTest({...test,level,schedule})
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
        setTest({
            ...test,
            [e.target.name]: e.target.value
        })
        //test[e.target.name] = e.target.value
    }
  
  return (
    <div className='card mt-2' style={{"maxWidth":"600px","marginLeft":"auto","marginRight":"auto"}}>
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
                {/* <div className='col'>
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
                </div> */}
                <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox1" name='Básico' checked={checkedBoxes.Básico} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox1">Básico</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox2" name='Auxiliar' checked={checkedBoxes.Auxiliar} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox2">Auxiliar</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox3" name='Medio1' checked={checkedBoxes.Medio1} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox2">Medio-1</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox4" name='Medio2' checked={checkedBoxes.Medio2} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox2">Medio-2</label>
                    </div>
                </div>
                <div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox5" name='Mañana' checked={checkedBoxes.Mañana} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox1">Mañana</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox6" name='Tarde' checked={checkedBoxes.Tarde} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox2">Tarde</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="checkbox" id="inlineCheckbox7" name='Noche' checked={checkedBoxes.Noche} onChange={handleCheck}/>
                      <label class="form-check-label" for="inlineCheckbox2">Noche</label>
                    </div>
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
