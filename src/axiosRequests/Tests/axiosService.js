import APITestRequest from './axios.config'
import axios from 'axios';

const t = sessionStorage.getItem('t')
const url = 'https://learn-english-backend-bay.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'
export function getQuestionsBackend(){
    //return axios.get('http://localhost:4000/api/test',{headers:{'x-token': t}})
    //console.log({t});
    return axios.get(`${url}/api/question`,{headers:{'x-token': t}})
}

export function checkAnswers(questions){
    let test = questions
    return axios.put(`${url}/api/question`,{test},{headers:{'x-token': t}})
}

export function createNewUser(user){
    return axios.post(`${url}/api/users`,user)
}

export function login(user){
    //return axios.post('http://localhost:4000/api/auth',user)
    return axios.post(`${url}/api/auth`,user)
}

export async function saveQuestionsBackend(newQuestions){
    console.log(newQuestions);
    let questionsAddedToBackend = await Promise.all(
        newQuestions.map(q=>{
            return axios.post(`${url}/api/question`,q,{headers:{'x-token': t}})
        })
    )
    return questionsAddedToBackend
}

export function getTestsBackend(){
    return axios.get(`${url}/api/test`)
}