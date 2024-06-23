export const quizReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "CATEGORY":
            newState = { ...state, quizCategory: action.payload }
            return newState
        case "INC_INDEX":
            newState = { ...state, index: state.index + 1 }
            return newState
        case "DEC_INDEX":
            newState = { ...state, index: state.index - 1 }
            return newState
        default:
            return state
    }
}