import { useState, useRef } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Practice useState" },
    { id: 3, title: "Learn Props" }
  ]);

  const [newTitle, setNewTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");
  const inputRef = useRef(null);
  const editInputRef = useRef(null);

  // Add Todo
  const addTodo = () => {
    const title = newTitle.trim();
    if (!title) return;
    const newTodo = {
      id: Date.now(),
      title
    };

    setTodos(previousTodos => [...previousTodos, newTodo]);
    setNewTitle("");
    inputRef.current?.focus();
  };

  // Delete Todo
  const deleteTodo = (id) => {
    setTodos(previousTodos =>
      previousTodos.filter(todo => todo.id !== id)
    );
    if (editingId === id) {
      setEditingId(null);
      setEditingTitle("");
    }
  };

  // Start editing
  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditingTitle(todo.title);
    // wait for DOM update then focus
    setTimeout(() => editInputRef.current?.focus(), 0);
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  // Save update
  const saveEdit = (id) => {
    const title = editingTitle.trim();
    if (!title) return;
    setTodos(previousTodos =>
      previousTodos.map(todo =>
        todo.id === id ? { ...todo, title } : todo
      )
    );
    setEditingId(null);
    setEditingTitle("");
  };

  // Add on Enter in add input
  const handleAddKey = (e) => {
    if (e.key === "Enter") addTodo();
  };

  // Save on Enter in edit input
  const handleEditKey = (e, id) => {
    if (e.key === "Enter") saveEdit(id);
    if (e.key === "Escape") cancelEdit();
  };

  return (
    <div className="todo-wrap">
      <header className="todo-header">
        <h2>Todo List</h2>
        <p className="subtitle">Functional updates with useState — add, edit and delete todos</p>
      </header>

      <div className="add-row">
        <input
          ref={inputRef}
          className="add-input"
          type="text"
          placeholder="Add a new todo..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          onKeyDown={handleAddKey}
          aria-label="New todo title"
        />
        <button
          className="btn primary"
          onClick={addTodo}
          aria-label="Add todo"
        >
          Add
        </button>
      </div>

      <ul className="todo-list">
        {todos.length === 0 && <li className="empty">No todos yet — add one above.</li>}

        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <div className="todo-main">
              {editingId === todo.id ? (
                <input
                  ref={editInputRef}
                  className="edit-input"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                  onKeyDown={(e) => handleEditKey(e, todo.id)}
                  aria-label={`Edit todo ${todo.title}`}
                />
              ) : (
                <span className="todo-title">{todo.title}</span>
              )}
            </div>

            <div className="todo-actions">
              {editingId === todo.id ? (
                <>
                  <button
                    className="btn save"
                    onClick={() => saveEdit(todo.id)}
                    aria-label="Save"
                  >
                    Save
                  </button>
                  <button
                    className="btn cancel"
                    onClick={cancelEdit}
                    aria-label="Cancel"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn edit"
                    onClick={() => startEdit(todo)}
                    aria-label={`Edit ${todo.title}`}
                  >
                    Edit
                  </button>
                  <button
                    className="btn danger"
                    onClick={() => deleteTodo(todo.id)}
                    aria-label={`Delete ${todo.title}`}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;