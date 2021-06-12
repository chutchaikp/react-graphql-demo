import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from '../App.module.css'
import { saveTokens } from '../common/TokenMan'
import { useAppLoginMutation } from '../types/graphql.v1'

// learn more
// https://github.com/strapi/strapi-examples/tree/master/login-react
// https://www.richardkotze.com/coding/send-jwt-client-apollo-graphql
// https://www.richardkotze.com/coding/jwt-secure-client-react-graphql

const Login: React.FC = () => {

	const history = useHistory();
	const [appLogin] = useAppLoginMutation()

	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")
	const [jwt, setJwt] = useState("");

	const onSubmit = async (e: any) => {
		try {
			e.preventDefault();
			if (!username) return;
			if (!password) return;

			var { data } = await appLogin({
				variables: {
					email: username,
					password
				}
			})

			const jwt = data?.login?.jwt;
			setJwt(jwt!);

			saveTokens({ jwt: jwt!, account: username });

			setTimeout(() => history.push('/'), 3000);

		} catch (error) {
			// login fail			
			console.error(error);
			setJwt(error.message)
		}
	}

	return (
		<div className={styles.login}>
			<form onSubmit={onSubmit} >
				<input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
				<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				<button type="submit">submit</button>
				{jwt}
			</form>
		</div>
	);
}
export default Login