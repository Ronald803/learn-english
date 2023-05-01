import React from 'react'
import {useSelector} from 'react-redux'

export default function Audio() {
  let track = useSelector(state=>state.questions.auxiliar)
  console.log({track});
  return (
    <div>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${track}&amp;show_artwork=false&sharing=false&buying=false&color=000000`}>
                </iframe>
    </div>
  )
}
