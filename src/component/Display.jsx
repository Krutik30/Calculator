import { useState } from "react";

function Display(){

    
  const [exp , setExp] = useState("");

  function handleChange(event){
    setExp(event.target.value);
  }

    return (
        <div className="display">
            <div>{exp}</div>
            <hr />
            <input autoFocus onChange={handleChange} name="input" type="text" value={exp} />
        </div>
    )
}


export default Display;