import Modal from "react-modal";

interface FilterModalProps {
    isOpenModal: boolean;
    onRequestCloseModal: () => void;
}

export function FilterModal( { isOpenModal, onRequestCloseModal} : FilterModalProps){
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={onRequestCloseModal}
            overlayClassName="react-modalMessage-overlay"
            className="react-modal-content"

        >
            <strong>Aplicar filtros</strong>


        </Modal>
    )
}