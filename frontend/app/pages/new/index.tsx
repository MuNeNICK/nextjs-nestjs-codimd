import dynamic from 'next/dynamic'
import ErrorPage from 'next/error'
import { parseCookies } from 'nookies'
import { useEffect, useState } from "react"

const Layout = dynamic(() => import("../../components/layout"))
const New = dynamic(() => import("../../components/post-new"))

export default function NewMD() {
  const accessToken = parseCookies().accessToken;
  const [isClient, setIsClient] = useState(false);
  const new_page = () => {
    if (isClient) {
      return (
        <Layout>
          <New />
          <iframe
            width="100%"
            height="1500"
            src={`${process.env.NEXT_PUBLIC_HACKMD_URL}/new`}
            frameBorder="0"
          />
        </Layout>
      )
    }
    else {
      return <ErrorPage statusCode={401} />
    }
  }

  if (accessToken) {
    useEffect(() => {
      setIsClient(true);
    }, []);
  }

  return (
    <>
      {new_page()}
    </>
  )
}