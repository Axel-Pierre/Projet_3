function pokeReducer(state, action) {
    switch (action.type) {
        case 'Promise_Complete':
            return [...state, action.payload];
        default:
            return [...state];
    }
}
export default pokeReducer;