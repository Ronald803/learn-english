import APITestRequest from './axios.config'
import axios from 'axios';
export function getTest(){
    return APITestRequest.get('/api/test',{
        validateStatus: function(status){
            return status<500
        }
    })
}

export function checkAnswers(questions){
    //console.log(questions);
    let test = questions
    //return axios.put('https://learn-english-backend-bay.vercel.app/api/test',{test})
    return axios.put('http://localhost:4000/api/test',{test})
}

export function createNewUser(user){
    return axios.post('http://localhost:4000/api/users',user)
}

export function login(user){
    return axios.post('http://localhost:4000/api/auth',user)
}