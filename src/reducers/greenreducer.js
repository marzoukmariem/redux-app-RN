// INCREASE the COUNTER of GREEN SCREEN
const greenreducer = (state = {numgreen:1}, action) => {
    switch (action.type) {
        case 'INCREASE_COUNTER_GREEN':
            return { numgreen: state.numgreen + 1 }

        default:
            return state
    }
}

export default greenreducer