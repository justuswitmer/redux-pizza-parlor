const pizzaReducer = (state = [], action) => {
    if (action.type === "GET_PIZZA") {
        console.log("in pizzaReducer");
        return action.payload;
    }
    return state;
}

export default pizzaReducer;