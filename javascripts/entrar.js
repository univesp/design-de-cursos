let btnVamos = document.querySelectorAll('#btnEntrar')[0];

btnVamos.addEventListener('click', btnEntrarValid);

function btnEntrarValid(){
    let email = document.getElementById('emailLogin').value;
    let senha = document.getElementById('pwdLogin').value;
    if(!verificaEmail(email)){
      mensagemErroLogin('email - inválido', false);
    }
    else if (!verificaSenha(senha)) {
      mensagemErroLogin('senha não obedece critérios', false);
    }
    else{
      vamos();
    }
}

function vamos() {
    let valor = document.getElementById('emailLogin').value;
    let senha = document.getElementById('pwdLogin').value;
    $.ajax({
      type: "POST",
      data: {
        operacao: 'consulta',
        email: valor,
        senha: senha
      },
      url: "../_testes/testes-php/design-de-cursos/mongo.php",
      async: false,
      success: function(data) {
        if(data == "Senha incorreta"){
          mensagemErroLogin("Senha incorreta", false);
        }
        else if(data == "Usuário não existe"){
          mensagemErroLogin("Usuário não existe", false);
        }
        else if (data.length > 0) {
          alimentaAluno(data);
          revelaBlock([faixa1, etapa1]);
          revelaFlex([headerTotal, caixaGravar1]);
          esconde([tela1])
          header1.dataset.usado = 'ativo';
          falseiaHeader();
          header1.dataset.atual = 'true';
          header2.dataset.usado = 'ativo';
          header1.classList.add('ativo');
          arrayEtapas['etapa1'] = true;
          arrayEtapas['etapa2'] = true;
          faixa1.scrollIntoView();            
        }
        else{
          mensagemErroLogin("Tente novamente", false);
        }
      },
      error: function(data) {
        console.log(data);
      }
    })
}

function mensagemErroLogin(e, apaga) {
    let mensagemErro = document.getElementById('mensagemErro');
    mensagemErro.innerHTML = e;
    mensagemErro.style.opacity = '1';
    if(!apaga){
      setTimeout(function() {
        mensagemErro.style.opacity = '0';
      }, 5000);
    }
  }