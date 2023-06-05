import axios from 'axios'

const t = sessionStorage.getItem('t');
const n = sessionStorage.getItem('n');

const url = 'https://learn-english-backend-bay.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function postRound(newRound){
    return axios.post(`${url}/api/games/stop`,newRound,{headers:{'x-token': t}})
}