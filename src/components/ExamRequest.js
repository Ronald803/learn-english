import React,{useEffect, useState} from 'react';
import { getQuestionsBackend,getTestsBackend } from '../axiosRequests/Tests/axiosService'
import { useDispatch, useSelector } from 'react-redux';
import { cleanEvaluation, getQuestions, setTypeTest,setAuxiliar } from '../features/questions/questionSlice';
import errorAlert from '../alerts/errorAlert';

const ExamRequest = () => {
    const dispatch = useDispatch()
    const [tests, setTests] = useState([]);
    const [req, setReq] = useState(false);
    useEffect(() => {
        getExam('book')
    }, []);
    const getExam = async (parametro)=>{
        getTestsBackend()
            .then( tests => {
                console.log(tests.data.body);
                console.log({parametro});
                let selectedExams = [];
                parametro ? tests.data.body.map(t=>{ if(t.type===parametro){selectedExams.push(t)} }) : selectedExams=[]
                dispatch(setTypeTest(parametro))
                setTests(selectedExams)
            })
            .catch( e => {
                console.log({e});
            } )
    }
    const getQues = (number,aux)=>{
        let n = sessionStorage.getItem('n')
        if(!n){return errorAlert("Debes iniciar sesión para solicitar examenes")}
        dispatch(setAuxiliar(aux))
        getQuestionsBackend(number)
            .then( questions => {
                console.log(questions.data.foundedQuestions);
                dispatch(cleanEvaluation())
                dispatch(getQuestions(questions.data.foundedQuestions))
            } )
            .catch( e=> {
                errorAlert(`Ya diste este examen / este examen no está habilitado para ti, comunícate con tu docente`)
            })
    }
    return (
        <div className='text-center'>
            <div className='row'>
                <div className='col-6'>
                    <button onClick={()=>getExam('book')} className='btn btn-success' style={{"marginBottom":"10px"}}>Solicitar exámenes</button>
                </div>
                <div className='col-6'>
                    <button onClick={()=>getExam('listening')} className='btn btn-success'>Practica Listenings</button>
                </div>
            </div>
            <div className=''>
                <table className='table table-dark table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
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
                                        <button onClick={()=>getQues(test.number,test.auxiliar)} className='btn btn-secondary btnSecondary' >Start</button>
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