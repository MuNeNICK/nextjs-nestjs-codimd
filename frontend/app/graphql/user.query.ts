import { gql } from '@apollo/client';


export const USER_QUERY = gql`
    query {
        user(where: {email: {equals: "mune0127@munenick.me"}}) {
            id,
            email
        }
    }
`;