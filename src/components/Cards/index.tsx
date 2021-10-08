import phoneImg from '../../images/Phone.svg'
import incomeImg from '../../images/Entradas.svg'
import contactImg from '../../images/Contacts.svg'

import { Container } from './style'
import {Header} from "../Header";

export function Cards(){
    return (
        <Container >
            <div>
                <header>
                    <p>Entrar em contato</p>
                    <img src={phoneImg} alt="Phone imagem"/>
                </header>
                <strong>130</strong>
            </div>
            <div>
                <header>
                    <p>Novos interessados</p>
                    <img src={incomeImg} alt="Income imagem"/>
                </header>
                <strong>+ 10</strong>
            </div>
            <div>
                <header>
                    <p>Total usuários interessados</p>
                    <img src={contactImg} alt="Contato imagem"/>
                </header>
                <strong>290</strong>
            </div>
        </Container>
    )
}