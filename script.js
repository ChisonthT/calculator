function add(firstNum, secNum){
    return(firstNum+secNum);
}

function sub(firstNum, secNum){
    return(firstNum-secNum);
}

function mul(firstNum, secNum){
    return(firstNum*secNum);
}

function div(firstNum, secNum){
    return(firstNum/secNum);
}

function operation(operator, firstNum, secNum){
    let result = '';

    switch(operator){
        case 'add':
            result = add(firstNum, secNum);
            break;
        case 'subtract':
            result = sub(firstNum, secNum);
            break;
        case 'multiply':
            result = mul(firstNum, secNum);
            break;
        case 'divide':
            if (secNum == 0){
                result = "Error Can't Divide by 0!!";
            }else{
                result = div(firstNum, secNum);
            }
            break;
    }

    display.textContent = result;
}


let tempNum = '';
let nums = [];
let operations = [];
let display = document.querySelector('p');


let btns = document.querySelector('#btns');


btns.addEventListener("click",(e)=> {

    if (e.target.classList.contains('clear')){
        display.textContent = '0';
        firstNum = '';
        secNum = '';
        tempNum = '';
        operator = '';
        nums = [];
        operations = [];
    }
    
    
    if (e.target.classList.contains('equal')){
        nums.push(Number(tempNum));

        operation(operations[0], nums[0],nums[1]);
    }

    if (e.target.classList.contains('number')) {
        display.textContent += e.target.textContent;
        
        tempNum = tempNum + e.target.textContent;
    }

    if ((e.target.classList[1] == 'add') ||
        (e.target.classList[1] == 'subtract') ||
        (e.target.classList[1] == 'multiply') ||
        (e.target.classList[1] == 'divide')){
            display.textContent += e.target.textContent;
            operations.push(e.target.classList[1]);
            nums.push(Number(tempNum));
            tempNum = '';
        }
})
