import { useState } from "react";

function Calc(){

    const [display , setDisplay] = useState({
        express: "0",
        valid: true,
    });

    function barabar(){


        setDisplay({
            ...display,
            express: eval(display.express)
        })
    }

    function handleClick(event){
        if(display.express === '0'){
            setDisplay({
                ...display,
                express: event.target.textContent
            })
        }else{
            setDisplay({
                ...display,
                express: display.express + event.target.textContent
            })
        }
    }

    function handleOperator(event){
        setDisplay({
            ...display,
            express: display.express + ' ' + event.target.textContent + ' '
        })
    }

    function handleChange(){

    }

    function handleDecimal(){
        
        const array = display.split(' ');
        const lastElement = array[array.length - 1];

        if(!lastElement.includes('.')){
            setDisplay({
                ...display,
                express: display.express + '.'
            })
        }
    }

    function handleClear(){
        setDisplay({
            ...display,
            express : "0"
        });
    }


    return (
        <div className="calculator-wrapper">
            <div className="display-box">
                <div className="display" >{display.express}</div>
                <hr />
                <input className="exp-in" autoFocus onChange={handleChange} name="input" type="text" />
            </div>
            <div className="keys">
                <button onClick={handleClear} className="key" id="clear" name="AC">AC</button>
                <button onClick={handleOperator} className="key" id="mul" name="*">*</button>
                <button onClick={handleOperator} className="key" id="divide" name="/">/</button>
                <button onClick={handleClick} className="key" id="seven" name="7">7</button>
                <button onClick={handleClick} className="key" id="eight" name="8">8</button>
                <button onClick={handleClick} className="key" id="nine" name="9">9</button>
                <button onClick={handleOperator} className="key" id="minus" name="-">-</button>
                <button onClick={handleClick} className="key" id="four" name="4">4</button>
                <button onClick={handleClick} className="key" id="five" name="5">5</button>
                <button onClick={handleClick} className="key" id="six" name="6">6</button>
                <button onClick={handleOperator} className="key" id="plus" name="+">+</button>
                <button onClick={handleClick} className="key" id="one" name="1">1</button>
                <button onClick={handleClick} className="key" id="two" name="2">2</button>
                <button onClick={handleClick} className="key" id="three" name="3">3</button>
                <button onClick={barabar} className="key" id="equal" name="=">=</button>
                <button onClick={handleClick} className="key" id="zero" name="0">0</button>
                <button onClick={handleDecimal} className="key" id="dot" name="dot">.</button>
            </div>
        </div>
    )
}

export default Calc;