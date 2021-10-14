import {createSelector} from 'reselect'

export const getUsersSelector = (state) => {
    return state.usersData.users;
}

export const getUsersSuperSelector = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})