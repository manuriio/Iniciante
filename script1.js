const btn = document.getElementById("concluir")
const lista = document.getElementById("nomes")

let input = document.getElementById("nome")
const itens = document.querySelectorAll("li");

btn.addEventListener("click", function(){
for(let i = 0; i < itens.length; i++)
{
    console.log(itens[i].textContent)

    if(itens[i].textContent == input.value)
    {
        itens[i].style.fontWeight = "bold";

}}})