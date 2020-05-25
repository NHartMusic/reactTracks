import React from 'react'

//router imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//component imports
import withRoot from './withRoot'
import App from './pages/App'
import Profile from './pages/Profile'
import Header from './components/Shared/Header'

//apollo imports
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Root = () => (
    <Query query={ME_QUERY}>
        {({ data, loading, error }) => {
            if (loading) return <div>This thang is loading</div>
            if (error) return <div>Something got fucked up</div>
            const currentUser = data.me

            return (
                <Router>
                    <>
                        <Header currentUser={currentUser} />
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route path='/profile/:id' component={Profile} />
                        </Switch>
                    </>
                </Router>
            )
        }}
    </Query>
)

const ME_QUERY = gql`
    {
        me {
            id
            username
            email
        }
    }
`

//const GET_TRACKS_QUERY = gql`
//    {
//        tracks {
//            id
//            title
//            description
//            url
//        }
//    }
//`

export default withRoot(Root)
