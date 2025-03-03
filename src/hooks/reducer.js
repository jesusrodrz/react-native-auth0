import {deepEqual} from '../utils/deepEqual';

/**
 * @ignore
 */
const reducer = (state, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return {...state, isLoading: true};
    case 'LOGIN_COMPLETE':
      return {...state, error: null, user: action.user};

    case 'LOGOUT_COMPLETE':
      return {...state, error: null, user: null};

    case 'ERROR':
      return {...state, isLoading: false, error: action.error};

    case 'INITIALIZED':
      return {...state, isLoading: false, user: action.user};

    case 'SET_USER':
      if (deepEqual(state.user, action.user)) {
        return state;
      }
      return {...state, user: action.user};
  }
};

export default reducer;
