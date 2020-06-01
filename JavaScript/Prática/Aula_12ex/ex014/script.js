function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 17
    var minutos = data.getMinutes()
    //var minutos = 14
    if (minutos < 10) {
        msg.innerHTML = `Agora são ${hora}:0${minutos}`
    } else {
        msg.innerHTML = `Agora são ${hora}:${minutos}`
    }

    if (hora >= 5 && hora <= 12) {
        //Manha
        img.src = 'fotomanha.png'
        window.document.body.style.background = '#ba6709'
    } else if (hora >= 12 && hora <= 18) {
        //Tarde
        img.src = 'fototarde.png'
        window.document.body.style.background = '#7a4832'
    } else {
        //Noite
        img.src = 'fotonoite.png'
        window.document.body.style.background = '#031732'
    }

}