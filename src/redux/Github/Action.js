import axios from "axios";
import { 
    GET_ALLUSERS,
    SEARCH_USERS,
     GET_AUSER,
     FETCH_USER_ERROR,
     GET_REPOS,
     SET_LOADING,
     CLEAR_USERS,
     SET_ALERT,
     REMOVE_ALERT,
     GET_ALLREPOS
     } from "./Type";
//create action creator

export const getAllUsers=()=> dispatch=>{
    dispatch({
        type: SET_LOADING
    })
    axios.get(`https://api.github.com/users?
        client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &secret_key=${process.env.REACT_APP_GITHUB_SECRETE_KEY}`)
        .then((res)=>{
            const github_users= res.data;
            // dispatch(getAllUsers(users))
            dispatch({
                type:GET_ALLUSERS,
                payload: github_users
            }) 
        }).catch((error)=>{
            dispatch({
                type:FETCH_USER_ERROR,
                payload:error.message
            }) 
        })
    
}

export const searchUsers=(text)=>dispatch=>{
    dispatch({
        type: SET_LOADING,
    });

    axios.get(`https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &secret_key=${process.env.REACT_APP_GITHUB_SECRETE_KEY}`).then((res)=>{
       
   dispatch({
            type:SEARCH_USERS,
            payload: res.data.items
        })
    
    }).catch((error)=>{
       dispatch({
            type:FETCH_USER_ERROR,
            payload:error.message
        })
    })
   
}

export const getAUser=(username)=>dispatch=>{
    dispatch({
        type: SET_LOADING
    })
    axios.get(`https://api.github.com/users/${username.login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &secret_key=${process.env.REACT_APP_GITHUB_SECRETE_KEY}`).then(
        (res)=>{
            dispatch({
                type: GET_AUSER,
                payload: res.data
            })
        }).catch((error)=>{
            dispatch({
                type: FETCH_USER_ERROR,
                payload: error.message
            })
        })

}

export const getAllRepos=(repos)=>{
    return {
        type: GET_REPOS,
        payload: repos
    }
}

//clear user
export const clearUsers=()=>{
    return {
        type: CLEAR_USERS
    }
}

//set alert
export const setAlert=(msg, type='danger')=>dispatch=>{
    
    // return {
    //     type: SET_ALERT,
    //     payload: {msg, type}
    // }
    dispatch({
        type: SET_ALERT,
       payload: {msg, type}
    })

   setTimeout(()=>dispatch(removeAlert()), 3000)
    
    
}

//removeAlert
export const removeAlert=()=>{
    return {
        type: REMOVE_ALERT,

    }
}

//get all repos for a user
export const getRepos=(username)=>dispatch=>{
    dispatch({
        type: SET_LOADING
    })

    axios.get(`https://api.github.com/users/${username.login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &secret_key=${process.env.REACT_APP_GITHUB_SECRETE_KEY}`).then((res)=>{
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })

    }).catch((error)=>{
        dispatch({
            type: FETCH_USER_ERROR,
            payload: error.message
        })
    })
}

// export const fetchUserError=(error)=>{
//     return {
//         type: GET_ERRORS,
//         payload:error
//     }
// }

// export const fetchUsersFinal=()=>{
//     return (dispatch)=>{
//         axios.get(`https://api.github.com/users?
//         client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
//         &secret_key=${process.env.REACT_APP_GITHUB_SECRETE_KEY}`)
//         .then((res)=>{
//             const users= res.data
//             dispatch(getAllUsers(users))
//         }).catch((error)=>{

//         })
//     }
// }