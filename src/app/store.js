import {configureStore} from '@reduxjs/toolkit'
import questionsReducer  from '../features/questions/questionSlice'

export const store = configureStore({
    reducer: {
        questions: questionsReducer
    }
})

