import React from 'react';
import {useSelector} from 'react-redux'

const QuestionsPanel = () => {
    const stateQuestions = useSelector(state=>state.questions)
    console.log({stateQuestions}, 'from Questions Panel');
    return (
        <div>
            Questions Panel
        </div>
    );
}

export default QuestionsPanel;
