import { createSelector } from 'reselect';

const getUserData = (state) => state.user;

export const userSelect = createSelector([getUserData], (user) => user);
