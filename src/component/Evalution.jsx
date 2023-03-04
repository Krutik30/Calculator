let infixToPostFix = (infix) => {
    let priority = {
        '/': 3,
        '*': 2,
        '+': 0,
        '-': 1
    }

    let postFix = [] , operators = [];
    for(let i=0;i<infix.length;i++){
        switch(infix[i]){
            case '-':
                while (priority[operators[operators.length - 1]] >= priority['-'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('-');
                break;
            case '+':
                while (priority[operators[operators.length - 1]] >= priority['+'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('+');
                break;
            case '*':
                while (priority[operators[operators.length - 1]] >= priority['*'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('*');

                break;
            case '/':
                while (priority[operators[operators.length - 1]] >= priority['/'] && operators.length != 0) {
                    postFix.push(operators.pop());
                }
                operators.push('/');

                break;

            default:
                postFix.push(infix[i]);
                break;
        }
    }
    while (operators.length) {
        postFix.push(operators.pop())
    }
    return postFix;
}

function postFixEvaluator(postFix) {
    let answer = [];
    for (let i of postFix){
        if(/[+|-|*|/]/.test(i) && i.length === 1){
            let b = Number(answer.pop());
            let a = Number(answer.pop());

            switch(i){
                case '+':
                    answer.push(a+b);
                    break;
                case '-':
                    answer.push(a-b);
                    break;
                case '*':
                    answer.push(a*b);
                    break;
                case '/':
                    answer.push(a/b);
                    break;
            }
        }
        else{
            answer.push(i);
        }
    }
    return answer[0];
}

function Evaluator(exp){
    let arr = exp.split(/[+|-|*|/]/);
    // for(let i in arr){
    //     if(!arr[i]){
    //         arr.splice(i,2);
    //         arr[i] = '-' + arr[i];
    //     }
    // }
    return postFixEvaluator(infixToPostFix(arr));
}



export default Evaluator;