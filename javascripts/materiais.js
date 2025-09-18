function appendaMateriaisEtapa2(){
  let Materiais = criaMateriais();
  let etapa2 = document.getElementById('etapa2');
  etapa2.appendChild(Materiais);
}

function criaCaixaSelectModulo(e){
  let caixaSelectModulo = document.createElement('div');
  caixaSelectModulo.classList.add('caixaSelectModulo');
  caixaSelectModulo.dataset.modulo = e

  let p1 = document.createElement('p');
  p1.classList.add('espSupPqn','mrgBotSml');
  p1.innerHTML = "Apresentação";
  caixaSelectModulo.appendChild(p1)

  let p2 = document.createElement('p')
  p2.classList.add('textinho');
  p2.innerHTML = "Inclua aqui um texto de apresentação do módulo, de preferência motivando e orientando as pessoas em relação ao material que será disponibilizado";
  caixaSelectModulo.appendChild(p2)

  let textarea1 = document.createElement('textarea');
  textarea1.rows = '1';
  textarea1.cols = '80';
  textarea1.addEventListener('keyup', fnCaixaSelectModuloTextArea);
  textarea1.dataset.modulo = e;
  textarea1.dataset.tipo = "apresentacao";
  textarea1.value = aluno.modulos[e].apresentacao;
  textarea1.addEventListener("blur", onBlur);
  textarea1.addEventListener("focus", onFocus);
  // textarea1.dataset.placeholder = aluno.modulos[e].placeholderapresentacao;
  // textarea1.setAttribute('placeholder', aluno.modulos[e].placeholderapresentacao)
  caixaSelectModulo.appendChild(textarea1)

  let p3 = document.createElement('p')
  p3.classList.add('mrgBotSml');
  p3.innerHTML = "Situação-problema";
  caixaSelectModulo.appendChild(p3);

  let p4 = document.createElement('p')
  p4.classList.add('textinho');
  p4.innerHTML = 'Inclua aqui uma situação-problema relativa ao tema do módulo, isto é, uma situação com a qual a pessoa irá se deparar em seu dia a dia e na qual precisará fazer uso do conhecimento apresentado no módulos';
  caixaSelectModulo.appendChild(p4);

  let textarea2 = document.createElement('textarea');
  textarea2.rows = '1';
  textarea2.cols = '80';
  textarea2.dataset.modulo = e;
  textarea2.dataset.tipo = "situacaoproblema";
  textarea2.value = aluno.modulos[e].situacaoproblema;
  // textarea2.setAttribute('placeholder', aluno.modulos[e].placeholdersituacaoproblema)
  // textarea2.dataset.placeholder = aluno.modulos[e].placeholdersituacaoproblema;
  textarea2.addEventListener("blur", onBlur);
  textarea2.addEventListener("focus", onFocus);
  textarea2.addEventListener('keyup', fnCaixaSelectModuloTextArea);
  caixaSelectModulo.appendChild(textarea2);

  return(caixaSelectModulo);
}

function fnCaixaSelectModuloTextArea(){
  atualizaArray(this.dataset.modulo, this.dataset.tipo, this.value);
}

