import { useRouter } from 'next/router';
import Link from 'next/link'

const Edit = () => {
  const router = useRouter();
  const pathname = router.asPath.split('/').pop();
    return (
      <div className="fixed bottom-10 right-10 z-10">
        <Link className="shadow-lg px-5 py-5 rounded-full bg-black text-white" href={`/edit?title=${pathname}`}>
          Edit
        </Link>
      </div>
    )
}

export default Edit