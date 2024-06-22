export const authReducer = (state, action) => {

    let newState;
    switch (action.type) {
        case "LOGIN":
            newState = { ...state, ...action.payload }
            return newState
        case "CATEGORY":
            newState = { ...state, category: action.payload }
            return newState
        default:
            return state;
    }
}

