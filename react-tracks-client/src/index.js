//react imports
import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

//component imports
import Root from './Root'
import Auth from './components/Auth'

//apollo imports
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Auth />
    </ApolloProvider>
    ,
    document.getElementById('root'))


serviceWorker.unregister()
