import './QNA.css'

import React from 'react'

export const QNA = ({ category, title, question, options }) => {
    return (
        <main className="d-flex justify-center qns-main">
            <section className="question-dialog container-flex">
                <h2 className='d-flex justify-center qsn-title'>
                    {category}
                </h2>
                <div className="qsn_scr">
                    <span>Question : 1/4</span>
                    <span className="score">Score:10</span>
                </div>
                <div className="question">
                    <span>Q1: {question}</span>
                </div>
                {/* <div className="options-box">
                    <button className='button option d-flex justify-center'>B</button>
                    <button className='button option d-flex justify-center'>C</button>
                    <button className='button option d-flex justify-center'>D</button>
                </div> */}
                {
                    <div className="options-box">
                        {options.map(op => {
                            return (
                                <button key={op.id} className='button option d-flex justify-center'>{op.option}</button>
                            )
                        })}
                    </div>
                }
                <div className="nxt-btn-container">
                    <div className="d-flex gap">
                        <button className="play-btn button btn-secondary cursor">Quit</button>
                        <button className="nxt-qstn play-now-btn button btn-primary cursor">Next Question</button>
                    </div>
                </div>
            </section>

        </main>
    )
}

