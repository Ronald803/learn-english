import React,{useState} from 'react'
import { postRound } from '../axiosRequests/Stops/axiosServiceStops';
import successAlert from '../alerts/successAlert';


function RoundStopForm() {
    let round = {
        letter: "",
        numberOfWinners: ""
    }
    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log({round});
        await postRound(round)
            .then( answer=>{
                successAlert(answer.data.message)
            })
            .catch( e=>{
                console.log(e);
            })
    }
    const handleChange = (e) => {
        round[e.target.name] = e.target.value;
    }
  return (
    <div>
        <form className='bg-transparent text-white card-body' onSubmit={handleSubmit}>
            <div className='bg-transparent text-white mb-3'>
                <label className='bg-transparent text-white form-label' htmlFor='letter'>Letra</label>
                <input
                    type='text'
                    id='letter'
                    name='letter'
                    className='bg-transparent text-white form-control'
                    onChange={handleChange}
                />
            </div>
            <div className='bg-transparent text-white mb-3'>
                <label className='bg-transparent text-white form-label' htmlFor='numberOfWinners'>Número de Ganadores</label>
                <input
                    className='bg-transparent text-white form-control'
                    type='number'
                    id='numberOfWinners'
                    name='numberOfWinners'
                    onChange={handleChange}
                />
            </div>
            <button className='bg-transparent text-white btn btn-secondary'>Crear Ronda</button>
        </form>
    </div>
  )
}

export default RoundStopForm