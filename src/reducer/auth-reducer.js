export const authReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN":
            const newState = { ...state, ...action.payload }
            return newState
        default:
            return state;
    }
}

