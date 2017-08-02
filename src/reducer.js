
import {combineReducers} from 'redux'

const todos1Reducer = (state = [], action) => {
    const newState = state.slice()
    switch (action.type) {
        case 'ADD_ITEM_1':
            newState.push(action.item)
            return newState
        default: 
            return newState
    }
}

const todos2Reducer = (state = [], action) => {
    const newState = state.slice()
    switch (action.type) {
        case 'ADD_ITEM_2':
            newState.push(action.item)
            return newState
        default: 
            return newState
    }
}

const mainReducer = combineReducers({
    todos1: todos1Reducer,
    todos2: todos2Reducer
})

export default mainReducer
