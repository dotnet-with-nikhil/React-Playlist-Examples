import { createPortal } from "react-dom";

export default function Modal({
  isOpen,
  onClose,
  children
}) {
  if (!isOpen) return null;

  return createPortal(
    <div className="portal-modal-overlay">
      <div
        className="portal-modal-dialog"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}