import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    evaluation: [],
    user: {
        name:'',
        token:'',
        rol:''
    },
    statusTest: false,
    newQuestions: []
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
        saveUser: (state,action)=>{
            state.user.token    = action.payload.token;
            state.user.name     = action.payload.name;
            state.user.rol      = action.payload.rol
        },
        setNewTest: (state,action)=>{
            console.log(action.payload);
            const {qu,t} =action.payload
            for(let i=0; i<qu; i++){
                state.newQuestions.push({
                    question: '',
                    answers: ['','','','',''],
                    response: '',
                    i,
                    test: t
                })
            }
        },
        saveQuestion: (state,action)=>{
            const p = action.payload
            const q = {
                question:   p.question,
                response:   p.response,
                test:       p.test,
                answers:    [p.a,p.b,p.c,p.d,p.e]
            }
            state.newQuestions.push(q)
        },
        updateQuestion: (state,action)=>{
            console.log(action.payload);
            const {value,i,j,k} = action.payload
            if(k===undefined){
                state.newQuestions[i][j] = value
            } else {
                console.log(value,i,j,k);
                state.newQuestions[i][j][k] = value
            }
        }
    }
})

export const {      addAnswer,
                    getQuestions,
                    addResults,
                    cleanEvaluation,
                    finishedTest,
                    saveUser,
                    saveQuestion,
                    setNewTest,
                    updateQuestion
                } = questionSlice.actions
export default questionSlice.reducer