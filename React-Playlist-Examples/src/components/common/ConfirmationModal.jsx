function ConfirmationModal({ show, onConfirm, onCancel }) {

  if (!show) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop fade show"></div>

      {/* Modal Popup */}
      <div
        className="modal fade show d-block"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">

          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                Confirm Delete
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onCancel}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              <p>
                Are you sure you want to delete this task?
              </p>
            </div>

            {/* Footer */}
            <div className="modal-footer">

              <button
                type="button"
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>

              <button
                type="button"
                className="btn btn-danger"
                onClick={onConfirm}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default ConfirmationModal;