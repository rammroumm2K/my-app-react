import './App.css';
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Vous avez cliqué {count} fois
      </button>
    );
  }

export default Counter;
