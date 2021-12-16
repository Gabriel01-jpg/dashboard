import { Container, Content } from "./style";

interface HeaderProps {
    openModal: () => void;
}

export function Header( { openModal } : HeaderProps){
    return (
        <Container >
            <Content>
                <h1>Dashboard</h1>
                <button type="submit" onClick={openModal}>Filtrar</button>
            </Content>
        </Container>
        )

}