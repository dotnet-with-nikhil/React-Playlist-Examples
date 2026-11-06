import React, { useState, useCallback } from 'react';

// ============================================
// MAIN APP & DATA
// ============================================

const mockUsers = [
  { id: 1, name: 'Alice Johnson' },
  { id: 2, name: 'Bob Smith' },
  { id: 3, name: 'Charlie Brown' },
  { id: 4, name: 'Diana Prince' },
  { id: 5, name: 'Eve Wilson' }
];

// ============================================
// SCENARIO 1: WITHOUT useCallback (PROBLEM)
// ============================================

// This component will re-render on every parent render
// because onSelect is recreated each time
const UserRowWithoutMemo = ({ user, onSelect }) => {
  console.log("UserRow rendered without memo:", user.name);

  return (
    <button onClick={() => onSelect(user.id)}>
      {user.name}
    </button>
  );
};

function UsersWithoutOptimization({ users }) {
  const [selectedId, setSelectedId] = useState(null);

  // This function is recreated on EVERY render
  const handleSelect = (id) => {
    console.log("Selected user:", id);
    setSelectedId(id);
  };

  return (
    <div>
      <h2>Without useCallback (ALL rows re-render)</h2>
      {users.map(user => (
        <UserRowWithoutMemo
          key={user.id}
          user={user}
          onSelect={handleSelect}
        />
      ))}
      <p>Selected ID: {selectedId}</p>
    </div>
  );
}

// ============================================
// SCENARIO 2: WITH useCallback (OPTIMIZED)
// ============================================

// Memoized component - won't re-render unless props change
const UserRowWithMemo = React.memo(({ user, onSelect }) => {
  console.log("UserRowWithMemo rendered:", user.name);

  return (
    <button 
      onClick={() => onSelect(user.id)}
      style={{
        padding: '10px',
        margin: '5px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px'
      }}
    >
      {user.name}
    </button>
  );
});

function UsersWithCallback({ users }) {
  const [selectedId, setSelectedId] = useState(null);

  // useCallback keeps the SAME function reference
  // Function only recreates if dependencies change
  const handleSelect = useCallback((id) => {
    console.log("Selected user:", id);
    setSelectedId(id);
  }, []); // Empty dependency array = function never changes

  return (
    <div>
      <h2>With useCallback (Only clicked row re-renders)</h2>
      {users.map(user => (
        <UserRowWithMemo
          key={user.id}
          user={user}
          onSelect={handleSelect}
        />
      ))}
      <p>Selected ID: {selectedId}</p>
    </div>
  );
}

// ============================================
// SCENARIO 3: useCallback WITH DEPENDENCIES
// ============================================

function UsersWithCallbackDependencies({ users }) {
  const [selectedId, setSelectedId] = useState(null);
  const [theme, setTheme] = useState('light');

  // Function depends on theme
  // If theme changes, function recreates
  const handleSelect = useCallback((id) => {
    console.log(`Selected user: ${id} (Theme: ${theme})`);
    setSelectedId(id);
  }, [theme]); // theme is a dependency

  return (
    <div style={{
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px'
    }}>
      <h2>useCallback with Dependencies</h2>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
      {users.map(user => (
        <UserRowWithMemo
          key={user.id}
          user={user}
          onSelect={handleSelect}
        />
      ))}
      <p>Selected ID: {selectedId}</p>
      <p>Current Theme: {theme}</p>
    </div>
  );
}


function UseCallbackUseMemoExamples() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>useCallback Performance Demonstration</h1>
      
      {/* Check console to see render logs */}
      <p style={{ color: 'red', fontWeight: 'bold' }}>
        ⚠️ Open Browser Console (F12) to see render logs!
      </p>

      <hr />

      {/* Comparison 1: Without vs With useCallback */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        marginBottom: '30px',
        flexWrap: 'wrap'
      }}>
        <div style={{ 
          flex: 1, 
          minWidth: '300px',
          border: '2px solid red',
          padding: '10px'
        }}>
          <UsersWithoutOptimization users={mockUsers} />
        </div>
        
        <div style={{ 
          flex: 1, 
          minWidth: '300px',
          border: '2px solid green',
          padding: '10px'
        }}>
          <UsersWithCallback users={mockUsers} />
        </div>
      </div>

      <hr />

      {/* Comparison 2: useCallback with Dependencies */}
      <div style={{ 
        border: '2px solid blue',
        padding: '10px'
      }}>
        <UsersWithCallbackDependencies users={mockUsers} />
      </div>

      {/* Explanation */}
      <div style={{ 
        marginTop: '30px', 
        backgroundColor: '#f0f0f0',
        padding: '15px',
        borderRadius: '5px'
      }}>
        <h3>Console Log Explanation:</h3>
        <ul>
          <li><strong>LEFT (Red Box):</strong> Without useCallback - 
            clicking ANY button re-renders ALL rows (inefficient)</li>
          <li><strong>RIGHT (Green Box):</strong> With useCallback - 
            clicking a button only re-renders that specific row (optimized)</li>
          <li><strong>BLUE Box:</strong> When theme changes, handleSelect 
            recreates because theme is a dependency</li>
        </ul>
      </div>
    </div>
  );
}

export default UseCallbackUseMemoExamples;