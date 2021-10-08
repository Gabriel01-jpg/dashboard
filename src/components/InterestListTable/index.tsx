import {Container} from "./style";


interface TableProps {
    onOpenMessageModal: () => void;
}

export function InterestListTable({ onOpenMessageModal }: TableProps){
    return (
        <Container >
            <table>
                <thead>
                <tr>
                    <th>Email</th>
                    <th>Nome</th>
                    <th>Cidade/Estado</th>
                    <th>Telefone</th>
                    <th>Data</th>
                    <th>Mensagem</th>
                    <th>Concluído</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>gabriellima170801@gmail.com</td>
                    <td>Gabriel</td>
                    <td>Goiânia - Goiás</td>
                    <td className="number"><a href="https://wa.me/62981204631" target="_blank">(62) 98120-4631</a></td>
                    <td>08/10/2021</td>
                    <td className="verMessage"><button onClick={onOpenMessageModal}>Ver mensagem</button></td>
                    <td>
                        <input
                        type="checkbox"

                        />
                    </td>
                </tr>
                <tr>
                    <td>teste@gmail.com</td>
                    <td>Testando</td>
                    <td>Goiânia - Goiás</td>
                    <td className="number"><a href="https://wa.me/62981204631" target="_blank">(62) 98120-4631</a></td>
                    <td>08/10/2021</td>
                    <td className="verMessage"><button onClick={onOpenMessageModal}>Ver mensagem</button></td>
                    <td>
                        <input
                            type="checkbox"

                        />
                    </td>
                </tr>
                </tbody>
            </table>
        </Container>

    )
}