/* LISTA DE COMANDOS*/

function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var tano = window.document.getElementById('txtano')
    var ano = tano.value
    var res = document.querySelector('div#res')
    if (ano > ano_atual || ano == 0) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(ano)
        res.innerHTML = `Idade: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            var genero = 'Homem'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'foto-crianca-h.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-h.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-h.png')
            } else {
                img.setAttribute('src', 'foto-idoso-h.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher'
            if (idade >= 0 && idade <= 12) {
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Voce e um(a) ${genero} de ${idade} anos!`
        res.appendChild(img)
    }

}