import React from 'react'
import { connect } from 'react-redux'
import { SEARCH_INPUT_CHANGE, REPO_SEARCH } from './store/constants'

const RepoSearch = (props) => {
    console.log('render', props)
  return (
    <div>
      <h1>Repo Search</h1>
      <form onSubmit={props.onRepoSearch} >
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
        onRepoSearch: (e) => {
            e.preventDefault()
            let query = 'steak'
            fetch(`https://api.github.com/search/repositories?q=${query}`)
                .then(res => {
                    return res.json()
                })
                .then((data) => {
                    // console.log(data)
                    const action = {
                        type: REPO_SEARCH,
                        payload: data
                    }
                    dispatch(action)
                })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RepoSearch)