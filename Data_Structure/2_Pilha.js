
// Pilha | 1° que entra, ultimo que sai | LIFO (last-in first-out)

class Pilha{
    constructor(){
        this.elemento = [];
    }
    push(elemento){
        this.elemento.push(elemento);
    }
    pop(){
        this.elemento.pop();
    }
}

const pilha = new Pilha();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
console.log("PILHA (LIFO)\n");
console.log(pilha);
pilha.pop();
console.log(pilha);
