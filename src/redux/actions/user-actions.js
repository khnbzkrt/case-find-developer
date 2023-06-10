import axiosInstance from '@/helpers/axiosInstance';

const { GET_USER, GET_ALL_USERS } = require('../constants');

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance(`/users`);
      const data = await response.data;
      dispatch({
        type: GET_ALL_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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
