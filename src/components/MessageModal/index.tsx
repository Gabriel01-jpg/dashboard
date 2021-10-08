import { Container } from './style'

import Modal from 'react-modal';

interface MessageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function MessageModal({ isOpen, onRequestClose } : MessageModalProps){
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modalMessage-overlay"
            className="react-modal-content"
        >
            <Container >


            </Container>
        </Modal>
    )
}