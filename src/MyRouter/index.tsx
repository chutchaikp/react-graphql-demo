import { Flex } from '@chakra-ui/react'
import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from '../common/AppHeader'
import { Routes } from './config'

function index() {
	return (
		<Flex justify="center">
			<Suspense fallback={null}>

				<Flex direction="column"
					minW="375px"
					maxW="555px">
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
				</Flex>

			</Suspense>
		</Flex>
	)
}

export default index