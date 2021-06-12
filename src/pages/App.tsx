import React from 'react';
import { useGetTodosQuery } from '../types/graphql.v1';

const App = () => {

  const { data, error, loading } = useGetTodosQuery();

  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return (<div>Something went wrong</div>)
  }

  return (
    <div >
      <h2>GraphQL Query withHooks</h2>
      <ul>
        {data!.todos!.map((d?) => {
          return (
            <li key={d?.id} >{d?.id} - {d?.title} - {d?.finished ? "done" : "not yet"}</li>
          )
        })}
      </ul>

    </div>
  );
}

export default App;
