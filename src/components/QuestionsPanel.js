import React from 'react';
import {useSelector} from 'react-redux'
import "./QuestionsPanel.css"

const QuestionsPanel = () => {
    const questions = useSelector(state=>state.questions)
    console.log(questions.evaluation, 'from Questions Panel');
    return (
        <div className='center'>
            <h3>Questions Panel</h3>
            {questions.evaluation.map( (question,index) => (
                <div 
                    className='circle center'
                    style={
                        {
                            display: 'inline-block',
                            backgroundColor: question.response==="" ? 'white' : 'darkslateblue',
                            color: question.response==="" ? 'black' : 'white'
                        }
                    }
                >
                    {index+1}
                </div>
            ) )}
        </div>
    );
}

export default QuestionsPanel;
