var firstOp = 0;
var secondOp = 0;
var checkcondition = 0;

function btn_click(digit){
    var elem = document.getElementById('digits');
    elem.value += digit;
    console.debug("Digit is " + elem.value);
}

function btn_clear(){
    var elem = document.getElementById('digits');
    elem.value='';
    console.debug("Clear!");
}


function btn_add(){
    var elem = document.getElementById('digits');
    firstOp = parseInt(elem.value);
    elem.value = '';
    checkcondition = 1;
    console.debug("first OP is " + firstOp);
    console.debug(typeof firstOp);
}

function btn_sub(){
    var elem = document.getElementById('digits');
    firstOp = parseInt(elem.value);
    elem.value = '';
    checkcondition = 2;
    console.debug("Subtraction");
}

function btn_mul(){
    var elem = document.getElementById('digits');
    firstOp = parseInt(elem.value);
    elem.value = '';
    checkcondition = 3;
}

function btn_div(){
    var elem = document.getElementById('digits');
    firstOp = parseInt(elem.value);
    elem.value = '';
    checkcondition = 4;
}

function btn_dot(){
    var elem = document.getElementById('digits');
    elem.value += '.' ;
    console.debug(typeof elem)
}

function btn_equal(){
    var elem = document.getElementById('digits');
    secondOp = parseInt(elem.value);

    if (checkcondition == 1){ // Add
        elem.value = firstOp + secondOp;
    }else if (checkcondition == 2){ // Minus
        elem.value = firstOp - secondOp;
    }else if (checkcondition == 3){ // Multiple
        elem.value = firstOp * secondOp;
    }else if (checkcondition == 4){ // Division
        elem.value = firstOp / secondOp;
    }

    firstOp = 0;
    secondOp = 0;
    checkcondition = 0;
   
    console.debug("second OP is " + secondOp);
    console.debug(typeof secondOp);
}