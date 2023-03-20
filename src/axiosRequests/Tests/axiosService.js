import APITestRequest from './axios.config'
import axios from 'axios';

const t = sessionStorage.getItem('t')
const url = 'https://learn-english-backend-bay.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'
export function getTest(){
    //return axios.get('http://localhost:4000/api/test',{headers:{'x-token': t}})
    //console.log({t});
    return axios.get(`${url}/api/test`,{headers:{'x-token': t}})
}

export function checkAnswers(questions){
    let test = questions
    return axios.put('http://localhost:4000/api/test',{test},{headers:{'x-token': t}})
}

export function createNewUser(user){
    return axios.post('http://localhost:4000/api/users',user)
}

export function login(user){
    //return axios.post('http://localhost:4000/api/auth',user)
    return axios.post(`${url}/api/auth`,user)
}

export function saveTest(test){
    console.log(test);
    test.map(q=>{
        axios.post('http://localhost:4000/api/test',q)
    })
}