import React from 'react'
import areYouSure from '../alerts/areYouSure';
import { deleteRoundBackend } from '../axiosRequests/Stops/axiosServiceStops';

function StopResults(props) {
    const r = sessionStorage.getItem('r');
    let student = false;
    if(r!="admin" && r!="teacher"){student = true};
    const winners = props.winners;
    console.log({winners});
    const id = props.round;
    console.log({id});
    const categories = [
        'Name_or_Lastname',
        'Country_or_City',
        'Color_or_Adjective',
        'Fruit_or_Vegetable',
        'Work_or_Occupation',
        'Verb',
        'Object'
    ]
    const deleteRound = async()=>{
        areYouSure(deleteRoundBackend,id.id)
    }
  return (
    <div>
        {
            !student
            &&
            <div className='text-center'>
                <button onClick={()=>deleteRound()} className='btn btn-warning'>Eliminar Ronda</button>
            </div>
        }
        {
            winners.map((winner,index)=>{
                return(
                    <div key={index} className='card mt-2'>
                        <div className='text-center border bg-black pt-2'>
                            <h4 className='text-white'>{winner.user}</h4>
                        </div>
                        <div className='card-body'>
                            <form>
                                {
                                    categories.map( (cat,ind) =>{
                                        return(
                                            <div className="mb-1 row" key={ind}>
                                                <label htmlFor={cat}  className="col-6 col-form-label border">{cat}</label>
                                                <div className='col-6 border'>
                                                    <input className="form-control-plaintext" type="text" value={winner.body[cat]}/>
                                                </div>
                                            </div>        
                                        )
                                    })
                                }
                            </form>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default StopResults