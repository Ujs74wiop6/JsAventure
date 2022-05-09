//estrutura de condição - composta
//toFixed() - função que determina a casa decimal
var altura = 1.70
if (altura > 1.80) {
    console.log("De acordo com a sua altura de " + altura + " você é considerado Alto")
} else if ((altura >= 1.65) && (altura <= 1.80)) {
    console.log("De acordo com a sua altura de " + altura + " você é considerado Mediano")
} else {
    console.log("De acordo com a sua altura de " + altura + " você é considerado Baixo")
}