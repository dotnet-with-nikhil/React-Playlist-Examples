import { useState } from "react";
import ConfirmationModal from "../common/ConfirmationModal";

function TaskList() {

  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    console.log("Task Deleted");

    setShowModal(false);
  };

  return (
    <div className="container mt-5">

      <h2>Task Management</h2>

      <button
        className="btn btn-danger"
        onClick={() => setShowModal(true)}
      >
        Delete Task
      </button>

      <ConfirmationModal
        show={showModal}
        onConfirm={handleDelete}
        onCancel={() => setShowModal(false)}
      />

    </div>
  );
}

export default TaskList;