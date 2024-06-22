import './Auth.css'

import { useAuth } from '../../context/index'
import { useRef } from 'react'


export const AuthLogin = () => {

    const user = useRef("")
    const pass = useRef("")

    const { username, password, authDispatch } = useAuth()

    const handleLogin = (e) => {
        e.preventDefault()
        authDispatch(
            {
                type: "LOGIN",
                payload: {
                    username: user.current.value,
                    password: pass.current.value
                }
            }
        )
    }

    console.log(username, password)
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

            </div>
        </div>
    )
}

// export default AuthLogin