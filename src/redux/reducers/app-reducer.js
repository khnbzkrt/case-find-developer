import { GET_ALL_USERS, GET_USER } from '../constants';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS: {
      return {
        ...state,
        users: [...action.payload],
      };
    }
    case GET_USER:
      return {
        ...state,
        currentUser: {
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
