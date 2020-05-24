//react imports
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

//component imports
import Root from './Root'
import Auth from './components/Auth'

//apollo imports
import { ApolloProvider, Query } from 'react-apollo'
import ApolloClient, { gql } from 'apollo-boost'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    clientState: {
        defaults: {
            isLoggedIn: !!localStorage.getItem('authToken')
        }
    }
})

const IS_LOGGED_IN_QUERY = gql`
    query {
        isLoggedIn @client
    }
`

ReactDOM.render(
    <ApolloProvider client={client}>
        <Query query={IS_LOGGED_IN_QUERY}>
            {({ data }) => data.isLoggedIn ? <Root /> : <Auth />}
        </Query>
        <Auth />
    </ApolloProvider>,
    document.getElementById('root'))


serviceWorker.unregister()
