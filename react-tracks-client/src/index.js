import React from "react";
import ReactDOM from "react-dom";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";

//apollo imports
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Root />
    </ApolloProvider>
    ,
    document.getElementById("root"));


serviceWorker.unregister();
