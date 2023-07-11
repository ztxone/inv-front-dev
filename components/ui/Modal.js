import {useEffect} from "react";
import ReactModal from "react-modal";
import ButtonClose from '../ui/ButtonClose';

function Modal({isOpen, onClose, children}) {
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);
  const handleClose=() => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="absolute top-1/2 transform -translate-y-1/2 z-50 mx-3.8 bg-white rounded-5xl md:max-w-[550px] md:mx-auto"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40"
    >
      <div className="modal-content">
        {children}
        <ButtonClose onClick={handleClose} />
      </div>
    </ReactModal>
  );
}
export default Modal;
