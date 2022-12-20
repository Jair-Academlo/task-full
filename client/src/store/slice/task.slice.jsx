import { createSlice } from '@reduxjs/toolkit';

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

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
