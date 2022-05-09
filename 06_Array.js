//sistema de busca usando Array com loop
var listaDeFrutas = ["Uva", "Banana", "Manga", "Cajá", "Pinha"];
var busca = "Cajá";

for (let i = 0; i < listaDeFrutas.length; i++) {
    if (listaDeFrutas[i] == busca) {
        console.log("Sim, temos a fruta " + busca + " disponível")
    }
}

//sistema de contagem de valore negativos em um Array
var listaDeGanhos = [10, 30, -10, -5, -1, 40];
var totalNegativos = 0;

for (let i = 0; i < listaDeGanhos.length; i++) {
    if (listaDeGanhos[i] < 0) {
        totalNegativos++
    }
}
console.log(totalNegativos)