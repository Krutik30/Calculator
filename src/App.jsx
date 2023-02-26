import { useState } from 'react'
import './App.css'
import Bcomponent from './component/buttons';
import Keys from './component/keys';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Keys />
      </div>
    );
}

export default App
