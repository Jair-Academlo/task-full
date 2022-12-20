import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

export const usersSlice = createSlice({
	name: 'users',
	initialState: [],
	reducers: {
		setUsers: (state, action) => {
			const user = action.payload;
			return user;
		},
	},
});

export const usersThunk = () => dispatch => {
	dispatch(setIsLoading(true));
	axios
		.get(`http://localhost:4100/api/v1/users/`)
		.then(res => dispatch(setUsers(res.data.users)))
		.finally(() => dispatch(setIsLoading(false)));
};

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
