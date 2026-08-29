import { useState } from 'react';

function EventBubblingExample() {
  const [log, setLog] = useState([]);

  const handleParent = () => setLog(prev => [...prev, "Parent Clicked"]);
  const handleChild = () => setLog(prev => [...prev, "Child Clicked"]);
  const handleStop = (e) => {
    e.stopPropagation();
    setLog(prev => [...prev, "Child Clicked (Stopped)"]);
  };

  return (
    <div>
      <div 
        onClick={handleParent}
        style={{ border: "2px solid blue", padding: "20px" }}
      >
        <h3>Parent Div</h3>

        <button onClick={handleChild} style={{ marginRight: "10px" }}>
          Normal Button (Bubbles)
        </button>

        <button onClick={handleStop}>
          Stop Button (No Bubble)
        </button>
      </div>

      <h4>Output:</h4>
      <ul>
        {log.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <button onClick={() => setLog([])}>Clear</button>
    </div>
  );
}

export default EventBubblingExample;