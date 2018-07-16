import { REPO_SEARCH } from './store/constants'

export const getRepos = (dispatch, query) => {
    console.log(query)
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