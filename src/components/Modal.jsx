import React from 'react'
import './Modal.css'

const Modal = ({ onSubmit, onCancel, onClose, children }) => {
  return (
    <div className='modal-container' onClick={(e) => { 
      if (e.target.className === "modal-container") {
        onClose("The modal was closed")
      }
    } }>
      <div className='modal'>
        <div className='modal-header'>
          <p className='close' onClick={() => onClose("The modal was closed")}>&times;</p>
        </div>
        <div className='modal-content'>
          { children }
        </div>
        <div className='modal-footer'>
          <button className='btn btn-submit' onClick={() => onSubmit("The Submit button was clicked")}>
            Submit
          </button>
          <button className='btn btn-cancel' onClick={() => onCancel("The Cancel button was clicked")}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal