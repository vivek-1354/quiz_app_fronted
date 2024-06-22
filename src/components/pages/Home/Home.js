import { useEffect, useState } from "react"
import axios from "axios"

import Navbar from "../../Navbar/Navbar"
import QuizCard from "../../QuizCard/QuizCard"


const Home = () => {
    const [quizes, setQuizes] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/quiz')
                setQuizes(response.data.data)
                // console.log(quizes)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <>
            <Navbar />
            <div className="container d-flex direction-row">
                {
                    quizes.map(quiz => <QuizCard quiz={quiz} key={quiz.id} />)
                }
            </div>
        </>
    )
}

export default Home