import axios from "axios";


export const loginHandler = async (username, password) => {

    try {
        const { data: { token }, status } = await axios.post('http://localhost:8000/auth/login?', {
            username: username,
            password: password
        })
        if (status === 200) {
            console.log(status)
            localStorage.setItem("token", token)
            return token
        }
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}


export const logoutHandler = () => {
    localStorage.clear()
}