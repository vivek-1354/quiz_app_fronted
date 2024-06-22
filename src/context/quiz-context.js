import { createContext, useContext, useReducer } from 'react'

import { quizReducer } from '../reducer/quiz-reducer.js';

const initialState = {
    index: 0,
    score: 0,
    quizCategory: ""
}

const QuizContext = createContext()



const QuizContextProvider = ({ children }) => {

    const [{ index, score, quizCategory }, quizDispatch] = useReducer(quizReducer, initialState)

    return (
        <QuizContext.Provider value={{ index, score, quizCategory, quizDispatch }}>
            {children}
        </QuizContext.Provider>
    )
}



const useQuiz = () => useContext(QuizContext)

export { QuizContextProvider, useQuiz, QuizContext }