import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    //{
    //    _id: '1',
    //    question: 'Complete the sentence: "I ____ a doctor"',
    //    answers: ['am','is','are','none'],
    //    response: ""
    //},
    //{
    //    _id: '2',
    //    question: 'Complete the sentence: "He ____ a lawyer',
    //    answers: ['am','is','are','none'],
    //    response: ""
    //}
]
export const questionSlice = createSlice({
    name: 'question',
    initialState: initialState,
    reducers: {
        addAnswer: (state,action)=>{
            console.log(action.payload);
            const {id,value} = action.payload
            const foundQuestion = state.find( question => question._id === id )
            if (foundQuestion){
                foundQuestion.response = value;
            }
        },
        getQuestions: (state,action)=>{
            action.payload.map( q=>{
                console.log(q);
                state.push(q)
            })
        },
        addResults: (state,action)=>{
            //console.log(action.payload);
            action.payload.map( q=>{
                const foundIndex = state.findIndex( questionState => {
                    return questionState._id===q._id
                })
                state[foundIndex].correctAnswer = q.correctAnswer
                state[foundIndex].result = q.result
                console.log({foundIndex});
            } )
        }
    }
})

export const {addAnswer,getQuestions,addResults} = questionSlice.actions
export default questionSlice.reducer