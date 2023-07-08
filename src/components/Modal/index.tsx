import Modal from 'react-modal'
import CloseSvg from '../../assets/img/x.svg'
import { ContainerModal } from './styles'
import { ReactNode } from 'react'


interface INewModalProps{
    isOpen: boolean,
    onRequestClose: () => void,
    contentLabelText: string,
    titleModal: string,
    children: ReactNode,
    handleSubmitFormModal: () => void
}


export function NewModal({isOpen, onRequestClose, contentLabelText, titleModal, children, handleSubmitFormModal }: INewModalProps){
 
    return(


      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel={contentLabelText}
      >
        <button type="button" onClick={onRequestClose} className='react-modal-close'>
            <img src ={CloseSvg} />
        </button>

        <ContainerModal onSubmit={handleSubmitFormModal}>
          <h2>{titleModal}</h2>
          {children}
        </ContainerModal>

      </Modal>

 )
}