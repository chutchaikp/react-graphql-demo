import React, { useState } from 'react'
import { Button, FormControl, Input } from '@chakra-ui/react';

const MyForm = (props: any) => {

	const [mform, setMform] = useState<any>({
		firstName: false,
		lastName: false,
		email: false,
	})

	const isValidEmail = (inp: string) => {
		return (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(inp))
	}

	const formValidate = (e: any) => {
		e.preventDefault();
		setMform((prev: any) => {
			let newItems = { ...prev };
			if (e.target["firstName"].value.length === 0) {
				newItems = { ...newItems, firstName: true };
			} else {
				newItems = { ...newItems, firstName: false };
			}
			if (e.target["lastName"].value.length === 0) {
				newItems = { ...newItems, lastName: true }
			} else {
				newItems = { ...newItems, lastName: false }
			}

			if (!isValidEmail(e.target["email"].value)) {
				newItems = { ...newItems, email: true }
			} else {
				newItems = { ...newItems, email: false }
			}
			return newItems;
		});

		// not save if error found - check invalid field, if no field invalid let save it
		const keys = Object.keys(mform);
		const found = keys.some((s: string) => {
			return mform[s] === true;
		});
		console.log(!found, 'let save it')

		// save it

	}

	return (
		<div>
			<h1>Sign Up </h1>
			<form onSubmit={formValidate}>

				<FormControl isInvalid={mform.firstName} >
					<label htmlFor="firstName">
						First Name
						<Input name="firstName" />
					</label>
				</FormControl>

				<FormControl isInvalid={mform.lastName} >
					<label htmlFor="lastName">
						Last Name
						<Input name="lastName" />
					</label>
				</FormControl>

				<FormControl isInvalid={mform.email} >
					<label htmlFor="email">
						Email
						<Input name="email" />
					</label>
				</FormControl>

				<Button type="submit" colorScheme="teal" >Submit</Button>
			</form>
		</div>
	);
}

export default MyForm