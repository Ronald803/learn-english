import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        _id: '1',
        question: 'Complete the sentence: "I ____ a doctor"',
        answers: ['am','is','are','none'],
        response: ""
    },
    {
        id: '2',
        question: 'Complete the sentence: "He ____ a lawyer',
        answers: ['am','is','are','none'],
        response: ""
    }
]
export const questionSlice = createSlice({
    name: 'question',
    initialState: initialState,
    reducers: {
        addAnswer: (state,action)=>{
            console.log(action.payload);
            const {id,value} = action.payload
            const foundQuestion = state.find( question => question.id === id )
            if (foundQuestion){
                foundQuestion.response = value;
            }
        },
        getQuestions: (state,action)=>{
            action.payload.map( q=>{
                console.log(q);
            })
            state.push(action.payload[0])
        }
    }
})

export const {addAnswer,getQuestions} = questionSlice.actions
export default questionSlice.reducer