function criaForum(modulo){

  let forum = document.createElement('div');
  forum.classList.add('caixaForum', 'espSupGrn');

  let p1 = document.createElement('p');
  p1.classList.add('neg');
  p1.innerHTML = "Fórum";
  forum.appendChild(p1);

  let p2 = document.createElement('p');
  p2.innerHTML = "Fórum";
  forum.appendChild(p2);

  let caixaTipoMateriais1 = document.createElement('div');
  caixaTipoMateriais1.classList.add('caixaTipoMateriais');
  let divBolinha1 = document.createElement('div');
  let bolinha1 = document.createElement('div');
  bolinha1.dataset.modulo = modulo;
  bolinha1.classList.add('bolinha')


  if(aluno.modulos[modulo].forum == "1"){
    bolinha1.classList.add('blnSelecionada')
  }

  bolinha1.addEventListener('click', fnBolinhasForum);
  bolinha1.dataset.tipo = "forum";
  bolinha1.dataset.valor = "1";
  let divSim = document.createElement('div');
  divSim.innerHTML = "SIM";
  divBolinha1.appendChild(bolinha1);
  divBolinha1.appendChild(divSim);

  let divBolinha2 = document.createElement('div');
  let bolinha2 = document.createElement('div');
  bolinha2.classList.add('bolinha');

  if(aluno.modulos[modulo].forum == "2"){
    bolinha2.classList.add('blnSelecionada')
  }

  bolinha2.dataset.modulo = modulo;
  bolinha2.addEventListener('click', fnBolinhasForum)
  bolinha2.dataset.tipo = "forum";
  bolinha2.dataset.valor = "2";
  let divNao = document.createElement('div');
  divNao.innerHTML = "NÃO";
  divBolinha2.appendChild(bolinha2);
  divBolinha2.appendChild(divNao);

  caixaTipoMateriais1.appendChild(divBolinha1);
  caixaTipoMateriais1.appendChild(divBolinha2);

  forum.appendChild(caixaTipoMateriais1);

  let p3 = document.createElement('p');
  p3.classList.add('neg', 'espSupPqn');
  p3.innerHTML = "Atividade avaliativa";
  forum.appendChild(p3);

  let p4 = document.createElement('p');
  p4.innerHTML = "Este módulo vai contar com uma atividade avaliativa e/ou exercício de apoio";
  forum.appendChild(p4);

  let caixaTipoMateriais2 = document.createElement('div');
  caixaTipoMateriais2.classList.add('caixaTipoMateriais');
  let divBolinha12 = document.createElement('div');
  let bolinha12 = document.createElement('div');
  bolinha12.classList.add('bolinha')

  if(aluno.modulos[modulo].atividadeavaliativa == "1"){
    bolinha12.classList.add('blnSelecionada')
  }

  bolinha12.addEventListener('click', fnBolinhasForum)
  bolinha12.dataset.modulo = modulo;
  bolinha12.dataset.tipo = "atividadeavaliativa";
  bolinha12.dataset.valor = "1";
  let divSim2 = document.createElement('div');
  divSim2.innerHTML = "SIM";
  divBolinha12.appendChild(bolinha12);
  divBolinha12.appendChild(divSim2);

  let divBolinha22 = document.createElement('div');
  let bolinha22 = document.createElement('div');
  bolinha22.classList.add('bolinha');
  if(aluno.modulos[modulo].atividadeavaliativa == "2"){
    bolinha22.classList.add('blnSelecionada')
  }

  bolinha22.addEventListener('click', fnBolinhasForum)
  bolinha22.dataset.modulo = modulo;
  bolinha22.dataset.tipo = "atividadeavaliativa";
  bolinha22.dataset.valor = "2";
  let divNao2 = document.createElement('div');
  divNao2.innerHTML = "NÃO";
  divBolinha22.appendChild(bolinha22);
  divBolinha22.appendChild(divNao2);

  caixaTipoMateriais2.appendChild(divBolinha12);
  caixaTipoMateriais2.appendChild(divBolinha22);

  forum.appendChild(caixaTipoMateriais2);

  let p5 = document.createElement('p');
  p5.classList.add('neg', 'espSupPqn');
  p5.innerHTML = "Encerramento";
  forum.appendChild(p5);

  let p6 = document.createElement('p');
  p6.classList.add('textinho')
  p6.innerHTML = "Inclua aqui um texto de conclusão do módulo, amarrando os conteúdos apresentados; se quiser, inclua uma prévia do que será visto em outros módulos";
  forum.appendChild(p6);

  let textarea = document.createElement('textarea');
  textarea.rows = '2';
  textarea.cols = '80';
  textarea.dataset.modulo = modulo;
  textarea.dataset.tipoInput = 'encerramento';
  // textarea.setAttribute('placeholder', aluno.modulos[modulo].placeholderencerramento)
  // textarea.dataset.placeholder = aluno.modulos[modulo].placeholderencerramento;
  textarea.addEventListener("blur", onBlur);
  textarea.addEventListener("focus", onFocus);
  textarea.addEventListener('keyup', fnTextAreaForum)
  textarea.value = aluno.modulos[modulo].encerramento;
  forum.appendChild(textarea);
  return(forum);
}

