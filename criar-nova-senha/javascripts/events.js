

let pwdNew = document.querySelector('#pwdNew');
let pwdNewRepeat = document.querySelector('#pwdNewRepeat');
let msgErroNewPwd = document.querySelector('#msgErroNewPwd');
let cadastrar = document.querySelector('#cadastrar');
let caixaNovaSenha = document.querySelector('#caixaNovaSenha');
let erroTokenCaixa = document.querySelector('#erroTokenCaixa');
let msgErroToken = document.querySelector('#msgErroToken');

cadastrar.addEventListener('click', function(){
    let senha = pwdNew.value;
    let pwdNewRepeat2 = pwdNewRepeat.value;
    if(camposVazios()){
        mensagemErroResetPwd('PREENCHA TODOS OS CAMPOS');
    }
    if(!verificaSenha(senha)){
        mensagemErroResetPwd('SENHA FORA DOS PADRÕES');
    }
    else if(!verificaSenhaRepetida(senha, pwdNewRepeat2)){
        mensagemErroResetPwd('SENHAS NÃO BATEM');
    }
    else{
        let resultado = cadastraNovaSenha(this.dataset.selector, this.dataset.token, this.dataset.email, senha);
        if(resultado == 'Senha alterada com sucesso'){
            escondeCaixaCadastra();
            revelaTokenCaixa();
            alimentaErroToken('SENHA ALTERADA COM SUCESSO');
        }
        else if(resultado == 'token expirado'){
            escondeCaixaCadastra();
            revelaTokenCaixa();
            alimentaErroToken('TOKEN EXPIROU');
        }
        else if(resultado == 'Usuário Não encontrado 2'){
            mensagemErroResetPwd('Usuário Não encontrado 2');
        }
        else if(resultado == 'Usuário Não encontrado'){
            mensagemErroResetPwd('Usuário Não encontrado');
        }
    }
})

function verificaSenha(e){
    if(e.length > 5){
      return true;
    }
    else {
      return false;
    }
}

function verificaSenhaRepetida(senha, senhaRepetida){
    if(senha == senhaRepetida)
      return true;
    else
      return false;
}

function mensagemErroResetPwd(e){
    msgErroNewPwdPisca();
    msgErroNewPwd.innerHTML = e;
}

function zerarInputsNewPwd(){
    pwdNew.value = "";
    pwdNewRepeat.value = "";
}

function msgErroNewPwdPisca(){
    msgErroNewPwd.style.opacity = '1';
    setTimeout(function(){ 
        msgErroNewPwd.style.opacity = '0'; 
    }, 5000);
}

function verificaToken(){
    let url = window.location.href;
    if (!url.includes('selector') || !url.includes('token') || !url.includes('?')){
        revelaTokenCaixa();
        alimentaErroToken('LINK QUEBRADO');
    }
    else{
        let selector = url.substring(url.indexOf('selector') + 9, url.indexOf('token') - 1);
        let token = url.substring(url.indexOf('token') + 6, url.length);
        let email = verificaSelectortokenNoBanco(selector, token);
        cadastrar.dataset.selector = selector;
        cadastrar.dataset.token = token;
        if(email == 'Usuário não existe' || email == 'deu errado'){
            escondeCaixaCadastra();
            revelaTokenCaixa();
            alimentaErroToken('LINK QUEBRADO');
        }
        else if(email == 'Token expirou'){
            escondeCaixaCadastra()
            revelaTokenCaixa();
            alimentaErroToken('TOKEN EXPIROU');            
        }
        else{
            cadastrar.dataset.email = email;
            revelaCaixaCadastra();
        }
    }
    
}

function verificaSelectortokenNoBanco(selector, token){
    let retorno;
    $.ajax({
        type: "POST",
        data: {
            selector: selector,
            token: token
        },
        url: "../../_testes/testes-php/design-de-cursos/verify-tokens.php",
        async: false,
        success: function(data) {
        if(data == 'Usuário não existe'){
            retorno = 'Usuário não existe';
        }
        else{
            retorno = data;
        }
        },
        error: function(data) {
            retorno = 'deu errado';
        }
    })
    return(retorno);
}

function cadastraNovaSenha(selector, token, email, senha){
    let retorno = 'nada acontece';
    $.ajax({
        type: "POST",
        data: {
            selector: selector,
            token: token,
            email: email,
            senha: senha
        },
        url: "../../_testes/testes-php/design-de-cursos/cadastrar-nova-senha.php",
        async: false,
        success: function(data) {
        if(data == 'Usuário Não encontrado'){
            retorno = 'Usuário Não encontrado';
        }
        else if(data == 'Usuário Não encontrado 2'){
            retorno = 'Usuário Não encontrado 2';
        }
        else{
            retorno = data;
        }
        },
        error: function(data) {
            retorno = 'deu errado';
        }
    })
    return(retorno);
}

function revelaTokenCaixa(){
    erroTokenCaixa.style.display = 'flex';
}

function revelaCaixaCadastra(){
    caixaNovaSenha.style.display = 'flex'; 
}

function escondeCaixaCadastra(){
    caixaNovaSenha.style.display = 'none';
}

function alimentaErroToken(e){
    msgErroToken.innerHTML = e;
}

function camposVazios(){
    if(pwdNew.value.trim() == "" || pwdNewRepeat.value.trim() == ""){
        return true;
    }
    else{
        return false;
    }
}

verificaToken();