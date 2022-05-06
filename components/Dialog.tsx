import Modal from 'react-modal';
import styles from '../styles/Dialog.module.css';

interface DialogProps {
  isOpen: boolean
  children: React.ReactNode | React.ReactNode[]
}

const Dialog = ({ isOpen, children }: DialogProps) => {
  return (
    <Modal
      isOpen={isOpen}
      className={styles.modal}
    >
      {children}
    </Modal>
  )
}

export default Dialog;
