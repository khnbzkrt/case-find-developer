import { GET_USER } from '../constants';

const initialState = {
  user: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER: {
      return {
        ...state,
        user: {
          ...action.payload,
        },
      };
    }
    default:
      return state;
  }
};
