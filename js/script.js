function soma(){
    let somavr1 = document.getElementById('vrValor1').value;
    let somavr2 = document.getElementById('vrValor2').value;
    let total = parseInt(somavr1) + parseInt(somavr2);
    document.getElementById("vrValor3").value = total; 
}
function subtracao(){
    let sub1 = document.getElementById('sub1').value;
    let sub2 = document.getElementById('sub2').value;
    let total = parseInt(sub1) - parseInt(sub2);
    document.getElementById("sub3").value = total; 
}

function vezes(){
    let mult1 = document.getElementById('mult1').value;
    let mult2 = document.getElementById('mult2').value;
    let total = parseInt(mult1) * parseInt(mult2);
    document.getElementById("mult3").value = total; 
}

function divisao(){
    let div1 = document.getElementById('div1').value;
    let div2 = document.getElementById('div2').value;
    let total = parseInt(div1) / parseInt(div2);
    document.getElementById("div3").value = total; 
}