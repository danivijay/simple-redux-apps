import { createStore } from 'redux'
import { SEARCH_INPUT_CHANGE, REPO_SEARCH } from './constants'

const initialState = {
    repos: [],
    searchInputValue: 'default'
}

const reducer = (state = initialState, action) => {
    console.log('reducer', action)
    switch(action.type) {
        case SEARCH_INPUT_CHANGE:
            return Object.assign({}, state, {
                searchInputValue: action.payload
            })
        case REPO_SEARCH:
            console.log(action.payload.items)
            return Object.assign({}, state, {
                repos: action.payload.items
            })
        default:
            return state
    }
}

const store = createStore(reducer)

export default store