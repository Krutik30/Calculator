import Calculator from "./component/Calculator";
import Display from "./component/display";

function App() {

  return (
    <div className="App">
        <div className="calculator-wrapper">
            <Display />
            <Calculator />
        </div>
    </div>
  )
}

export default App;
