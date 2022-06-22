const elementoResultados = document.querySelector("#resultado")
const resultados = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
]
function sortearDado() {
botaoSortear.setAttribute("disabled", true)
const resultado = "<div>" + sortearDado.value + "</div>"
const totalResultados = resultados.length
const numeroAleatorio = Math.floor(Math.random() * totalResultados)
 console.log(resultados[numeroAleatorio])
elementoResultados.innerHTML = resultados[numeroAleatorio]
elementoResultados.style.opacity = 1;
setTimeout(function() {
    elementoResultados.style.opacity = 0;
    botaoSortear.removeAttribute("disabled")
  }, 3000)
}
function linkCriador() {
  window.location.href = "https://github.com/douglasrosso";
}
