import { Container } from './style'
import {Cards} from "../Cards";
import {InterestListTable} from "../InterestListTable";
import {MessageModal} from "../MessageModal";
import {useState} from "react";

export function Dashboard(){
    const [isOpenMessageModal, setIsOpenMessageModal] = useState(false)

    function handleOpenMessageModal(){
        setIsOpenMessageModal(true)
    }

    function handleCloseMessageModal(){
        setIsOpenMessageModal(false)
    }
    return (
        <Container >
            <Cards />
            <InterestListTable onOpenMessageModal={handleOpenMessageModal} />
            <MessageModal isOpen={isOpenMessageModal} onRequestClose={handleCloseMessageModal} />
        </Container>

    )
}