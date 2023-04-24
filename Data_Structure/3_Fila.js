
// Fila | 1° que entra, 1° que sai | FIFO (first in first out)

class Fila{
    constructor(){
        this.elemento = [];
    }
    enqueue(elemento){
        this.elemento.push(elemento);
    }
    daqueue(){
        this.elemento.shift();
    }
}

const fila = new Fila();
fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
fila.enqueue(4);
fila.enqueue(5);
console.log("FILA (FIFO)\n");
console.log(fila);
fila.daqueue();
console.log(fila);