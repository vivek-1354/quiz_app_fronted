import { useEffect, useState } from "react"
import axios from "axios"

// import Navbar from "../../Navbar/Navbar"
// import QuizCard from "../../QuizCard/QuizCard"
import { Navbar, QuizCard } from "../../../components/index"


export const Home = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:8000/quiz')
                setCategories(response.data.data)
                // console.log(quizes)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])
    return (
        <>
            <Navbar />
            {/* <AuthLogin /> */}
            <div className="main d-flex wrap-md align-center justify-start">
                {
                    categories.map(quiz => <QuizCard quizCategory={quiz} key={quiz.id} />)
                }
            </div>
        </>
    )
}

