import Modal from 'react-modal';

interface DialogProps {
  isOpen: boolean
  children: React.ReactNode | React.ReactNode[]
}

Modal.setAppElement('#__next');

const Dialog = ({ isOpen, children }: DialogProps) => {
  return (
    <Modal
      isOpen={isOpen}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '60%',
          minWidth: 320,
          background: 'none',
          border: 'none',
        },
        overlay: {
          zIndex: 1000,
          background: 'rgba(0, 0, 0, 0.5)',
        }
      }}
    >
      {children}
    </Modal>
  )
}

export default Dialog;
