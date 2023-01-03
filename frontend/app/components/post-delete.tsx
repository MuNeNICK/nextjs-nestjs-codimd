import { useRouter } from 'next/router'
import Modal from 'react-modal'
import { useState } from 'react'
import { initializeApollo } from '../lib/graphqlClient'
import { gql } from '@apollo/client';

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    width                 : '500px',
    height                : '300px',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#__next')



const Delete = (ctx) => {
  const client = initializeApollo(null, ctx);
  const router = useRouter()
  const [modalIsOpen,setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <div className="fixed bottom-24 right-10 z-10">
      <button className="shadow-lg px-4 py-5 rounded-full bg-black text-white" type="button" onClick={openModal}>Delete</button>
      <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
        <p className="text-center mt-5 mb-8 text-5xl md:text-5xl font-bold tracking-tighter leading-tight mt-6">削除しますか？</p>
        <div className="flex justify-between mt-24">
          <button className="shadow-lg border-solid border-2 bottom-10 px-24 py-5 rounded-full bg-white text-black" type="button" onClick={closeModal}>NO</button>
          <button className="shadow-lg px-24 py-5 rounded-full bg-black text-white" type="button" onClick={async () =>{
            await client.mutate({mutation: gql`
            mutation {
                deleteNote(
                where: {
                        title: "${router.query.title}"
                }
                ){
                title
                }
            }
            `})
            router.push(`/blog/`)
          }}>OK</button>
        </div>
      </Modal>
    </div>
  )
}

export default Delete
