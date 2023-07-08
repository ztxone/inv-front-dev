import { useEffect } from "react";
import ReactModal from "react-modal";

function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    ReactModal.setAppElement("#__next");
  }, []);
  const handleClose = () => {
    onClose();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 z-50"
      overlayClassName="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-40"
    >
      <div className="modal-content">
        {children}
        <button className="modal-close" onClick={handleClose}>
          Close
        </button>
      </div>
    </ReactModal>
  );
}
export default Modal;
