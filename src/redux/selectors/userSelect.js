import { createSelector } from 'reselect';

const selectUsers = (state) => state.users;
const selectUserId = (_, props) => props.userId;

export const selectUserById = createSelector(
  [selectUsers, selectUserId],
  (users, userId) => users.find((user) => user.id == userId)
);

export const selectAllUsers = createSelector([selectUsers], (users) => users);
