var n1 = 0
var n2 = 0
function somar(){
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    document.getElementById('valorDigitado').innerHTML = parseInt(n1)+parseInt(n2);
}

function subtrair(){
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    document.getElementById('valorDigitado').innerHTML = parseInt(n1)-parseInt(n2);
}
function multiplicar(){
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    document.getElementById('valorDigitado').innerHTML = parseInt(n1)*parseInt(n2);
}
function dividir() {
    n1=document.getElementById("n1").value
    n2=document.getElementById("n2").value
    document.getElementById('valorDigitado').innerHTML = parseInt(n1)/parseInt(n2);
}

