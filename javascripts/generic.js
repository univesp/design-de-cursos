function escondeTudo(){
  esconde([tela1]);
  esconde([etapa1]);
  esconde([etapa2]);
  esconde([etapa3]);
  esconde([etapa4]);
  esconde([faixa1]);
  esconde([faixa2]);
  esconde([faixa3]);
  esconde([faixa4]);
  esconde([caixaGravar1]);
  esconde([caixaGravar2]);
  esconde([caixaGravar3]);
}


function isNumber(char) {
  if (char == '0' || char == '1' || char == '2' || char == '3' || char == '4' ||
    char == '5' || char == '6' || char == '7' || char == '8' || char == '9') {
    return true;
  } else {
    return false;
  }
}

function maiorQue10(char){
  console.log(char);
  if(parseInt(char) > 9){
    return true;
  }
  else{
    return false;
  }
}


function fromTime(time) {
  let timeArray = time.split(':');
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  return (hours * 60) + minutes;
}

function toTime(number) {
  let hours = Math.floor(number / 60);
  let minutes = number % 60;
  return hours + ":" + (minutes <= 9 ? "0" : "") + minutes;
}




function validaInput(){
  let input = this
  let inputValue = input.value;
  let characterTypedIn = inputValue[inputValue.length - 1]; // caracter inserido
  //Não deixa digitar caracteres que não são números.
  if (!isNumber(characterTypedIn)) {
    input.value = inputValue.slice(0, -1);
  }
  else if(maiorQue10(inputValue)){
    input.value = 9;
  }
}

function esconde(e){
  for (var i = 0; i < e.length; i++) {
    e[i].style.display = 'none';
  }}

function revelaBlock(e){
  for (var i = 0; i < e.length; i++) {
    e[i].style.display = 'block';
  }}

function revelaFlex(e){
  for (var i = 0; i < e.length; i++) {
    e[i].style.display = 'flex';
  }}

function idRandom() {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < 8; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;}

function desativaHeader(){
  header1.classList.remove('ativo')
  header2.classList.remove('ativo')
  header3.classList.remove('ativo')
  header4.classList.remove('ativo')
}

function ativaHeader(e){
  e.classList.add('ativo');
}

let botoesGravar = document.querySelectorAll('.caixaGravar>div');

for (var i = 0; i < botoesGravar.length; i++) {
  botoesGravar[i].addEventListener('click', botaoGravar)
}

function botaoGravar(){
  atualizaBanco();
  let span = this.parentElement.getElementsByTagName('span')[0];
  span.style.opacity = '1';
  setTimeout(function() {
    span.style.opacity = '0';
  }, 5000);
}
