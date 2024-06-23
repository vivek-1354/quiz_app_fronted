import { useNavigate } from 'react-router-dom'
import { useQuiz } from '../context'
import './QNA.css'

import React, { useEffect, useState } from 'react'

export const QNA = ({ quiz }) => {

    const [isClicked, setIsClicked] = useState(false)

    // useEffect(() => {
    //     setIsClicked(false)
    // }, [])
    const navigate = useNavigate()
    // const { question, options } = quiz
    const { index, score, quizCategory, quizDispatch } = useQuiz()

    const handleNextQ = () => {
        setIsClicked(false)
        if (index < quiz.length - 1) {
            quizDispatch({
                type: "INC_INDEX"
            })
        } else {
            // quizDispatch({
            //     type: "SUBMIT"
            // })
            navigate('/result')
        }
    }
    const handlePreviousQ = () => {
        if (index > 0) {
            quizDispatch({
                type: "DEC_INDEX"
            })
        }
    }

    const handleAnswerClick = (id, isCorrect) => {
        setIsClicked(true)
        if (isCorrect) {
            quizDispatch({
                type: "CORRECT_ANS"
            })
        }

    }
    return (
        <main className="d-grid d-flex justify-center qns-main">
            <section className="question-dialog container-flex">
                <h2 className='d-flex justify-center qsn-title'>
                    {quizCategory}
                </h2>
                <div className="qsn_scr">
                    <span>Question : {index + 1}/{quiz.length}</span>
                    <span className="score">Score:{score}</span>
                </div>
                <div className="question">
                    <span>Q-{index + 1}: {quiz[index].question}</span>
                </div>
                {/* <div className="options-box">
                    <button className='button option d-flex justify-center'>B</button>
                    <button className='button option d-flex justify-center'>C</button>
                    <button className='button option d-flex justify-center'>D</button>
                </div> */}
                {
                    <div className="options-box">
                        {quiz[index].options.map(op => {
                            return (
                                <button
                                    key={op.id}
                                    className={`button option d-flex justify-center ${isClicked && op.isCorrect ? "success" : ""} ${isClicked && !op.isCorrect ? "error" : ""}`}
                                    onClick={() => handleAnswerClick(op.id, op.isCorrect)}>
                                    {op.option}
                                </button>
                            )
                        })}
                    </div>
                }
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="play-btn button btn-secondary cursor">Quit</button>
                        {index > 0 && <button className="nxt-qstn play-now-btn button btn-primary cursor" onClick={handlePreviousQ}>Previous Question</button>}
                        <button className="nxt-qstn play-now-btn button btn-primary cursor" onClick={handleNextQ}>{(index + 1 === quiz.length) ? "Submit" : "Next Question"}</button>
                    </div>
                </div>
            </section>

        </main>
    )
}

