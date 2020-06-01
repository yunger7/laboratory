function gerar_tabuada(){
    let tnum = document.getElementById('tnum')
    let tab = document.getElementById('tabuada')

    if (tnum.value.length == 0){
        alert('Digite um número!')
    } else {
        let num = Number(tnum.value)
        tab.innerHTML = ''
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}
