import React from 'react'
import { connect } from 'react-redux'

const InputMirror = (props) => {
  return (
    <div>
      <input value={props.inputValue} onChange={props.inputChanged} />
      <p>{props.inputValue}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {inputValue: state.inputValue}
}

const mapDispatchToProps = (dispatch) => {
    return {
        inputChanged: (e) => {
            console.log('changed')
            const action = {
                type: 'INPUT_CHANGE',
                payload: e.target.value
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InputMirror)
