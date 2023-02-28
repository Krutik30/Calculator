import { useState } from "react";

function Calculator(){


    function handleClick(){
        
    }


    return (
            <div className="calculator">
                <button onClick={handleClick} className="key" id="clear" name="AC">AC</button>
                <button onClick={handleClick} className="key" id="mul" name="*">*</button>
                <button onClick={handleClick} className="key" id="divide" name="/">/</button>
                <button onClick={handleClick} className="key" id="seven" name="7">7</button>
                <button onClick={handleClick} className="key" id="eight" name="8">8</button>
                <button onClick={handleClick} className="key" id="nine" name="9">9</button>
                <button onClick={handleClick} className="key" id="minus" name="-">-</button>
                <button onClick={handleClick} className="key" id="four" name="4">4</button>
                <button onClick={handleClick} className="key" id="five" name="5">5</button>
                <button onClick={handleClick} className="key" id="six" name="6">6</button>
                <button onClick={handleClick} className="key" id="plus" name="+">+</button>
                <button onClick={handleClick} className="key" id="one" name="1">1</button>
                <button onClick={handleClick} className="key" id="two" name="2">2</button>
                <button onClick={handleClick} className="key" id="three" name="3">3</button>
                <button onClick={handleClick} className="key" id="equal" name="=">=</button>
                <button onClick={handleClick} className="key" id="zero" name="0">0</button>
                <button onClick={handleClick} className="key" id="dot" name="dot">.</button>
            </div>
    )
}

export default Calculator;  