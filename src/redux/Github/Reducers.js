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
} from "./Type";

import initialState from "./State";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_ALLUSERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_ERROR:
      return {
        ...state,
        loading: false,
        users: [],
        repos: [],
        user: {},
        error: action.payload,
      };

    case GET_AUSER:
      return {
        ...state,
        loading: true,
        user: action.payload,
        error: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        loading: true,
        repos: action.payload,
        error: action.payload,
      };
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alert: false,
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default reducer;
