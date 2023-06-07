import axios from 'axios'

const t = sessionStorage.getItem('t');
const n = sessionStorage.getItem('n');

const url = 'https://learn-english-backend-bay.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function postRound(newRound){
    return axios.post(`${url}/api/games/stop`,newRound,{headers:{'x-token': t}})
}

export function getRoundBackend(){
    return axios.get(`${url}/api/games/stop`,{headers:{'x-token': t}})
}

export function putAnswersBackend(id,body){
    return axios.put(`${url}/api/games/stop/${id}`,body,{headers:{'x-token':t}})
}

export function deleteRoundBackend(id){
    console.log(id);
    return axios.delete(`${url}/api/games/stop/${id}`,{headers:{'x-token':t}})
}