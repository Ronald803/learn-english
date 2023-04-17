import axios from 'axios'

const t = sessionStorage.getItem('t')
const n = sessionStorage.getItem('n')

const url = 'https://learn-english-backend-bay.vercel.app';
//const url = 'http://localhost:4000';
//const url = 'https://learn-english-backend-1ymtsw2jj-ronald803.vercel.app/'

export function getScoresBackend(){
    console.log(`${url}/api/user?name=${n}`);
    return axios.get(`${url}/api/users?_id=642a0ce827ce49b5727221c1`,{headers:{'x-token': t}})
}