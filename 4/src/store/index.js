import {createStore} from 'redux'
import { INPUT_CHANGE, INPUT_SUBMIT, ON_DELETE_ITEM } from './constants'

const initialState = {
    inputText: '',
    items: []
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case (INPUT_CHANGE):
            return Object.assign({}, state, {
                inputText: action.payload
            })
        case (INPUT_SUBMIT):
            return Object.assign({}, state, {
                inputText: '',
                items: [...state.items, state.inputText]
            })
        case (ON_DELETE_ITEM):
            let copyOfItems = state.items.slice()
            copyOfItems.splice(action.payload, 1)
            return Object.assign({}, state, {
                items: copyOfItems
            })
        default: 
            return state
    }
}

const store = createStore(reducer)

export default store
