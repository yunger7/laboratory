function calcular() {
    let tinicio = document.getElementById('tinicio')
    let tfim = document.getElementById('tfim')
    let tpasso = document.getElementById('tpasso')
    let res = document.getElementById('res')

    if (tinicio.value.length == 0 || tfim.value.length == 0 || tpasso.value.length == 0) {
        res.innerHTML = `Impossivel contar!`
        //alert('Preencha os campos!')
    } else {
        res.innerHTML = `Contando: <br>`
        let inicio = Number(tinicio.value)
        let fim = Number(tfim.value)
        let passo = Number(tpasso.value)

        if(passo <= 0){
            alert('Passo inválido! Considerando passo = 1')
            passo = 1
        }
        if (inicio < fim) {
            for (let cont = inicio; cont <= fim; cont += passo) {
                res.innerHTML += `${cont} \u{1F449}`
            }
        } else {
            for (let cont = inicio; cont >= fim; cont -= passo){
                res.innerHTML += `${cont} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }

}