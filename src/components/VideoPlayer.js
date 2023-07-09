import React from 'react';
import ReactPlayer from 'react-player';
import {useSelector} from 'react-redux';

function VideoPlayer() {
    let url = useSelector(state=>state.questions.auxiliar)
  return (
    <div >
        <ReactPlayer
            url={url}
            width="100%"
            height="360px"
            controls
            volume="0.8"
        />

    </div>
  )
}

export default VideoPlayer