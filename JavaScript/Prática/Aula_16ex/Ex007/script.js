var itens = []
let res_final = document.querySelector('div#res_final')
let tinput = document.getElementById('txtnum')

function adicionar() {
    res_final.innerHTML = ` `
    let input = Number(tinput.value)
    let select_res = document.querySelector('select#selres')
    if (tinput.value.length == 0 || itens.indexOf(input) != -1 || input > 100 || input < 1){
        alert(`Valor inválido ou já encontrado na lista`)
    } else {
        let item = document.createElement('option')
        item.text = `Valor ${input} adicionado.`
        item.value = input
        itens.push(Number(item.value))
        select_res.appendChild(item)
        
    }
    tinput.value = ''
    tinput.focus()
}

function finalizar(){
    if (itens.length == 0){
        alert(`Adicione valores antes de finalizar`)
    } else {
    function somar(a,b){
        return a + b
    }
    let soma = itens.reduce(somar)

    res_final.innerHTML += `<p>Ao todo, temos ${itens.length} números cadastrados.</p>`
    res_final.innerHTML += `<p>O maior valor informado foi ${Math.max(...itens)}.</p>`
    res_final.innerHTML += `<p>O menor valor informado foi ${Math.min(...itens)}.</p>`
    res_final.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res_final.innerHTML += `<p>A média dos valores digitados é ${itens.reduce(function(a){return soma/itens.length})}.</p>`
    }
}