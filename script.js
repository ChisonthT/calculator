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

    return result;
}


let tempNum = '';
let firstNum = '';
let secNum = '';
let operator = ''; 
let display = document.querySelector('p');


let btns = document.querySelector('#btns');


btns.addEventListener("click",(e)=> {
    
    if (e.target.classList.contains('clear')){
        display.textContent = '0';
        firstNum = '';
        secNum = '';
        tempNum = '';
        operator = '';
    }
    
    
    if (e.target.classList.contains('equal')){
        if ((firstNum != '') &&
            (tempNum != '') &&
            (operator != '')){
                firstNum = operation(operator,firstNum,Number(tempNum));
                operator = '';
                tempNum = '';
                display.textContent = firstNum;
            }
    }

    if (e.target.classList.contains("point")){
        if ((!(tempNum.includes('.'))) && (tempNum != "")){
            display.textContent += e.target.textContent;
            tempNum = tempNum + e.target.textContent;
        }
    }

    if ((e.target.classList.contains('number')) && (tempNum.length <= 8)) {
        display.textContent += e.target.textContent;
        
        tempNum = tempNum + e.target.textContent;
    }

    if ((e.target.classList[1] == 'add') ||
        (e.target.classList[1] == 'subtract') ||
        (e.target.classList[1] == 'multiply') ||
        (e.target.classList[1] == 'divide')){

            if ((firstNum !='') && 
                (operator != '') && 
                (secNum == '') && 
                (tempNum =='')&&
                (operator == e.target.classList[1])){

                firstNum = operation(operator, firstNum, firstNum);
                operator = e.target.classList[1];
                display.textContent = firstNum;
            }

            if ((firstNum == '') && 
                (secNum =='') && 
                (operator =='') &&
                (tempNum != '')){
                firstNum = Number(tempNum);
                operator = e.target.classList[1];
                tempNum ='';
            }
            
            if ((firstNum !='') && 
                (operator != '') && 
                (secNum == '') && 
                (tempNum !='')){
                firstNum = operation(operator, firstNum, Number(tempNum));
                operator = e.target.classList[1];
                tempNum ='';
                display.textContent = firstNum;
            }

            if ((firstNum != '') &&
                (operator == '') &&
                (tempNum == '')){
                    operator = e.target.classList[1];
                }
        }
})
