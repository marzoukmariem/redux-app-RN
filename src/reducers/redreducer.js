
const redreducer = (state ={numred:0}, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER_RED':
            return { numred: state.numred + 1 }

        default:
            return state
    }
}

export default redreducer