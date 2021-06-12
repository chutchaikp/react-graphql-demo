import React from 'react'
import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import styles from '../App.module.css'
function AppHeader() {
	return (
		<div >
			<div className={styles.AppHeader}>
				<img src={logo} alt="logo" width="80" height="80" />
				{/* <h1> React GraphQL demo </h1> */}
				<div>
					<ul className={styles.AppLink}>
						<li className={styles.box}>
							<Link to="/" >Home</Link>
						</li>
						<li className={styles.box}>
							<Link to="/hook">Hook</Link>
						</li>
						<li className={styles.box}>
							<Link to="/lazyhook">Lazy hook</Link>
						</li>
						<li className={styles.box}>
							<Link to="/lazyhook2">Lazy hook 2</Link>
						</li>
						<li className={styles.box}>
							<Link to="/lazyhook3">Lazy hook 3</Link>
						</li>
						<li className={styles.box}>
							<Link to="/todo">Todo</Link>
						</li>
						{/* <li className={styles.box}>
							<Link to="/todo2">Todo2</Link>
						</li> */}
						<li className={styles.box}>
							<Link to="/lazyhook2">Upvote</Link>
						</li>
						<li className={styles.box}>
							<Link to="/login">JWT</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default AppHeader
