import { useState } from 'react'
import { createPortal } from 'react-dom'
import Modal from '../Modal';
import "./Home.css"

import React from 'react'

const Home = () => {

  const [modalOpen, setModalOpen] = useState(false)
  const [message, setMessage] = useState("")

  const openModal = () => {
    setModalOpen(true)
    setMessage("")
  }

  const handleButtonClick = (value) => {
    setModalOpen(false)
    setMessage(value)
  }

  return (
    <div className='container'>
    { message }
    <button className="btn btn-open" onClick={ () => openModal() }>Open Modal</button>
    {modalOpen && (
      createPortal(<Modal onSubmit={handleButtonClick} onCancel={handleButtonClick} onClose={handleButtonClick}>
        <h1>This is the title</h1>
        <p>This is the modal description.</p>
      </Modal>, document.body)
    )}
    </div>
  )
}

export default Home