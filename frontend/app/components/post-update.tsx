import { useRouter } from 'next/router';
import Link from 'next/link'

const Update = () => {
  const router = useRouter();
  const title = router.query.title;
    return (
      <div className="fixed bottom-10 right-10 z-10">
        <Link className="shadow-lg px-5 py-5 rounded-full bg-black text-white" href={`/blog/${title}`}>
          View
        </Link>
      </div>
    )
}

export default Update
