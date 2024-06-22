import { createContext, useContext, useReducer } from 'react'

import { authReducer } from '../reducer/auth-reducer';

const initialState = {
    username: "",
    password: "",

}

const AuthContext = createContext();



const AuthProvider = ({ children }) => {

    // const [state, authDispatch] = useReducer(authReducer, initialState)
    const [{ username, password }, authDispatch] = useReducer(authReducer, initialState)

    return (
        <AuthContext.Provider value={{ username, password, authDispatch }}>
            {children}
        </AuthContext.Provider>
    )

}



const useAuth = () => useContext(AuthContext)


export { useAuth, AuthProvider }