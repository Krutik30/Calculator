import { useState } from "react";
import Display from "./Display";
import Keys from "./Keys";

function Calc(){

    const [longS , setLongS] = useState("0");
    const [shortS , setShortS] = useState("");
    const [lastChar , setLastChar] = useState("");
    const [answer , setAnswer] = useState("0");
    const [hasDot , setHasDot] = useState(false);
    const [hasMinus , setHasMinus] = useState(false);

    function handleKey(event){

        const k = event.target.name;
        const codeNumber = ['0','1','2','3','4','5','6','7','8','9'];
        const codeOperator = ['+','*','/','-'];

            function setting(k){
                setLongS(longS+k);
                setShortS(shortS + k);
                setAnswer(answer+k);
            }

            const l = answer.length;

            if(lastChar === '=' ){
                setLongS("0");
                setShortS("");
                setLastChar("");
                setAnswer("0");
                setHasDot(false);
                setHasMinus(false);
            }
            else if(k === 'AC'){
                setLongS("0");
                setShortS("");
                setLastChar("");
                setAnswer("0");
                setHasDot(false);
                setHasMinus(false);
            }
            else if(longS === '0'){
                setLongS(k);
                setShortS(k);
                setAnswer(k);
            }
            else if(codeNumber.includes(k)){
                setting(k);
            }
            else if(k === '.'){
                // console.log(hasDot);
                if(!hasDot){
                    setting(k);
                    setHasDot(!hasDot);
                }
            }
            else if(k === '-'){
                if(codeNumber.includes(lastChar)){
                    setting(k);
                }
                else if(codeOperator.includes(lastChar)){
                    if(!hasMinus){
                        setting(k);
                    }
                    else{
                        setLongS(longS+k);
                        setShortS(shortS+k);
                    }
                }
                setHasDot(false);
            }
            else if(codeOperator.includes(k)){
                // console.log(k);
                if(codeNumber.includes(lastChar)){
                    setting(k);
                }
                else if(codeOperator.includes(lastChar)){
                    setLongS(longS+k);
                    setShortS(shortS+k);
                    setAnswer(answer.slice(0,l-2)+k);
                }
                setShortS("");
                setHasDot(false);
                console.log(answer);
            }
            else if(k === '='){
                // console.log(k);
                const finalAnswer = eval(answer);
                console.log(answer + "=")
                console.log(finalAnswer);
                setLongS(finalAnswer);
                setAnswer(answer + '=' + finalAnswer);
            }


            setLastChar(k);
    }

    return(
        <div className="Calc">
            <Display answer={answer} longS={longS}/>
            <Keys handleKey={handleKey} />
        </div>
    )
}

export default Calc;