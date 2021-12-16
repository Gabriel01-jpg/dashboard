import React, {useState} from 'react';
import { GlobalStyle } from "./styles/global";
import {Header} from "./components/Header";
import {Dashboard} from "./components/Dashboard";
import { FormDataProvider } from "./Hooks/useFormData";
import {FilterModal} from "./components/FilterModal/FilterModal";

function App() {

    const [isOpenMessageModal, setIsOpenMessageModal] = useState(false)

    function handleOpenMessageModal(){
        setIsOpenMessageModal(true)
    }
    function handleCloseMessageModal(){
        setIsOpenMessageModal(false)
    }



  return (
   <FormDataProvider>
      <FilterModal isOpenModal={isOpenMessageModal} onRequestCloseModal={handleCloseMessageModal} />
      <GlobalStyle />
      <Header openModal={handleOpenMessageModal}/>
      <Dashboard />
   </FormDataProvider>
  );
}

export default App;
