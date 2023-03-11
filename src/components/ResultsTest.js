import React from 'react';
import { useSelector } from 'react-redux';

const ResultsTest = () => {
    const questions = useSelector(state => state.questions)
    console.log(questions.evaluation);
    return (
        <div>
             <h3>Questions List</h3>
            {questions.evaluation.map( question => (
                <div key={question._id}>
                    <h2>{question.result}</h2>
                    <h3>{question.question}</h3>
                    {question.answers.map(answer => (
                        <div 
                            key={question._id+answer}
                            style={
                                {
                                    backgroundColor: answer===question.correctAnswer 
                                    ? 
                                    'green' 
                                    : 
                                    answer===question.response ? 'pink' : 'none'
                                }
                                }
                        >
                            {answer}
                        </div>
                    ))}
                </div>
            ))}                        
        </div>
    );
}

export default ResultsTest;
