function criaModulo(e, obj, inicio){
  let idModulo = e;
  let modulo = document.createElement('div');
  modulo.classList.add('modulo', 'ativo', 'espSupPqn');
  modulo.id = idModulo;
  let inputsPrimeiraDivLabel = ['Módulo','Sequência','Carga Horária']
  let tipoInput = ['nome','sequencia','carga'];
  let primeiraDiv = document.createElement('div');

  for (var i = 0; i < 3; i++) {
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerHTML = inputsPrimeiraDivLabel[i];
    let input = document.createElement('input');
    input.value = obj[tipoInput[i]];
    if(i == 0){
      input.type = 'text';
      input.step = '1';
    }
    else if(i == 1){
      input.type = 'number';
      input.min = "1";
      input.max = "20";
      modulo.dataset.sequencia = obj[tipoInput[i]];
      input.addEventListener('keyup', validaInput);
      input.addEventListener('keypress', validaInput);
    }
    else if(i == 2){
      input.type = 'time';
      input.addEventListener('keyup', calculaCargaHoraria);
    }
    input.dataset.modulo = idModulo;
    input.dataset.tipoInput = tipoInput[i];
    // input.dataset.placeholder = obj["placeholder" + tipoInput[i]];
    input.addEventListener('focus', fnInputFocusModulo);
    input.addEventListener('keyup', fnInputUpModulo);
    input.addEventListener("blur", onBlur);
    // input.setAttribute("placeholder", obj["placeholder" + tipoInput[i]]);
    input.addEventListener("focus", onFocus)
    div.appendChild(p);
    div.appendChild(input);
    primeiraDiv.appendChild(div);
  }
  modulo.appendChild(primeiraDiv);

  let segundaDiv = document.createElement('div');

  let divinha = document.createElement('div')
  let p = document.createElement('p');
  p.innerHTML = "Objetivos de aprendizagem"
  let textarea = document.createElement('textarea');
  textarea.rows = "4";
  textarea.cols = "80";
  textarea.dataset.modulo = idModulo;
  textarea.dataset.tipoInput = "objetivos";
  textarea.addEventListener('focus', fnTextAreaFocusModulo)
  textarea.addEventListener('keyup', fnTextAreaUpModulo)
  textarea.value = obj['objetivos'];
  // textarea.setAttribute("placeholder", obj["placeholderobjetivos"])
  // textarea.dataset.placeholder = obj["placeholderobjetivos"];
  textarea.addEventListener("blur", onBlur);
  textarea.addEventListener("focus", onFocus);
  divinha.appendChild(p)
  divinha.appendChild(textarea)
  segundaDiv.appendChild(divinha);

  modulo.appendChild(segundaDiv);
  if(!inicio){
    adicionaModulo(e, obj);
  }
  return(modulo);
}

function onFocus(){
  // this.setAttribute("placeholder","");
}

function onBlur(){
  // this.setAttribute("placeholder",this.dataset.placeholder);
}

function fnTextAreaUpModulo(){
  atualizaArray(this.dataset.modulo, this.dataset.tipoInput, this.value);
}

function fnInputUpModulo(){
  atualizaArray(this.dataset.modulo, this.dataset.tipoInput, this.value);
}

function fnInputFocusModulo(){
  dinamicaModulo(this);
}

function fnTextAreaFocusModulo(){
  dinamicaModulo(this);
}

function criaRodapeModulo(){
  let div = document.createElement('div');
  div.classList.add('rodapeModulo');
  let divona = document.createElement('div');
  let lixinho = document.createElement('div');
  lixinho.addEventListener('click', fnLixinho);
  lixinho.innerHTML = '<i class="fas fa-trash"></i>';
  let adiciona = document.createElement('div');
  adiciona.innerHTML = '<i class="fas fa-plus-circle"></i>';
  adiciona.addEventListener('click', fnAdiciona);

  divona.appendChild(adiciona);
  divona.appendChild(lixinho);
  div.appendChild(divona);
  return(div);
}

function fnLixinho(){
  if(document.getElementsByClassName('modulo').length > 1){
    let caixaPai = this.parentElement.parentElement.previousSibling;
    caixaPai.parentElement.removeChild(caixaPai);
    destroiRodapeModulo();
    removeModulo(caixaPai.id);
    let modulos = document.getElementsByClassName('modulo');
    let primeiroModulo = modulos[0];
    primeiroModulo.classList.add('modAtivo');
    appendaLogoDepois(criaRodapeModulo(), primeiroModulo);
    primeiroModulo.getElementsByTagName('input')[0].focus();
    atualizaBanco();
  }
}

function fnAdiciona(){
  let caixaPai = this.parentElement.parentElement.previousSibling;
  let modulo = criaModulo(idRandom(), new Modulo, false);
  appendaLogoDepois(modulo, caixaPai);
  modulo.getElementsByTagName('input')[0].focus();
  atualizaBanco();
}

function destroiRodapeModulo(){
  if(document.getElementsByClassName('rodapeModulo').length > 0){
    let rodape = document.getElementsByClassName('rodapeModulo')[0];
    rodape.parentElement.removeChild(rodape);
  }
}

function appendaLogoDepois(elemento, alvo){
  let depois = alvo.nextSibling;
  let parent = alvo.parentElement;
  parent.insertBefore(elemento, depois);
}

function dinamicaModulo(e){
  if(document.getElementsByClassName('modAtivo').length > 0){
    document.getElementsByClassName('modAtivo')[0].classList.remove('modAtivo');
  }
  e.parentElement.parentElement.parentElement.classList.add('modAtivo');
  destroiRodapeModulo();
  if(!(document.getElementsByClassName('rodapeModulo').length > 0)){
    appendaLogoDepois(criaRodapeModulo(),e.parentElement.parentElement.parentElement)
  }
}
