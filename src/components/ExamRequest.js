import React,{useEffect, useState} from 'react';
import { getQuestionsBackend,getTestsBackend } from '../axiosRequests/Tests/axiosService'
import { useDispatch, useSelector } from 'react-redux';
import { cleanEvaluation, getQuestions } from '../features/questions/questionSlice';

const ExamRequest = () => {
    const dispatch = useDispatch()
    const [tests, setTests] = useState([]);
    const [req, setReq] = useState(false);
    useEffect(() => {
     
        return () => {
            getExam();    
        };
    }, []);
    const getExam = async ()=>{
        getTestsBackend()
            .then( tests => {
                console.log(tests);
                setTests(tests.data.body)
            })
            .catch( e => {
                console.log({e});
            } )
        // let n = sessionStorage.getItem('n')
        // if(!n){
        //     return alert("Debes iniciar sesión para solicitar examenes")
        // }
        // getQuestionsBackend()
        //     .then( questions => {
        //         console.log(questions.data);
        //         dispatch(cleanEvaluation())
        //         dispatch(getQuestions(questions.data))
        //     } )
        //     .catch( e=> {
        //         alert(`Something went wrong: ${e}`)
        //     })
    }
    const getQues = (number)=>{
        console.log({number});
        let n = sessionStorage.getItem('n')
        if(!n){
            return alert("Debes iniciar sesión para solicitar examenes")
        }
        getQuestionsBackend(number)
            .then( questions => {
                console.log(questions.data.foundedQuestions);
                dispatch(cleanEvaluation())
                dispatch(getQuestions(questions.data.foundedQuestions))
            } )

            .catch( e=> {
                //console.log("error");
                alert(`Ya diste este examen / este examen no está habilitado para ti, comunícate con tu docente`)
            })
    }
    return (
        <div className='text-center'>
            <button onClick={getExam} className='btn btn-primary' style={{"marginBottom":"10px"}}>Solicitar exámenes</button>
            <div>
                <table className='table table-dark table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>Number</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Level</th>
                            <th scope='col'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tests.map( (test,index)=>{
                                return(
                                <tr>
                                    <th>
                                        <span>{test.number}</span>
                                    </th>
                                    <td>
                                        <span>{test.name}</span>
                                    </td>
                                    <td>
                                        <span>{test.level}</span>
                                    </td>
                                    <td>
                                        <button onClick={()=>getQues(test.number)} className='btn btn-primary' >Start Test</button>
                                    </td>
                                </tr>
                                )
                            } )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ExamRequest;
//79106826
//etn 606 conversiones electromagneticas teoria y laboratorio

//etn-640 proyecto II 

//etn-832 electronica industrial teoria y laboratorio

//martes a las 9am