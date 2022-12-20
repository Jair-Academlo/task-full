import React from 'react';
import Userslist from './components/Userslist';
import { Container, Spinner } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import UsersForm from './components/UsersForm';

const App = () => {
	const isLoading = useSelector(state => state.isLoading);

	return (
		<>
			<Container className='mt-4'>
				<h1>Table of users</h1>
				{isLoading && <Spinner animation='border' variant='info' />}
				<UsersForm />
				<Userslist />
			</Container>
		</>
	);
};

export default App;
