import axios from 'axios'

const url = 'https://www.dictionaryapi.com/api/v3/references/sd4/json/';

export function getMeaningWord(word){
    console.log({word});
    return axios.get(`${url}/${word}?key=c9e4a297-dad9-4815-bc33-ce2f93ec4c00`)
}
