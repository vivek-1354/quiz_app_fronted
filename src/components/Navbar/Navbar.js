import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <header className="heading d-flex grow-shrink-basis align-center">
            <div className="heading-title-icon d-flex grow-shrink-basis align-center">
                <img className="icon mr-1" src="/assets/image.png" alt="lightbul" />
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
                        <Link to="/auth/login" className="link cursor">Login</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
