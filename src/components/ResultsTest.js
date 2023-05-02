import React from 'react';
import { useSelector } from 'react-redux';

const ResultsTest = () => {
    const questions = useSelector(state => state.questions)
    console.log(questions.evaluation);
    return (
        <div className='row'>
             <h3>Questions List</h3>
            {questions.evaluation.map( question => (
                <div className='card col-12 col-md-6' key={question._id} style={
                                            {
                                                borderColor: question.result==="Correct" 
                                                ? 
                                                'DarkGreen' 
                                                : 
                                                'red',
                                                "marginTop": "10px",
                                                "borderWidth": "3px"
                                            }
                                            }>
                    <h5 className='card-header text-center'>{question.result}</h5>
                    <div className='card-body'>
                        <p>{question.question}</p>
                        <div className='card'>
                            <ul className='list-group list-group-flush'>
                                {question.answers.map(answer => (
                                    <li 
                                        className='list-group-item'
                                        key={question._id+answer}
                                        style={
                                            {
                                                backgroundColor: answer===question.correctAnswer 
                                                ? 
                                                'lightGreen' 
                                                : 
                                                answer===question.response ? 'pink' : 'none'
                                            }
                                            }
                                    >
                                        {answer}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                </div>
            ))}                        
        </div>
    );
}

export default ResultsTest;
