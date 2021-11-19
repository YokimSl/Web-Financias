import { useState } from 'react';
import { TransactionsProvider } from './hooks/useTransactions';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');


export function App() {
  const [isNewTransacitonModalOpen, setIsNewTransacitonModalOpen] = useState(false);

  function handleOpenNewTrasactionModal(){
      setIsNewTransacitonModalOpen(true);
  }
 
  function handleCloseNewTransactionModal(){
      setIsNewTransacitonModalOpen(false);
  }


  return (
    <TransactionsProvider> 
      <Header onOpenNewTrasactioModal={handleOpenNewTrasactionModal} />

      <Dashboard />
     
      <NewTransactionModal
      isOpen={isNewTransacitonModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />

     

     <GlobalStyle />
    </TransactionsProvider>
  );
}


