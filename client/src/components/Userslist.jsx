import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUsers } from '../store/slice/task.slice';

const Userslist = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		axios
			.get(`http://localhost:4100/api/v1/users/`)
			.then(res => dispatch(setUsers(res.data.users)));
	}, []);
	return (
		<div>
			<h1>task list</h1>
		</div>
	);
};

export default Userslist;
