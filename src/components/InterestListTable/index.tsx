import {Container} from "./style";
import {useFormData} from "../../Hooks/useFormData";


interface TableProps {
    onOpenMessageModal: (id: number) => void;
}


export function InterestListTable({ onOpenMessageModal }: TableProps){
    const { dataForm } = useFormData()

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
                {dataForm.map((data) => {
                    return (
                        <tr>
                            <td>{data.email}</td>
                            <td>{data.nome}</td>
                            <td>{data.endereco}</td>
                            <td className="number"><a href={"https://wa.me/" + data.telefone} target="_blank">{`(${data.telefone.slice(0, 2)}) ${data.telefone.slice(2)}`}</a></td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(data.createdAt))}</td>
                            <td className="verMessage"><button onClick={() => { onOpenMessageModal(data.id) }}>Ver mensagem</button></td>
                            <td>
                                <input
                                    type="checkbox"

                                />
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </Container>

    )
}