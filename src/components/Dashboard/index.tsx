import { Container } from './style'
import { Cards } from "../Cards";
import { InterestListTable } from "../InterestListTable";
import { MessageModal } from "../MessageModal";
import {useContext, useState} from "react";
import {useFormData} from "../../Hooks/useFormData";

export function Dashboard(){
    const { onRequiredId } = useFormData()
    const [isOpenMessageModal, setIsOpenMessageModal] = useState(false)

    function handleOpenMessageModal(id: number){
        onRequiredId(id)
        setIsOpenMessageModal(true)
    }

    function handleCloseMessageModal(){
        setIsOpenMessageModal(false)
    }

    return (
        <Container >
            <Cards />
            <InterestListTable onOpenMessageModal={handleOpenMessageModal}  />
            <MessageModal isOpen={isOpenMessageModal} onRequestClose={handleCloseMessageModal}/>
        </Container>

    )
}