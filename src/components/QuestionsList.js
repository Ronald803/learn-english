import React from 'react';
import {useSelector} from 'react-redux'

const QuestionsList = () => {
    const stateQuestions = useSelector(state => state.questions)
    console.log({stateQuestions}, 'from questions List');
    return (
        <div>
            Questions List
        </div>
    );
}

export default QuestionsList;
