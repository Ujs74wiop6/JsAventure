//função de validação de senha
function validacaoSenha(senhaInformada, senhaJaCadastrada) {

    //não consigo fazer o usuário informar uma senha... help me

    if (senhaInformada === senhaJaCadastrada) {
        console.log("Senha Correta.")
    } else {
        console.log("Senha Incorreta.")
    }
}
console.log(validacaoSenha(123, 123))
