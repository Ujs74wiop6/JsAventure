//função de validação de senha

const input = int(console.log(`Digite a senha:`));

function validacaoSenha(input, senhaJaCadastrada) {

    if (input === senhaJaCadastrada) {
        console.log("Senha Correta.")
    } else {
        console.log("Senha Incorreta.")
    }
}

console.log(validacaoSenha(input, 123))