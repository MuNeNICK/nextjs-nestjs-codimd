import { setCookie } from 'nookies';
import Router from 'next/router'
import { initializeApollo } from '../../lib/graphqlClient'
import Login_Mutate from '../../graphql/login.mutate';


export default function PageWithJSbasedForm(ctx) {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }

    const LOGIN_MUTATION = Login_Mutate(data.email, data.password)
    
    const client = initializeApollo(null, ctx);

    const result = await client.mutate({
      mutation: LOGIN_MUTATION,
    })

    setCookie(null, 'accessToken', result.data.login.access_token, {
      maxAge: 60 * 60,
      path: '/',
      httpOnly: false,
      sameSite: 'Strict',
      secure: true,
    })

    Router.push('/dashboard')
  }
  return (
    <div className="flex items-center h-screen w-full bg-teal-lighter">
      <div className="w-full bg-white rounded shadow-xl p-8 m-4 md:max-w-sm md:mx-auto">
        <form className="mb-6" onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="email">email</label>
          <input className="border py-2 px-3 text-grey-darkest" type="text" id="email" name="email" required />
          </div>
          <div className="flex flex-col mb-6">
          <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="password">Password</label>
          <input className="border py-2 px-3 text-grey-darkest" type="password" name="password" id="password" required />
          </div>
          <button className="block bg-black hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}