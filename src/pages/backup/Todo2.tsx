import { Button, Heading, MenuButton } from '@chakra-ui/react';
import React, { useState } from 'react'

const Todo2 = () => {

	const data = [
		{ id: 1, todo: "nextjs", finished: false, },
		{ id: 2, todo: "graphql server", finished: false, },
	];

	const [state, setState] = useState(data)

	return (
		<div>
			<Heading>Todo list </Heading>

			<ul>
				{state.map((t) => {
					return (
						<li key={t.id}>
							{t.todo}
							-
							{t.finished ? 'done' : 'not yet'}
							-
							<Button size="xs" colorScheme="purple" onClick={() => {
								const newState = state.map((pv) => {
									if (t.id === pv.id) {
										return { ...pv, finished: !pv.finished }
									} else {
										return { ...pv }
									}
								});
								setState(newState);

							}} >archive</Button>
						</li>
					)
				})}
			</ul>


		</div>
	);
}

export default Todo2