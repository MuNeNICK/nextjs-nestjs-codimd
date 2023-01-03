import { useRouter } from 'next/router'
import { getPostData } from '../lib/api'

const New = () => { 
  const router = useRouter()
  return (
    <div className="fixed bottom-10 right-10 z-10">
      <button className="shadow-lg p-5 rounded-full bg-black text-white" type="button" onClick={async () =>{
          const data = await getPostData()
          router.push(`/posts/${data[0].title}`)
      }}>
        Post
      </button>
    </div>
  )
}

export default New