function fnTextAreaForum(){
  atualizaArray(this.dataset.modulo, this.dataset.tipoInput, this.value);
}

function criaMateriais(e, modulo, material ,inicio){
  let materiais = document.createElement('div');
  materiais.dataset.sequencia = e.sequencia;
  materiais.classList.add('materiais', 'espSupGrn');

  materiais.dataset.modulo = modulo;
  materiais.dataset.material = material;
  materiais.dataset.tipodematerial = e.tipodematerial;

  let tipoDeMateriais = document.createElement('div');
  tipoDeMateriais.classList.add('tipoDeMateriais');

  let tipoDeMateriaisDiv1 = document.createElement('div');
  let tipoDeMateriaisDiv1p = document.createElement('p');
  tipoDeMateriaisDiv1p.innerHTML = 'Tipo de Material';
  tipoDeMateriaisDiv1.appendChild(tipoDeMateriaisDiv1p);
  let caixaTipoMateriais = document.createElement('div');
  caixaTipoMateriais.classList.add('caixaTipoMateriais');
  let arrCaixaTipoMateriais = ['Revisão de conhecimentos','Material básico','Aprofundando o tema']
  for (var i = 0; i < 3; i++) {
    let div = document.createElement('div');
    let bolinha = document.createElement('div');
    bolinha.addEventListener('click', fncBolinhaMateriais)
    bolinha.classList.add('bolinha');
    bolinha.dataset.tipo = i + 1;
    bolinha.dataset.modulo = modulo;
    bolinha.dataset.material = material;
    if(inicio){
      if(i == 0)
        bolinha.classList.add('blnSelecionada');
    }
    else{
      if(i == (parseInt(e.tipodematerial) - 1)){
        bolinha.classList.add('blnSelecionada');
      }
    }

    let div2 = document.createElement('div');
    div2.innerHTML = arrCaixaTipoMateriais[i];
    div.appendChild(bolinha);
    div.appendChild(div2);
    caixaTipoMateriais.appendChild(div);
  }

  tipoDeMateriaisDiv1.appendChild(caixaTipoMateriais);


  let tipoDeMateriaisDiv2 = document.createElement('div');
  let tipoDeMateriaisDiv2Div = document.createElement('div');
  let tipoDeMateriaisDiv2DivSpan1 = document.createElement('span');
  tipoDeMateriaisDiv2DivSpan1.innerHTML = 'Sequência';
  let tipoDeMateriaisDiv2DivSpan2 = document.createElement('span');
  tipoDeMateriaisDiv2DivSpan2.innerHTML = '?';
  tipoDeMateriaisDiv2DivSpan2.addEventListener('click', fnSpanSequencia);
  tipoDeMateriaisDiv2Div.appendChild(tipoDeMateriaisDiv2DivSpan1);
  tipoDeMateriaisDiv2Div.appendChild(tipoDeMateriaisDiv2DivSpan2);
  let tipoDeMateriaisDiv2Input = document.createElement('input');
  tipoDeMateriaisDiv2Input.type = 'number';
  tipoDeMateriaisDiv2Input.value = e.sequencia;
  tipoDeMateriaisDiv2Input.min = "1";
  tipoDeMateriaisDiv2Input.max = "20";
  tipoDeMateriaisDiv2Input.setAttribute("placeholder", '1');
  tipoDeMateriaisDiv2Input.addEventListener('keyup', validaInput);
  tipoDeMateriaisDiv2Input.addEventListener('keypress', validaInput);
  tipoDeMateriaisDiv2Input.addEventListener('click', fnInputSequencia);
  tipoDeMateriaisDiv2Input.addEventListener('keyup', keyUpInputSequencia);
  tipoDeMateriaisDiv2Input.addEventListener('change', keyUpInputSequencia);
  tipoDeMateriaisDiv2Input.value = e.sequencia;
  tipoDeMateriaisDiv2Input.dataset.modulo = modulo;
  tipoDeMateriaisDiv2Input.dataset.material = material;


  tipoDeMateriaisDiv2.appendChild(tipoDeMateriaisDiv2Div);
  tipoDeMateriaisDiv2.appendChild(tipoDeMateriaisDiv2Input);

  tipoDeMateriais.appendChild(tipoDeMateriaisDiv1);
  tipoDeMateriais.appendChild(tipoDeMateriaisDiv2);


  materiais.appendChild(tipoDeMateriais);

  let arrayTextinhos = ['Coloque aqui o título do texto, vídeo ou outro material que está sendo disponibilizado',
                        'Coloque aqui o nome do(s) autor(es)',
                        'Coloque aqui comentários sobre o material cadastrado, como uma sinopse do material ou a indicação do trecho a ser lido, por exemplo',
                        'Copie aqui o link do material, caso seja externo à plataforma'];
  let arrayTitulos = ['Título do material','Autoria','Comentário','Link'];
  let arrayCampos = ['titulo','autoria','comentario','link']
  let arrayPlaceHolders = ['Preencha o título do material','Preencha a autoria','Preencha o comentário','Preencha link']

  for (var i = 0; i < 4; i++) {
    let p = document.createElement('p');
    p.classList.add('mrgBotSml');
    if(i == 0)
      p.classList.add('espSupPqn');
    p.innerHTML = arrayTitulos[i];
    let textinho = document.createElement('p')
    textinho.classList.add('textinho');
    textinho.innerHTML = arrayTextinhos[i];
    let textarea = document.createElement('textarea');
    textarea.rows = "2";
    textarea.cols = "80";
    textarea.dataset.modulo = modulo;
    textarea.dataset.material = material;
    textarea.dataset.tipo = arrayCampos[i];
    textarea.value = e[arrayCampos[i]];
    textarea.setAttribute("placeholder", arrayPlaceHolders[i]);
    textarea.dataset.placeholder = arrayPlaceHolders[i];
    textarea.addEventListener("blur", onBlur);
    textarea.addEventListener("focus", onFocus);
    textarea.addEventListener('focus', fnTextArea);
    textarea.addEventListener('keyup', fnKeyUpTextArea);



    materiais.appendChild(p);
    materiais.appendChild(textinho);
    materiais.appendChild(textarea);
  }

  let avisoPergunta = document.createElement('div');
  avisoPergunta.classList.add('avisoPergunta');
  avisoPergunta.innerHTML = "Se você considerar importante a ordem em que os materiais devem aparecer, coloque aqui o número da sequência. Se quiser alterar a ordem, é só renumerar os materiais. MAS ATENÇÃO: quando você for para a ETAPA 4, nosso REA vai colocar primeiro o que for REVISÃO DE CONHECIMENTOS, depois o que for MATERIAL BÁSICO e por último o que for APROFUNDANDO O TEMA";

  materiais.appendChild(avisoPergunta);

  return(materiais)
}

