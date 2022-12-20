import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './slice/task.slice';

export default configureStore({
	reducer: {
		users: usersSlice,
	},
});
