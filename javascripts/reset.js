
let mensagemErroReiniciaSenha = document.querySelector('#mensagemErroReiniciaSenha');

btnRedirectReiniciaSenha.addEventListener('click', function(){
  
  let email = document.getElementById('emailLogin').value;
  if(!verificaEmail(email)){
    mensagemErroLogin('email - inválido', false);
  }
  else{
    cadastraToken(email);
  }
})


function cadastraToken(emailArg) {
  $.ajax({
    type: "POST",
    data: {
      email: emailArg,
    },
    url: "../_testes/testes-php/design-de-cursos/reset-request.php",
    async: false,
    success: function(data) {
      if(data == 'Usuário não existe'){
        mensagemErroLogin('USUÁRIO NÃO EXISTE', false);
      }
      else{
        mensagemErroLogin('E-mail enviado com sucesso. Favor conferir se a mensagem não foi direcionada para sua caixa postal SPAM/Lixo Eletrônico.', true);
        zerarInputsCadastro();
      }
    },
    error: function(data) {
      console.log(data)
      console.log('deu errado');
    }
  })
}