function removeMateriaisAtivos(){
    let ativos = document.querySelectorAll('.materiais.ativo');
    for (var i = 0 ; i < ativos.length; i++) {
       ativos[i].classList.remove('ativo');
    }
}

function fnInputSequencia(){
  destroiRodapeMateriais();
  removeMateriaisAtivos();
  this.parentElement.parentElement.parentElement.classList.add('ativo');
  appendaLogoDepois(criaRodapeMateriais(),this.parentElement.parentElement.parentElement);
}

function keyUpInputSequencia(){
  console.log('teste')
  atualizaMaterialObjeto(this.dataset.modulo, this.dataset.material, 'sequencia', this.value);
}

function fnKeyUpTextArea(){
 atualizaMaterialObjeto(this.dataset.modulo, this.dataset.material, this.dataset.tipo, this.value);
}

function fnSpanSequencia(){
  this.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('avisoPergunta')[0].style.opacity = '1';
  this.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('avisoPergunta')[0].style.zIndex = '1000';
  opacity(this.parentElement.parentElement.parentElement.parentElement.getElementsByClassName('avisoPergunta')[0]);
}

function opacity(e){
  setTimeout(function(){
   e.style.opacity = '0';
   e.style.zIndex = "-1000"
 }, 5000);
}

function fnTextArea(){
  removeMateriaisAtivos();
  this.parentElement.classList.add('ativo');
  destroiRodapeMateriais();
  appendaLogoDepois(criaRodapeMateriais(),this.parentElement)
}

