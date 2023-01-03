import nookies, { destroyCookie } from 'nookies';
import Router from 'next/router'
import Layout from '../../components/layout'
import Container from '../../components/container'
import { getPostSlugs } from '../../lib/api'
import Link from 'next/link';

export async function getServerSideProps(ctx) {

  const cookies = nookies.get(ctx);
  const accessToken = cookies.accessToken;

  // トークンがない場合ログイン画面にリダイレクト
  if (!accessToken) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },

      props: {} as never,
    };
  }


  const allPost = await getPostSlugs()

  return {
    props: {
      allPost,
    },
  };
};

const handleSubmit = async (event: any) => {
  event.preventDefault()

  destroyCookie(null, 'accessToken')

  Router.push('/')

}

export default function DashboardPage({ allPost }) {

  return (
    <Layout>
      <Container>
        <article className="prose prose-lg max-w-none">
          <div className="max-w-4xl mx-auto mb-32">
            <h1 className="mt-5 mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">Dashboard Page</h1>
            <h2>All posts</h2>
            <h3><Link className="" href={`/new`}>new post</Link></h3>
            <div className='mt-8 content-center'>
              <ul className="list-disc">
                {allPost.map((slug) =>
                  <li>
                    <Link className="" href={`/posts/${slug}`}>{slug}</Link>
                  </li>
                )}
              </ul>
            </div>
            <form className="mt-8 mb-6" onSubmit={handleSubmit}>
              <button className="block bg-black hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Logout</button>
            </form>
          </div>
        </article>
      </Container>
    </Layout>
  );
};