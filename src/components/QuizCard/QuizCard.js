import './QuizCard.css'

const QuizCard = ({ quiz }) => {
    const { title, description } = quiz
    return (
        <div className="container d-flex direction-column">
            <div className="img-box">
                <img className="img" src={"https://tse1.mm.bing.net/th?id=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&pid=Api&rs=1&c=1&qlt=95&w=142&h=113"} alt="quizcard" />
            </div>
            <div className="details">
                <h3 className="title">{title}</h3>
                <span>{description}</span>
            </div>
            <button className="button play-now-btn btn-primary cursor">Play Now</button>
        </div>

    )
}


export default QuizCard