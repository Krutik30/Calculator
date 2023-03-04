import { useState } from "react";
import Display from "./Display";
import Evaluator from "./Evalution";
import Keys from "./Keys";

function Calc(){

    const [display, setDisplay] = useState({
        expression: '0',
        answer: '0',
        validExpression: true,
        decimalPossible: true
    })

    function handleKey(event){
        let keyPressed = event.target.name;

        if(keyPressed === 'AC'){
            setDisplay({
                expression: '0',
                answer: '0',
                validExpression: true,
                decimalPossible: true
            })
        }
        else if(keyPressed === '='){
            let finalAnswer = Evaluator(display.expression);
            setDisplay({
                ...display,
                expression: finalAnswer,
                answer: finalAnswer
            })
        }
        else if(keyPressed === '.'){
            if(display.decimalPossible){
                setDisplay({
                    validExpression: false,
                    expression: display.expression + keyPressed,
                    answer: display.expression + keyPressed,
                    decimalPossible: false
                })
            }
        }
        else if(keyPressed === '+' || keyPressed === '-' || keyPressed === '*' || keyPressed === '/'){
            let lastCharacter = display.expression[display.expression.length - 1];
            if(/[+|/|*|-]/.test(lastCharacter)){
                if(keyPressed === '-'){
                    setDisplay({
                        validExpression: false,
                        expression: display.expression + keyPressed,
                        answer: display.expression + keyPressed,
                        decimalPossible: true
                    })
                }
                else {
                    //Checking if it has two expressions 
                    if (/[+|/|*|-]/.test(display.expression[display.expression.length - 2])) {
                        setDisplay({
                            validExpression: false,
                            expression: display.expression.slice(0, display.expression.length - 2) + keyPressed,
                            answer: display.expression.slice(0, display.expression.length - 2) + keyPressed,
                            decimalPossible: true
                        })
                    }
                    else {
                        setDisplay({
                            validExpression: false,
                            expression: display.expression.slice(0, display.expression.length - 1) + keyPressed,
                            answer: display.expression.slice(0, display.expression.length - 1) + keyPressed,
                            decimalPossible: true
                        })
                    }
                }
            }
            else if(display.expression[display.expression.length - 1] === '.'){
                return;
            }else{
                setDisplay({
                    validExpression: false,
                    expression: display.expression + keyPressed,
                    answer: display.expression + keyPressed,
                    decimalPossible: true
                })
            }
        }else{
            if (display.expression === '0') {
                setDisplay({
                    validExpression: true,
                    expression: keyPressed,
                    answer: keyPressed
                })
            }
            else {
                setDisplay({
                    validExpression: true,
                    expression: display.expression + keyPressed,
                    answer: display.expression + keyPressed
                })
            }
        }
    }

    return(
        <div className="Calc">
            <Display props={display} />
            <Keys validExpression={display.validExpression} handleKey={handleKey} />
        </div>
    )
}

export default Calc;