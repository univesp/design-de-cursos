let emailCadastro = document.getElementById("emailCadastro");
let pwdCadastro = document.getElementById("pwdCadastro");
let pwdRepeteCadastro = document.getElementById("pwdRepeteCadastro");
let nomeCadastro = document.getElementById("nomeCadastro");

cadastrar.addEventListener('click', fnCadastrar);

function fnCadastrar(){
  let email = emailCadastro.value;
  let senha = pwdCadastro.value;
  let senhaRepetida = pwdRepeteCadastro.value;
  let nome = nomeCadastro.value;
  if(algumCampoEmBranco()){
    mensagemErroCadastro('TODOS OS CAMPOS DEVEM SER PREENCHIDOS');
  }
  else if (!verificaNome(nome)) {
    mensagemErroCadastro('NOME NÃO OBEDECE OS CRITÉRIOS ESTABELECIDOS');
  }
  else if(!verificaEmail(email)){
    mensagemErroCadastro('EMAIL INVÁLIDO');
  }
  else if (!verificaSenhaRepetida(senha, senhaRepetida)) {
    mensagemErroCadastro('SENHAS DIGITADAS NÃO SÃO IGUAIS');
  }
  else if (!verificaSenha(senha)) {
    mensagemErroCadastro('SENHA NÃO OBEDECE OS CRITÉRIOS ESTABELECIDOS');
  }
  else{
    cadastroNovo(nome, email, senha);
  }
}
function zerarInputsCadastro(){
    emailCadastro.value = "";
    pwdCadastro.value = "";
    pwdRepeteCadastro.value = "";
    nomeCadastro.value = "";
}
function mensagemErroCadastro(e){
    mensagemErroPisca();
    let mensagem = document.getElementById('mensagemErroCadastro');
    mensagem.innerHTML = e;
}
function mensagemErroPisca(){
    let mensagem = document.getElementById('mensagemErroCadastro');
    mensagem.style.opacity = '1';
    setTimeout(function(){ 
      mensagem.style.opacity = '0'; 
    }, 5000);
}
function verificaSenhaRepetida(senha, senhaRepetida){
    if(senha == senhaRepetida)
      return true;
    else
      return false;
}
function verificaEmail(e){
    if(e.length < 5 || !e.includes('@')){
      return false;
    }
    else{
      return true;
    }
}
function verificaNome(e){
    if(e.length < 5){
      return false;
    }
    else{
      return true;
    }
}
function verificaSenha(e){
    if(e.length > 5){
      return true;
    }
    else {
      return false;
    }
}
function algumCampoEmBranco(){
  if(
    emailCadastro.value.trim() == "" || 
    pwdCadastro.value.trim() == "" || 
    pwdRepeteCadastro.value.trim() == "" ||
    nomeCadastro.value.trim() == ""
    ){ 
      return true;
    }
  else{
    return false;
  }
}