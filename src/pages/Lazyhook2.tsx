import React, { useEffect, useMemo, useRef, useState } from 'react'

import { TeamInput, useCreateTeamMutation, useGetTeamsLazyQuery, useGetTodosLazyQuery } from '../types/graphql.v1';

const Lazyhook2: React.FC = () => {

	const [teams, setTeams] = useState<any>([])

	const [fetchTeams, { data, loading, error, }] = useGetTeamsLazyQuery({ onCompleted: setTeams });

	// debugger;
	// assign te.data to state 
	const renderTeams = () => {
		if (Array.isArray(teams.teams) && teams.teams.length > 0) {
			return teams.teams.map((t: any) => {
				return (<li key={t.id}>
					{t.id} - {t.name} - {t.country}
				</li>)
			});
		} else {
			return null;
		}
	}

	return (
		<div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
			<div style={{ flex: 1, }}>
				<h2>Fetch Teams - withLazyHook {loading && <span> loading</span>}
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
					{renderTeams()}
				</ul>
			</div>
		</div>
	);
}
export default Lazyhook2