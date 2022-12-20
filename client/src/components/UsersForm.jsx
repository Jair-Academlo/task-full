import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addUsersThunk } from '../store/slice/users.slice';

const UsersForm = () => {
	const { register, handleSubmit } = useForm();
	const dispatch = useDispatch();
	const submit = data => {
		dispatch(addUsersThunk(data));
	};
	return (
		<Form onSubmit={handleSubmit(submit)}>
			<Form.Group className='mb-3'>
				<Form.Label>Name</Form.Label>
				<Form.Control
					type='text'
					placeholder='Enter Name'
					{...register('name')}
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					type='email'
					placeholder='Enter email'
					{...register('email')}
				/>
			</Form.Group>
			<Form.Group className='mb-3'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					type='password'
					placeholder='pasword'
					{...register('password')}
				/>
			</Form.Group>

			<Button className='mb-3' variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default UsersForm;
