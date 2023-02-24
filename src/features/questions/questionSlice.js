import { createSlice } from '@reduxjs/toolkit'

export const questionSlice = createSlice({
    name: 'question',
    initialState: [
        {
            id: '1',
            question: 'Complete the sentence: "I ____ a doctor"',
            answers: ['am','is','are','none']
        },
        {
            id: '2',
            question: 'Complete the sentence: "He ____ a lawyer',
            answers: ['am','is','are','none']
        }
    ],
    reducers: {

    }
})

export default questionSlice.reducer