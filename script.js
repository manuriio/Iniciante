const inputNumero = document.getElementById("numero")
const tabuada = document.getElementById("tabuada")
const resul = document.getElementById("resul")
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
for(let i = 1; i <= 10; i++){
    numero = inputNumero.value
    let conta= i * numero
    const p = document.createElement('p')
    p.textContent= `${i} x ${numero}  = ${conta} `
    tabuada.appendChild(p)

}})