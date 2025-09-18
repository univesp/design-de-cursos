let caixaCadastro = document.getElementById('caixaCadastro');
let primeiroAcesso = document.getElementById('primeiroAcesso');
let jaSouCadastrado = document.getElementById('jaSouCadastrado');
let caixaRA = document.getElementById('caixaRA');

primeiroAcesso.addEventListener('click', fnPrimeiroAcesso);
jaSouCadastrado.addEventListener('click', fnJaSouCadastrado);

function fnPrimeiroAcesso(){
    this.parentElement.style.display = 'none';
    caixaCadastro.style.display = 'flex';
}

function fnJaSouCadastrado(){
    this.parentElement.style.display = 'none';
    caixaRA.style.display = 'flex';
}

