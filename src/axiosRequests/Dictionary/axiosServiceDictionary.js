import axios from 'axios'

const url =  'https://www.dictionaryapi.com/api/v3/references';
            //https://www.dictionaryapi.com/api/v3/references/spanish/json/language?key=your-api-key
            //https://www.dictionaryapi.com/api/v3/references/sd4/json/
export function getMeaningWord(word){
    //console.log({word});
    return axios.get(`${url}/sd4/json/${word}?key=c9e4a297-dad9-4815-bc33-ce2f93ec4c00`)
}

export function translateWord(word){
    //console.log({word});
    return axios.get(`${url}/spanish/json/${word}?key=0b9d5737-40dc-4fe3-9c2f-5e70644601ec`)
}