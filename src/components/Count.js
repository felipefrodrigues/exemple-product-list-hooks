import  React, { useState } from 'react';

const Count = () => {
  const [count, setCount] = useState(0)
  
  return (
    <div className="count">
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>-</button>
      { count }
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Count
