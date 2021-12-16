import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";

interface dataFormTypes {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    endereco: string;
    createdAt: string;
    mensagem: string;

}

interface FormDataProviderProps {
    children: ReactNode
}

interface dataFormTypesData {
    dataForm: dataFormTypes[];
    onRequiredId: (id: number) => void;
    idModal: number
}

const FormDataContext = createContext<dataFormTypesData>({} as dataFormTypesData);

export function FormDataProvider( { children } : FormDataProviderProps ){
    const [dataForm, setDataForm] = useState<dataFormTypes[]>([])
    const [idModal, setIdModal] = useState(0)

    useEffect(() => {
        api.get('/')
            .then(response => {setDataForm(response.data)})
    }, [])
    console.log(dataForm)

    function onRequiredId(id: number){
        setIdModal(id)
    }

    return (
        <FormDataContext.Provider value={{ dataForm, onRequiredId, idModal}}>
            {children}
        </FormDataContext.Provider>
    )
}

export function useFormData(){
    return useContext(FormDataContext);
}