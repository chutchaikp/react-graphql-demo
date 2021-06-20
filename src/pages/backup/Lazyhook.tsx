import React, { useEffect, useRef, useState } from 'react'

import { TeamInput, useCreateTeamMutation, useGetTeamsLazyQuery, useGetTodosLazyQuery } from '../../types/graphql.v1';

const Lazyhook: React.FC = () => {

	useEffect(() => {

		return () => {
			// cleanup
		}
	}, [])

	const teamName = React.useRef<HTMLInputElement>(null);;
	const teamCountry = React.useRef<HTMLInputElement>(null);;

	// const [fetchTodos, { data, error, loading, called }] = useGetTodosLazyQuery()
	const [fetchTodos, td] = useGetTodosLazyQuery()
	const [fetchTeams, te] = useGetTeamsLazyQuery();

	// createteam
	// const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation();
	const [createTeamMutation, st] = useCreateTeamMutation();

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


	// if (td.data) {
	// 	setTodos((prevState: any) => td.data)
	// }

	// if (te.data) {
	// 	setTeams((prevState: any) => {
	// 		 return  te.data; 
	// 		} );
	// }

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
					{td.data?.todos?.map((t: any) => {
						return (
							<li key={t.id} >
								{t.id} - {t.title} - {t.finished ? 'done' : 'not yet'}
							</li>
						)
					})}
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

					{te.data?.teams?.map((t: any) => {
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
export default Lazyhook