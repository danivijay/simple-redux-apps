import React from 'react'
import { connect } from 'react-redux'
import Footer from './Footer'

import { INPUT_CHANGE, INPUT_SUBMIT, ON_DELETE_ITEM } from './store/constants'

const Lister = (props) => {

    console.log('render', props)
    return (
    <div>
        <h1>Lister</h1>
        <form onSubmit={props.onInputSubmit} >
            <input value={props.inputText} onChange={props.inputChange} />
        </form>
        <ul>
            {props.items.map((item, index) => {
                return (<
                    li key={index} 
                        onClick={() => props.itemDelete(index)} 
                    >{item}</li>
            )
            })}
        </ul>
        <Footer />
    </div>
    )
}

const mapStateToProps = ({inputText, items}) => {
    return {
        inputText,
        items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChange: (e) => {
            const action = {
                type: INPUT_CHANGE,
                payload: e.target.value
            }
            dispatch(action)
        },
        onInputSubmit: (e) => {
            e.preventDefault()
            dispatch({type: INPUT_SUBMIT})
        },
        itemDelete: (index) => {
            const action = {
                type: ON_DELETE_ITEM,
                payload: index
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lister)
