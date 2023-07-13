/* import Modal from 'react-modal';
import {ContainerInputs} from './style';
import { ReactNode } from 'react';

interface INewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabelText: string;
    titleModal: string;
    children: ReactNode;
    handleSubmitFormModal: () => void;
  }

export function NewModal({ isOpen,onRequestClose,contentLabelText,titleModal,children }:INewModalProps){

    function handleSubmitFormModal(event: FormEvent<HTMLDivElement>): void {
        throw new Error('Function not implemented.');
    }

    return (
        <Modal
        isOpen={isOpen}
        
        onRequestClose={onRequestClose}
        contentLabel={contentLabelText}
      >
        <button type="button" onClick={onRequestClose}className="react-modal-close"> 
        </button>

        <ContainerInputs onSubmit={handleSubmitFormModal}>
            <h2>{titleModal}</h2>
                  {children}
                  
        </ContainerInputs>
        
      </Modal>

    )
} */