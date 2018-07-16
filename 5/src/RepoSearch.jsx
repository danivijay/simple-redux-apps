import React from 'react'
import { connect } from 'react-redux'
import { SEARCH_INPUT_CHANGE } from './store/constants'
import {getRepos} from './Api'

const RepoSearch = (props) => {
    console.log('render', props)
  return (
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={(e) => props.onRepoSearch(e, props.searchInputValue)} >
        <input value={props.searchInputValue} onChange={props.onSearchInputChange} />
      </form>
      <ul>
          {props.repos.map((repo) => {
              return (<li key={repo.id} >{repo.name}</li>)
          })}
      </ul>
    </div>
  )
}

const mapStateToProps = ({searchInputValue, repos}) => {
    return {
        searchInputValue,
        repos
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchInputChange: (e) => {
            const action = {
                type: SEARCH_INPUT_CHANGE,
                payload: e.target.value
            }
            dispatch(action)
        },
        onRepoSearch: (e, query) => {
            e.preventDefault()
            console.log(query)
            getRepos(dispatch, query)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch)