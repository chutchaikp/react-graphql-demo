import React, { useState } from 'react'

// import styles from '../App.module.cs'
import styles from '../App.module.css'

const SimpleTodo = () => {

	const data = [
		{ id: 1, title: "nodejs", finished: true },
		{ id: 2, title: "reactjs", finished: true },
		{ id: 3, title: "graphql", finished: true },
		{ id: 4, title: "typescript", finished: true },
		{ id: 5, title: "docker", finished: true },
		{ id: 6, title: "nextjs", finished: true },
	]

	const [todos, setTodos] = useState(data)
	// const [name, setName] = useState('');

	// by index
	// const toggle = (index: number) => {
	// 	try {
	// 		const newTodo = [...todos];
	// 		newTodo[index].finished = !newTodo[index].finished
	// 		setTodos(newTodo);
	// 	} catch (error) {
	// 		debugger;
	// 		console.log(error)
	// 	}
	// }

	// by id
	const toggle = (id: number) => {
		let mapped = todos.map(task => {
			return task.id === Number(id) ? { ...task, finished: !task.finished } : { ...task };
		});
		setTodos(mapped);
	}

	return (
		<div>
			Simple todo edit

			<ul className="">
				{todos.map((t: any, index: number) => {
					return (
						<li key={t.id} className={t.finished ? styles.todo : styles.todoStrike} >
							{t.id}
							-
							{t.title}
							-
							{t.finished ? "done" : "not yet"}
							-
							<button onClick={() => toggle(t.id)}> toggle</button>
						</li>
					)
				})}
			</ul>
		</div >
	);
}
export default SimpleTodo