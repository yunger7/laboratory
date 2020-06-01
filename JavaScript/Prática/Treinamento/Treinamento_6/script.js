/* Esse teste foi dedicado para treinar como cirar e manipular elementos html usando javascript*/
var teste = document.getElementById('sec1')
var item = document.createElement('div')
item.innerHTML = `Testando`
teste.appendChild(item)