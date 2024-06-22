import React, { Fragment, useState, useEffect } from 'react'
import { Navbar, QNA } from '../../../components'
import { useAuth } from '../../../context'
import axios from 'axios'
export const Quiz = () => {
    const [quiz, setQuiz] = useState()
    const { category } = useAuth()

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/quiz')
                const filterData = response.data.data.filter(cat => cat.category === category)
                setQuiz(filterData[0].quiz)
                // console.log(response.data.data)
                // console.log(quizes)
                // console.log(filterData[0].quiz)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    console.log(category)
    return (
        <>
            <Navbar />
            <div className="main d-flex wrap-md align-center justify-start">
                {
                    quiz && quiz.map(qz => <QNA key={qz.id} category={category} title={qz.title} question={qz.question} options={qz.options} />)
                }
            </div>
        </>
    )
}
