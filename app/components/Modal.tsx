

interface ModalProps{
    modalOpen:boolean;
    setModalOpen:(open:boolean)=>boolean | void;
    children:React.ReactNode
}
const Modal:React.FC<ModalProps> = ({modalOpen, setModalOpen, children}) => {
  return (
    <>
        {/* You can open the modal using ID.showModal() method */}
       
        <dialog id="my_modal_3" className={`modal ${modalOpen ? "modal-open":""}`}>
                {children}
        </dialog>
    </>
  )
}

export default Modal