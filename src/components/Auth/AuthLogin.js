import './Auth.css'

import { useAuth } from '../../context/index'
import { useRef } from 'react'
import { loginHandler } from '../../services/auth-service'
import { useNavigate } from 'react-router-dom'


export const AuthLogin = () => {

    const user = useRef("")
    const pass = useRef("")

    const navigate = useNavigate()

    const { authDispatch } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        const token = loginHandler(user.current.value, pass.current.value)
        if (token) {
            authDispatch(
                {
                    type: "LOGIN",
                    payload: {
                        username: user.current.value,
                        password: pass.current.value,
                        token: token
                    }
                }
            )
            navigate('/')
        }
        // authDispatch(
        //     {
        //         type: "CLEAR_CREDENTIALS",
        //         payload: {
        //             username: "",
        //             password: ""
        //         }
        //     }
        // )
    }
    return (
        <div className="d-grid d-flex justify-center">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">Login</h2>
                <form action="">
                    <div className="form-container">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" className='form-input lh-ls' ref={user} placeholder='Enter username' />
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" className='form-input lh-ls' ref={pass} placeholder='Enter password' />
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn" onClick={handleLogin}>Login</button>
                    </div>
                </form>
                <div className="">
                    <button className="button login-btn btn-outline-primary btn-margin cursor sign-up-btn" onClick={handleLogin}>
                        Login with Test Credentials
                    </button>
                </div>


            </div>
        </div>
    )
}

// export default AuthLogin