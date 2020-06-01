let amigo = {nome: "José",
sexo: "M",
peso: 85.4,
engordar(p=0){
    console.log('Engordou!')
    this.peso += p
    //this é uma referência ao próprio objeto.
}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} Kg!`)