const orderReducer = (state = [], action) => {
    if (action.type === "ORDER_PIZZA") {
        console.log("in reducer");
        return action.payload;
    }

    return state;
}

export default orderReducer;