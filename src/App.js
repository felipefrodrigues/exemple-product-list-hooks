import  React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = `Você clicou ${count} vezes.`
  }, [count])

  return (
    <div className="App">
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      { count }
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default App