function fncBolinhaMateriais(){
  let bolinhaMateriais = this.parentElement.parentElement.getElementsByClassName('bolinha');
  for (var i = 0; i < bolinhaMateriais.length; i++) {
    bolinhaMateriais[i].classList.remove('blnSelecionada');
  }
  atualizaMaterialObjeto(this.dataset.modulo, this.dataset.material, 'tipodematerial', this.dataset.tipo);
  this.classList.add('blnSelecionada');
  destroiRodapeMateriais();
  removeMateriaisAtivos();
  this.parentElement.parentElement.parentElement.parentElement.parentElement.classList.add('ativo');
  appendaLogoDepois(criaRodapeMateriais(), this.parentElement.parentElement.parentElement.parentElement.parentElement)
}

function criaRodapeMateriais(){
  let div = document.createElement('div');
  div.classList.add('rodapeMateriais');
  let divona = document.createElement('div');
  let lixinho = document.createElement('div');
  lixinho.addEventListener('click', fnLixinhoMateriais);
  lixinho.innerHTML = '<i class="fas fa-trash"></i>';
  let adiciona = document.createElement('div');
  adiciona.innerHTML = '<i class="fas fa-plus-circle"></i>';
  adiciona.addEventListener('click', fnAdicionaMateriais);
  divona.appendChild(adiciona);
  divona.appendChild(lixinho);
  div.appendChild(divona);
  return(div);
}

function fnLixinhoMateriais(){
  let material = this.parentElement.parentElement.previousSibling.dataset.material;
  let modulo = this.parentElement.parentElement.previousSibling.dataset.modulo;
  if(document.querySelectorAll('.materiais[data-modulo = ' + modulo + ']').length > 1){
    let caixaPai = this.parentElement.parentElement.previousSibling;
    caixaPai.parentElement.removeChild(caixaPai);
    destroiRodapeMateriais()
    let materiais = document.querySelectorAll('.materiais[data-modulo = ' + modulo + ']');
    let primeiroMateriais = materiais[0];
    primeiroMateriais.classList.add('ativo');
    appendaLogoDepois(criaRodapeMateriais(), primeiroMateriais);
    primeiroMateriais.getElementsByTagName('textarea')[0].focus();
    removeMaterialNoModulo(material, modulo);
    atualizaBanco();
  }
}

function fnAdicionaMaterialNoObjeto(modulo, material){
  aluno.modulos[modulo].materiais[material] = new Material;
  atualizaBanco();
}

function fnAdicionaMateriais(){
  let caixaPai = this.parentElement.parentElement.previousSibling;
  let material = idRandom();
  let modulo = this.parentElement.parentElement.parentElement.dataset.modulo;
  let materiais = criaMateriais(new Material, modulo, material, true);
  fnAdicionaMaterialNoObjeto(modulo, material);
  appendaLogoDepois(materiais, caixaPai);
  materiais.getElementsByTagName('textarea')[0].focus();
  atualizaBanco();
}

function destroiRodapeMateriais(){
  let rodape = document.getElementsByClassName('rodapeMateriais');
  for (var i = 0; i < rodape.length; i++) {
    rodape[i].parentElement.removeChild(rodape[i])
  }
}
