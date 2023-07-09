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
                console.log(questions);
                console.log(questions.data.foundedQuestions);
                dispatch(cleanEvaluation())
                dispatch(getQuestions(questions.data.foundedQuestions))
            } )
            .catch( e=> {
                console.log(e);
                errorAlert(`Ya diste este examen / este examen no está habilitado para ti, comunícate con tu docente`)
            })
    }
    const selector = (e) =>{
        console.log("blablabla",e);
    }
    return (
        <div className='text-center'>
            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" onChange={(e)=>getExam(e.target.value)}>
                <option selected>Open this select menu</option>
                <option value="book">Book</option>
                <option value="listening">Listening</option>
                <option value="video">Practice with videos</option>
            </select>
            <div className=''>
                <table className='table table-dark table-bordered'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Level</th>
                            <th scope='col'>Points</th>
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
                                        {
                                            test.points !== null
                                            ?
                                            <span>{test.points}</span>
                                            :
                                            <button onClick={()=>getQues(test.number,test.auxiliar)} className='btn btn-secondary btnSecondary' >Start</button>
                                        }
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