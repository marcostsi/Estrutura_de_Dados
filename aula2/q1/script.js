function calculadora() {
let n1 = parseInt(prompt("Digite o primeiro numero: "))
let operador = prompt("Digite o operador: ")
let n2 = parseInt(prompt("Digite o segundo numero: "))


if (operador == "+"){
    console.log(n1 + n2)
    alert("O resultado é: " + (n1 + n2))
}
if (operador == "-"){
    console.log(n1 - n2)
    alert("O resultado é: " + (n1 - n2))
}
if (operador == "*"){
    console.log(n1 * n2)
    alert("O resultado é: " + (n1 * n2))
}
if (operador == "/"){
    console.log(n1 / n2)
    alert("O resultado é: " + (n1 / n2))
}
}