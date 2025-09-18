function cadastroNovo(nome, email, senha){
  let exemplo = {
    nome: nome,
    email: email,
    senha: senha,
    integrantes: "",
    tema: "",
    publico: "",
    justificativa: "",
    objetivos: "",
    modulos: {
      modulo1: {
        nome: "",
        sequencia: "1",
        carga: "",
        objetivos: "",
        apresentacao: "",
        situacaoproblema: "",
        forum: "",
        atividadeavaliativa: "",
        encerramento: "",
        materiais: {
          material1: {
            tipodematerial: "2",
            sequencia: "1",
            titulo: "",
            autoria: "",
            comentario: "",
            link: "",
          }
        }
      }
    }
  }
  cadastrarNovoAlunoNoBanco(exemplo);

}

function cadastrarNovoAlunoNoBanco(exemplo) {
  $.ajax({
    type: "POST",
    data: {
      operacao: 'inclusao',
      json: JSON.stringify(exemplo)
    },
    url: "../_testes/testes-php/design-de-cursos/mongo.php",
    async: false,
    success: function(data) {
      if(data == 'Usuário já cadastrado'){
        mensagemErroCadastro('USUÁRIO JÁ CADASTRADO');
      }
      else{
        mensagemErroCadastro('CADASTRO EFETUADO COM SUCESSO');
        setTimeout(function(){
          zerarInputsCadastro();
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
        }, 1000);
      }
    },
    error: function(data) {
      console.log(data)
      console.log('deu errado');
    }
  })
}


function vamosViaCadastro() {
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
      console.log(data);
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

  // constroiOBjetoAluno();
}
