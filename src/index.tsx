import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, createHttpLink, DefaultOptions, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import MyRouter from './MyRouter';
import { BrowserRouter } from 'react-router-dom';
// import { getTokens } from './common/TokenMan';
// import { Auth0Provider } from '@auth0/auth0-react'
import { ChakraProvider, ColorModeScript, extendTheme, } from "@chakra-ui/react"
import theme from "./theme"
import store from './redux/app/store'
import { Provider } from 'react-redux'

require('dotenv').config()

const { REACT_APP_GRAPHQL_SCHEMA } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_SCHEMA,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // const token = getTokens();
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

// learn auth0 for react app
// https://auth0.com/blog/complete-guide-to-react-user-authentication/

// learn more here 
// https://www.richardkotze.com/coding/send-jwt-client-apollo-graphql

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
});

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <ChakraProvider theme={theme}>
          {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
          <Provider store={store}>
            <MyRouter />
          </Provider>
        </ChakraProvider>
      </ApolloProvider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

