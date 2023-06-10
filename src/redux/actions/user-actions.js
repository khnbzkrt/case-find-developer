import axiosInstance from '@/helpers/axiosInstance';

const { GET_USER } = require('../constants');

export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance(`/users/${id}`);
      const data = await response.data;
      dispatch({
        type: GET_USER,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
