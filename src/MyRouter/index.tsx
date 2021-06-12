import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../common/AppHeader'
import { Routes } from './config'

function index() {
	return (
		<div>
			<Suspense fallback={null}>
				<Header />
				<Switch>
					{Routes.map((ritm) => {
						return (
							<Route key={ritm.component} path={ritm.path} exact={ritm.exact}
								component={lazy(() => import(`../pages/${ritm.component}`))}
							/>
						);
					})}
				</Switch>
			</Suspense>
		</div>
	)
}

export default index