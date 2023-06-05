import React,{useState} from 'react'
import StopForm from './StopForm';
import RoundStopForm from './RoundStopForm';

function Stop() {
  const [newRoundStop, setnewRoundStop] = useState(false);

return (
    <div>
      <div className='text-center'>
        <button onClick={()=>setnewRoundStop(!newRoundStop)} className='btn btn-success'>Nuevo Round</button>
      </div>
      {
            newRoundStop
            ?
            <div>
              <RoundStopForm></RoundStopForm>
            </div>
            :
            <div>
                false
            </div>            
        }
        <StopForm></StopForm>
    </div>
  )
}

export default Stop