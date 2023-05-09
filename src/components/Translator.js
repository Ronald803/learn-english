import React,{useState} from 'react'
import { translateWord } from '../axiosRequests/Dictionary/axiosServiceDictionary';

export default function Translator() {
    let newWord = {word: ""}
    const [definitions, setDefinitions] = useState([])
    const [i, setI] = useState(0)
    const handleSubmit = async (e) =>{
        e.preventDefault();
        setI(0)
        let aux = [];
        if(newWord.word !== ""){
            translateWord(newWord.word)
                .then(response=>{
                    console.log(response.data);
                    if(response.data[0].shortdef){
                        response.data.map(element=>{aux.push(element.shortdef[0])})
                        setDefinitions(aux)
                    } else {
                        response.data.map(element=>{aux.push(`Quizas quisiste decir: ${element}`)})
                        setDefinitions(aux)
                    }
                })
                .catch(e=>{
                    console.log(e);
                })
        }
    }
    const handleChange = (e)=>{newWord[e.target.name] = e.target.value}
    const increase = (arg)=>{
        if(arg==="+"){
            if(i===definitions.length-1){setI(0)} else {setI(i+1)}
        } else {
            if(i===0){setI(definitions.length-1)} else {setI(i-1)}
        }

    }
    return (
    <div>
        <form onSubmit={handleSubmit} className='text-center'>
            <li className='nav-item'>
                <a className='nav-link'>TRANSLATE a word</a>
            </li>
            <div className='input-group'>
                <input type='text' className='form-control' id='newWord' placeholder='Type a word' name='word' onChange={handleChange}/>
                <button className='btn btn-outline-secondary' id='button-addon2'>Search</button>           
            </div>
        </form>
        {
            definitions.length>0
            &&
            <div>
                <div className='row'>
                    <div className='text-center col-6'><button className='btn btn-primary mt-2' onClick={()=>increase("-")}>{`< Previous`}</button></div>
                    <div className='text-center col-6'><button className='btn btn-primary mt-2' onClick={()=>increase("+")}>{`Next >`}</button></div>
                </div>
                <div>
                    ({i+1}). {definitions[i]}
                </div>
            </div>
        }
    </div>
  )
}
