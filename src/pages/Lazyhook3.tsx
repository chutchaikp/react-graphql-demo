import React, { useEffect, useRef, useState } from 'react'

import { useCreateTeamMutation, useGetTeamsLazyQuery, useGetTodosLazyQuery } from '../types/graphql.v1';

const Lazyhook3: React.FC = () => {
	const [todos, setTodos] = useState<any>([])
	const [teamData, setTeamData] = useState<any>([]);

	const teamName = React.useRef<HTMLInputElement>(null);;
	const teamCountry = React.useRef<HTMLInputElement>(null);;

	// skip: isSkip,
	// fetchPolicy: 'network-only',
	// onCompleted: data => {
	//   if (isSkip) return;
	//   ... code that should run when the query isn't skipped ...
	// }

	const [fetchTodos, td] = useGetTodosLazyQuery({
		onCompleted: (data) => {
			setTodos(data.todos)
		}
	})
	const [fetchTeams, te] = useGetTeamsLazyQuery({
		fetchPolicy: 'network-only',
		onCompleted: setTeamData
	});

	// createteam
	// const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation();
	const [createTeamMutation, st] = useCreateTeamMutation();

	const renderTodos = () => {
		debugger;
		if (Array.isArray(todos) && todos.length > 0) {
			return todos.map((t: any) => {
				return (
					<li key={t.id} >
						{t.id} - {t.title} - {t.finished ? 'done' : 'not yet'}
						<button onClick={() => toggleFinished(t.id, t.finished)} >change</button>
					</li>
				)
			})
		}
		return null;
	}

	const toggleFinished = (todoId: string, finished: boolean) => {
		try {
			setTodos((prev: any) => {
				// debugger;
				return prev.map((t: any) => {
					// debugger;
					if (t.id === todoId) {
						t.finished = !t.finished
					}
					return t;
				})
			});
		} catch (error) {
			console.log(error.message);
		}
	}

	const saveTeam = async (d: any) => {
		d.preventDefault();

		try {
			const { value: tname } = teamName.current || {};
			const { value: tcountry } = teamCountry.current || {};
			if (!tname) return;
			if (!tcountry) return;
			debugger;
			const result = await createTeamMutation({ variables: { team: { name: tname, country: tcountry } } })
		} catch (error) {
			console.log(error.message)
		}

		// how to save with hook

	}

	debugger;

	return (
		<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>

			<div style={{ flex: 1, }}>
				<h2>Fetch Todo - withLazyHook
					{td.loading && <span> Loading ...</span>}
				</h2>
				<div>
					<button onClick={async () => {
						await fetchTodos();
					}
					}>Fetch Todos</button>
				</div>
				<ul>
					{renderTodos()}
					{/* {td.data?.todos?.map((t: any) => {
						return (
							<li key={t.id} >
								{t.id} - {t.title} - {t.finished ? 'done' : 'not yet'}
							</li>
						)
					})} */}
				</ul>
			</div>


			<div style={{ flex: 1, }}>
				<h2>Fetch Teams - withLazyHook {te.loading && <span> loading</span>}
				</h2>
				<div>
					<button onClick={async () => {
						try {
							await fetchTeams();
						} catch (error) {
							console.log(error)
						}
					}}>Fetch Team</button>
				</div>
				<ul>
					{Array.isArray(teamData.teams) && teamData.teams.map((t: any) => {
						return (<li key={t.id}>
							{t.id} - {t.name} - {t.country}
						</li>)
					})}
				</ul>
				<form onSubmit={saveTeam}>
					<input type="text" ref={teamName} />
					<input type="text" ref={teamCountry} />
					<button>save</button>
					<label>{st.loading ? ' saving ...' : ''}</label>
				</form>
			</div>

		</div>
	);
}
export default Lazyhook3