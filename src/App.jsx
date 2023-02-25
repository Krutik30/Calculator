import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container w-50 mx-auto my-5'>
      <div className='row w-100 h-200'>
        <button
          className="w-25 jumbo"
          id="clear"
          value="AC"
        >
          AC
        </button>
        <button
          className='w-25'
          id="divide"
          value="/"
        >
          /
        </button>
        <button
          className='w-25'
          id="multiply"
          value="x"
        >
          x
        </button>
        <button
          className='w-25'
          id="subtract"
          value="‑"
        >
          ‑
        </button>
      </div>
      <div className='row w-100 h-200'>
        <button className='w-25' id="seven"  value="7">
          7
        </button>
        <button className='w-25' id="eight"  value="8">
          8
        </button>
        <button className='w-25' id="nine"  value="9">
          9
        </button>
        <button
          className='w-25'
          id="add"
          value="+"
        >
          +
        </button>
      </div>
      <div className='row w-100 h-200'>
        <button className='w-25' id="four"  value="4">
          4
        </button>
        <button className='w-25' id="five"  value="5">
          5
        </button>
        <button className='w-25' id="six" value="6">
          6
        </button>
        <button className='w-25' id="decimal" value=".">
          .
        </button>
      </div>
      <div className='row w-100 h-200'>
        <button className='w-25' id="one"  value="1">
          1
        </button>
        <button className='w-25' id="two"  value="2">
          2
        </button>
        <button className='w-25' id="three" value="3">
          3
        </button>
        <button
          className="w-25 jumbo"
          id="zero"
          value="0"
        >
          0
        </button>
      </div>
      
      <div className='row w-100'>
        <button
          className='h-200'
          id="equals"
          value="="
        >
          =
        </button>
      </div>
    </div>)
}

export default App
