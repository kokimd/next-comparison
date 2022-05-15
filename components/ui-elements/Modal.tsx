import { FC, memo, ReactNode } from 'react'
import ReactModal from 'react-modal'

ReactModal.setAppElement('*')

type Props = {
  children: ReactNode
  modalIsOpen: boolean
  closeModal: () => void
}

const customStyles = {
  content: {
    width: '50%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '10px',
    boxShadow: '5px 10px 20px rgba(0,0,0,0.25)',
  },
}

export const Modal: FC<Props> = memo(
  ({ modalIsOpen, closeModal, children }) => {
    return (
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        {children}
      </ReactModal>
    )
  }
)

Modal.displayName = 'Modal'
