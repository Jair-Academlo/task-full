import React from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { usersThunk } from '../store/slice/users.slice';

const Userslist = () => {
	const users = useSelector(state => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(usersThunk());
	}, []);

	return (
		<Table striped bordered hover variant='dark'>
			<thead>
				<tr>
					<th>#</th>
					<th> Name</th>
					<th>Email</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => (
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.email}</td>
						<td>{user.status}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default Userslist;
