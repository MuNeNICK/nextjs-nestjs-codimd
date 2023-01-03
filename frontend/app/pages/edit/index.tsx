import dynamic from 'next/dynamic'
import Router from 'next/router'
import { getPostData } from '../../lib/api'

const Layout = dynamic(() => import('../../components/layout'))
const Update = dynamic(() => import('../../components/post-update'))
const Delete = dynamic(() => import('../../components/post-delete'))

export async function getServerSideProps(context) {
    const data = await getPostData()

    const pathname = context.query.title

    if (pathname === undefined) {
        Router.push('/')
    }

    const post = data.find((note: any) => note.title === `${pathname}`)

    const HACKMD_URL = process.env.PUBLIC_HACKMD_URL
    
    return { props: { post, HACKMD_URL } }
}

export default function EditMD({post, HACKMD_URL}) {
    return (
        <>
        <Layout>
            <Update />
            <Delete />
            <iframe
                width="100%"
                height="1500"
                src={`${HACKMD_URL}/${post.shortid}`}
                frameBorder="0"
            />
        </Layout>
        </>
    )
}