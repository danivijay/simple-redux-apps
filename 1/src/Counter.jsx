import React from 'react'
import { connect } from 'react-redux'

const Counter = (props) => {
    console.log('render', props)
  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {props.count}</p>
      <button onClick={props.onIncrementClick} >increment</button>
    </div>
  )
}

function mapStateToProps(state) {
    console.log('mapStateToProps', state)
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementClick: () => {
            console.log('onIncrementClick')
            const action = {type: "INCREMENT"}
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
