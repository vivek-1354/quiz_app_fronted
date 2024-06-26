import './QuizCard.css'


import { useAuth, useQuiz } from '../../context'
import { useNavigate } from 'react-router-dom'

export const QuizCard = ({ quizCategory }) => {
    const navigate = useNavigate()

    const { token } = useAuth()
    const { quizDispatch } = useQuiz()
    const { title, description, category } = quizCategory

    const handlePlayNow = () => {
        quizDispatch({
            type: "CATEGORY",
            payload: category
        })
        if (token) {
            navigate('/quiz')
            // console.log(category)
        } else {
            navigate('/auth/login')
        }
    }

    return (
        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={"https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&rs=1&c=1&qlt=95&w=142&h=113"} alt="quizcard" />
            </div>
            <div className="details">
                <h3 className="title">{title}</h3>
                <span>{description}</span>
            </div>
            <button className="button play-now-btn btn-primary cursor" onClick={handlePlayNow}>Play Now</button>
        </div>

    )
}


