import React from 'react'
import withRoot from './withRoot'

//apollo imports
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

const Root = () => (
    <Query query={GET_TRACKS_QUERY}>
        {({ data, loading, error }) => {
            if (loading) return <div>This thang is loading</div>
            if (error) return <div>Something got fucked up</div>

            return <div>{JSON.stringify(data)}</div>
        }}
    </Query>
)

const GET_TRACKS_QUERY = gql`
    {
        tracks {
            id
            title
            description
            url
        }
    }
`

export default withRoot(Root)
