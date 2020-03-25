export const CounterReducer = (state, action) => {
    let currentCount = state
    switch(action.type) {
        case 'INCREASE_COUNTER':
            return currentCount+=1 
        case 'DECREASE_COUNTER':
            return currentCount-=1
        default:
            return state
    }
}