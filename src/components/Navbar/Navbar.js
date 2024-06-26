import { Link, useNavigate } from 'react-router-dom'
import { logoutHandler } from '../../services/auth-service'

export const Navbar = () => {

    const navigate = useNavigate()
    // const { token } = useAuth()

    const token = localStorage.getItem('token')

    const handleOnClick = () => {
        if (token) {
            logoutHandler()
            navigate('/auth/login')
        }
    }
    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <img className="icon mr-1" src="https://th.bing.com/th/id/OIP.Wan3qwy0HAIeMTuSz3hIkwAAAA?pid=ImgDet&w=182&h=182&c=7&dpr=1.3" alt="lightbul" />
                <h1 className="heading-title">
                    <Link className="link" to="/">Quiziffy</Link>
                </h1>
            </div>
            <nav className="navigation">
                <ul className="list-non-bullet">
                    <li className="list-item-inline">
                        <Link to="/" className="link cursor">Home</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/auth/signup" className="link cursor">signUp</Link>
                    </li>
                    <li className="list-item-inline">
                        <Link to="/auth/login" className="link cursor" onClick={handleOnClick}>{token ? "Logout" : "Login"}</Link>
                    </li>
                    <li>
                        <Link to="/aboutus" className="link cursor">AboutUs</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
