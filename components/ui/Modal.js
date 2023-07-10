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
      className=" top-1/2 transform -translate-y-1/2 bg-white rounded-lg p-8 z-50 relative mx-3.8"
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
