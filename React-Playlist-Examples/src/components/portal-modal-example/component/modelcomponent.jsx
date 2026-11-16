import { useState } from "react";
import Modal from "./Modal";
export default function ModelComponent() {
    
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: 30 }}>
      <h1>Employee Dashboard</h1>

      <button
        onClick={() => setShowModal(true)}
      >
        Delete Employee
      </button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <h2>Delete Employee</h2>

        <p>
          Are you sure you want to delete this employee?
        </p>

        <button>Delete</button>
      </Modal>
    </div>
  );
}