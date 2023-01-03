import { gql } from '@apollo/client';

export default function Login_Mutate(email:string, password:string) {
    const LOGIN_MUTATION = gql`
        mutation {
            login(
            loginUserInput: {
                email: "${email}", 
                password: "${password}"
            }
            ) {
            access_token
            }
        }
        `;

    return LOGIN_MUTATION;
}