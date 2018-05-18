let addBtn = document.querySelector("#somar")
let minBtn = document.querySelector("#subtrair")
let multBtn = document.querySelector("#multiplicar")
let divBtn = document.querySelector("#dividir")
let resultContainer = document.querySelector("#resultado")

//Inputs
let num1Input = document.querySelector("#numero-1")
let num2Input = document.querySelector("#numero-2")
let result = 0

addBtn.addEventListener('click', (event) => {
   let num1 = parseInt(num1Input.value)
   let num2 = parseInt(num2Input.value)
   event.preventDefault()
   result = num1 + num2
   resultContainer.innerHTML = `${result}`
})

minBtn.addEventListener('click', (event) => {
   let num1 = parseInt(num1Input.value)
   let num2 = parseInt(num2Input.value)
   event.preventDefault()
   result = num1 - num2
   resultContainer.innerHTML = `${result}`
})

multBtn.addEventListener('click', (event) => {
   let num1 = parseInt(num1Input.value)
   let num2 = parseInt(num2Input.value)
   event.preventDefault()
   result = num1 * num2
   resultContainer.innerHTML = `${result}`
})

divBtn.addEventListener('click', (event) => {
   let num1 = parseInt(num1Input.value)
   let num2 = parseInt(num2Input.value)
   event.preventDefault()
   result = num2 == 0 ? 'Operação Inválida' : num1 / num2
   resultContainer.innerHTML = `${result}`
})