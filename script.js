let num = '';
let answer = '';
let signs = ['+', '-', '*', '/']

function print(id) {
    let value = document.getElementById(id).innerHTML;
    if ((!(num.length == 0 & signs.includes(value))) & (!(signs.includes(value) & signs.includes(num[num.length-1])))) {
        num += value;
    }
    document.getElementById("display").innerHTML=`<input class="answer" type="text" value="${num}" disabled>`;
}

function clean() {
    num = '';
    document.getElementById("display").innerHTML=`<input class="answer" type="text" disabled>`;
}

function expression() {
    answer = String(eval(num));
    if (answer == 'Infinity') {
        document.getElementById("display").innerHTML=`<input class="answer" type="text" value="не надо" disabled>`;
    }else if(answer == 'undefined'){
        document.getElementById("display").innerHTML=`<input class="answer" type="text" disabled>`;
    }else{
        document.getElementById("display").innerHTML=`<input class="expression" type="text" value="${num}" disabled>
        <input class="answer" type="text" value="= ${answer}" disabled>`;
    }
    num = '';
}