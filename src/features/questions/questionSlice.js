import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    evaluation: [],
    token:'',
    statusTest: false
}
export const questionSlice = createSlice({
    name: 'question',
    initialState: initialState,
    reducers: {
        addAnswer: (state,action)=>{
            console.log(action.payload);
            const {id,value} = action.payload
            const foundQuestion = state.evaluation.find( question => question._id === id )
            if (foundQuestion){
                foundQuestion.response = value;
            }
        },
        getQuestions: (state,action)=>{
            state.statusTest=false
            action.payload.map( q=>{
                console.log(q);
                state.evaluation.push(q)
            })
        },
        addResults: (state,action)=>{
            //console.log(action.payload);
            action.payload.map( q=>{
                const foundIndex = state.evaluation.findIndex( questionState => {
                    return questionState._id===q._id
                })
                state.evaluation[foundIndex].correctAnswer = q.correctAnswer
                state.evaluation[foundIndex].result = q.result
                console.log({foundIndex});
            } )
        },
        cleanEvaluation: (state,action)=>{
            state.evaluation = []
        },
        finishedTest: (state,action)=>{
            state.statusTest = true;
        },
        saveToken: (state,action)=>{
            state.token = action.payload
        }
    }
})

export const {addAnswer,getQuestions,addResults,cleanEvaluation,finishedTest,saveToken} = questionSlice.actions
export default questionSlice.reducer