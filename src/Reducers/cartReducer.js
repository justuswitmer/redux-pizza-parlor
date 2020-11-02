const cartReducer = (state = [], action) => {
    if (action.type === "ADD_TO_CART") {
        console.log("in cartReducer");
        return [
            ...state,
            action.payload
        ]
    }
    return state;
}

export default cartReducer;