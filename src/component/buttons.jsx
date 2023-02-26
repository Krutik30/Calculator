import React, {useState} from "react";

function Bcomponent(){

    const [exp, setExp] = useState("");


    function handleChange(event){
        setExp(event.target.value);
    }


    return (
        <div className='container k mx-auto my-5 px-auto'>
            <div className='row'>
                <input type="text" autoFocus onChange={handleChange} />
                <div className='display'>

                </div>
            </div>
            <div className='row'>
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
            <div className='row'>
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
            <div className='row'>
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
            <div className='row'>
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
            
            <div className='row'>
                <button
                className=''
                id="equals"
                value="="
                >
                =
                </button>
            </div>
        </div>
    )
}

export default Bcomponent;