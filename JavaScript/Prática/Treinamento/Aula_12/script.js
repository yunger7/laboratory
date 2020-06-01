function calcular(){
    var res = document.querySelector('div#res')
    var tnum1 = document.getElementById('txtnum1')
    var tnum2 = document.getElementById('txtnum2')
    var num1 = Number(tnum1.value)
    var num2 = Number(tnum2.value)
    var operacao = document.getElementsByName('operacao')

    if (operacao[0].checked){
        var soma = num1 + num2
        res.innerHTML = `Resultado da soma: <p id="valor"><strong>${soma}</strong></p>`
    } else if (operacao[1].checked){
        var sub = num1 - num2
        res.innerHTML = `Resultado da subtracao: <p id="valor"><strong>${sub}<strong></p>`
    }else if (operacao[2].checked){
        var mult = num1 * num2
        res.innerHTML = `Resultado da multiplicacao: <p id="valor"><strong>${mult}</strong></p>`
    } else if (operacao[3].checked){
        var div = num1 / num2
        res.innerHTML = `Resultado da divisao: <p id="valor"><strong>${div}</strong></p>`
    } 

}