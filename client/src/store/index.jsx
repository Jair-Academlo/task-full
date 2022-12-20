import { configureStore } from '@reduxjs/toolkit';
import isLoadingSlice from './slice/isLoading.slice';
import usersSlice from './slice/users.slice';

export default configureStore({
	reducer: {
		users: usersSlice,
		isLoading: isLoadingSlice,
	},
});
