import './Auth.css'


export const AuthSignup = () => {
    return (
        <div className="grid d-flex justify-center box">
            <div className="login-auth d-flex direction-column justify-center">
                <h2 className="auth-title">SignUp</h2>
                <form action="">
                    <div className="form-container">
                        <label htmlFor="" className="form-label">Username</label>
                        <input type="text" placeholder='Enter username' />
                    </div>
                    <div className="form-container">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password" placeholder='Enter password' />
                    </div>
                    <div className="cta">
                        <button className="button login-btn btn-margin cursor sign-up-btn">SignUp</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

// export default AuthLogin