
// Tree | com elemento principal uma raiz, que armazena um conjuto de nós que trabalham de forma hierárquica, separando elementos: filhos, pais, avos...

class Arvore{

    constructor(){
        this.nos = [];
    }

    inserir(arvore, valor){
        if(arvore.valor){
            if(valor > arvore.valor){
                this.inserir(arvore.direita, valor);
            }else{
                this.inserir(arvore.esquerda, valor);
            }
        }else{
            arvore.valor = valor;
            arvore.direita = {}
            arvore.esquerda = {}
        }
    }
}

const novaArvore  = new Arvore();
novaArvore.inserir(novaArvore.nos, 1);
novaArvore.inserir(novaArvore.nos, 2);
novaArvore.inserir(novaArvore.nos, 3);
