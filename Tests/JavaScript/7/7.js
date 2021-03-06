//laço de percurso

let num = [1, 5, 7, 8, 10, 16, 2, 3]

let maior = num[0]
for (let pos in num){
    if (num[pos] > maior){
        maior = num[pos]
    }
}
console.log(`O maior número é ${maior}`)