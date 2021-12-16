import Modal from 'react-modal';
import {useFormData} from "../../Hooks/useFormData";

import { Container } from './style'

interface MessageModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function MessageModal({ isOpen, onRequestClose} : MessageModalProps){
    const { dataForm, idModal } = useFormData()
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modalMessage-overlay"
            className="react-modal-content"
        >
            <Container >
                {dataForm.filter((value) => value.id ===  idModal).map(value => {
                    return (
                        <strong>{value.mensagem}</strong>
                    )
                })}

            </Container>
        </Modal>
    )
}