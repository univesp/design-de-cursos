let headerCont = document.getElementById('header-cont');
let headerAluno = document.getElementById('header-aluno');
let headerEmail = document.getElementById('header-email');
let caixaReiniciaSenha = document.getElementById('caixaReiniciaSenha');
let cadastrar = document.getElementById('cadastrar');
let btnCadVoltar = document.getElementById('btnCadVoltar');
let btnCadRA = document.getElementById('btnCadRA');
let caixaDecisao = document.getElementById('caixaDecisao');
let btnRedirectReiniciaSenha = document.getElementById('btnRedirectReiniciaSenha');
let btnDonwloadModelo = document.getElementById('downloadModelo');
let botaoImprimir = document.querySelectorAll('#caixaDoBotaoImprimir > a')[0];
let caixaSelect = document.getElementById('caixaSelect');
let btnCarrossel = document.querySelectorAll('.carousel > a');
let tela1 = document.getElementById('tela1');
let objetivosGerais = document.getElementById('objetivos');
let caixaGravar1 = document.getElementById('caixaGravar1');
let caixaGravar2 = document.getElementById('caixaGravar2');
let caixaGravar3 = document.getElementById('caixaGravar3');
let etapa1 = document.getElementById('etapa1');
let etapa2 = document.getElementById('etapa2');
let etapa3 = document.getElementById('etapa3');
let etapa4 = document.getElementById('etapa4');
let faixa1 = document.getElementsByClassName('faixa')[0];
let faixa2 = document.getElementsByClassName('faixa')[1];
let faixa3 = document.getElementsByClassName('faixa')[2];
let faixa4 = document.getElementsByClassName('faixa')[3];
let headerTotal = document.getElementById('header-fixo');
let header1 = document.querySelectorAll('#header-fixo > div')[0];
let header2 = document.querySelectorAll('#header-fixo > div')[1];
let header3 = document.querySelectorAll('#header-fixo > div')[2];
let header4 = document.querySelectorAll('#header-fixo > div')[3];
let select = document.getElementById('select');

let arrayEtapas = []
arrayEtapas['etapa1'] = false;
arrayEtapas['etapa2'] = false;
arrayEtapas['etapa3'] = false;
arrayEtapas['etapa4'] = false;


botaoImprimir.dataset.pdf = "";
btnDonwloadModelo.addEventListener('click', fnBtnDownloadModelo);
header1.addEventListener('click', fnHeader1);
header2.addEventListener('click', fnHeader2);
header3.addEventListener('click', fnHeader3);
header4.addEventListener('click', fnHeader4);
botaoImprimir.addEventListener('click', fnBtnDownload);
btnCadRA.addEventListener('click', fnBtnCadRA);
btnCadVoltar.addEventListener('click', fnBtnCadVoltar);

for (var i = 0; i < btnCarrossel.length; i++) {
  btnCarrossel[i].addEventListener('click', carrossel);
}

$('#carousel1').carousel('pause');
$('#carousel2').carousel('pause');
document.getElementById('integrantes').addEventListener('keyup', function() {
  atualizaCamposIndividuais(this.id, this.value)
});
document.getElementById('tema').addEventListener('keyup', function() {
  atualizaCamposIndividuais(this.id, this.value)
});
document.getElementById('publico').addEventListener('keyup', function() {
  atualizaCamposIndividuais(this.id, this.value)
});
document.getElementById('justificativa').addEventListener('keyup', function() {
  atualizaCamposIndividuais(this.id, this.value)
});
document.getElementById('objetivos').addEventListener('keyup', function() {
  atualizaCamposIndividuais(this.id, this.value)
});


function fnBtnCadVoltar(){
  this.parentElement.style.display = 'none';
  caixaDecisao.style.display = 'flex'
}
function fnBtnCadRA(){
  this.parentElement.style.display = 'none';
  caixaDecisao.style.display = 'flex'
}
function fnBtnDownload() {
  let a = document.createElement('a');
  a.setAttribute("download", this.dataset.pdf);
  a.click();
}
function fnBtnDownloadModelo() {
  let b = document.createElement('a');
  b.setAttribute("href", 'https://apps.univesp.br/design-de-cursos/assets/Modelo_REA_Design_de_Cursos.pdf');
  b.setAttribute("download", 'modelo_rea_design_de_cursos.pdf');
  b.click();
}
function falseiaHeader() {
  header1.dataset.atual = "false";
  header2.dataset.atual = "false";
  header3.dataset.atual = "false";
  header4.dataset.atual = "false";
}
function fnHeader1() {
  if (arrayEtapas[this.dataset.id] && this.dataset.atual != 'true') {
    falseiaHeader();
    this.dataset.atual = "true"
    escondeTudo();
    revelaBlock([etapa1, faixa1]);
    revelaFlex([caixaGravar1]);
    arrayEtapas['etapa3'] = true;
    destroiEtapa2();
    header1.dataset.usado = 'ativo';
    desativaHeader();
    ativaHeader(header1);
    destroiSelect();
    destroiCaixaSelect();
    destroiMateriais();
    faixa1.scrollIntoView();
    atualizaBanco();
  }
}
function fnHeader2() {
  if (arrayEtapas[this.dataset.id] && this.dataset.atual != 'true') {
    falseiaHeader();
    this.dataset.atual = "true"
    escondeTudo();
    revelaBlock([etapa2, faixa2]);
    revelaFlex([caixaGravar2]);
    arrayEtapas['etapa3'] = true;
    constroiEtapa2();
    organizaEtapa2();
    header3.dataset.usado = 'ativo';
    desativaHeader();
    ativaHeader(header2);
    destroiSelect()
    destroiCaixaSelect();
    destroiMateriais();
    objetivosGerais.value = aluno.objetivos;
    faixa2.scrollIntoView();
    atualizaBanco();
  }
}
function fnHeader3() {
  if (arrayEtapas[this.dataset.id] && this.dataset.atual != 'true') {
    falseiaHeader();
    this.dataset.atual = "true"
    escondeTudo();
    revelaFlex([caixaGravar3]);
    revelaBlock([etapa3, faixa3]);
    arrayEtapas['etapa4'] = true;
    destroiEtapa2();
    header4.dataset.usado = 'ativo';
    desativaHeader();
    ativaHeader(header3);
    constroiSelect();
    let dataModulo = select.value;
    constroiCaixaSelect();
    fnConstroiMateriais();
    // document.querySelectorAll('.materiais[data-modulo = ' + dataModulo + ']')[0].classList.add('ativo');
    // document.querySelectorAll('.materiais[data-modulo = ' + dataModulo + ']')[0].getElementsByTagName('textarea')[0].focus();
    // document.querySelectorAll('#caixaSelect')[0].getElementsByTagName('textarea')[0].focus();
    esconde(document.querySelectorAll('.materiaisDoModulo'));
    // revelaBlock([document.querySelectorAll('.materiaisDoModulo[data-modulo = ' + dataModulo + ']')[0]]);
    esconde(document.querySelectorAll('.caixaSelectModulo'));
    // revelaBlock([document.querySelectorAll('.caixaSelectModulo[data-modulo = ' + dataModulo + ']')[0]]);
    faixa3.scrollIntoView();
    atualizaBanco();
  }
}
function fnHeader4() {
  if (arrayEtapas[this.dataset.id] && this.dataset.atual != 'true') {
    this.dataset.atual = "true"
    $.ajax({
      type: "POST",
      data: {
        html: criacaoHTMLImpressao()
      },
      url: "../_testes/testes-php/design-de-cursos/impressao.php",
      async: false,
      success: function(data) {
        let iframe = document.getElementsByTagName('iframe')[0]
        iframe.src = "https://apps.univesp.br/_testes/testes-php/design-de-cursos/" + data + "#zoom=100";
        botaoImprimir.href = "https://apps.univesp.br/_testes/testes-php/design-de-cursos/" + data;
        falseiaHeader();
        escondeTudo();
        revelaBlock([etapa4, faixa4]);
        arrayEtapas['etapa4'] = true;
        destroiEtapa2();
        header4.dataset.usado = 'ativo';
        desativaHeader();
        ativaHeader(header4);
        destroiSelect();
        destroiCaixaSelect();
        destroiMateriais();
        faixa4.scrollIntoView();
      }
    })
    atualizaBanco();
  }
}
function destroiSelect() {
  select.innerHTML = "";
}
function fnConstroiMateriais() {

  let caixaDosMateriais = document.getElementsByClassName('caixaDosMateriais')[0]
  for (let x in aluno.modulos) {
    let materiaisDoModulo = document.createElement('div');
    materiaisDoModulo.classList.add('materiaisDoModulo');
    materiaisDoModulo.dataset.modulo = x;

    let arrayMateriaisDoModulo = [];
    for (let y in aluno.modulos[x].materiais) {
      let material = criaMateriais(aluno.modulos[x].materiais[y], x, y, false);
      arrayMateriaisDoModulo.push(material);
      // materiaisDoModulo.appendChild(material);
    }

    arrayMateriaisDoModulo.sort(function(a, b) {
      if (a.dataset.tipodematerial === b.dataset.tipodematerial) {
        if (a.dataset.sequencia > b.dataset.sequencia) {
          return 1;
        }
        if (a.dataset.sequencia < b.dataset.sequencia) {
          return -1;
        }
        return 0;
      }
      else{
        if (a.dataset.tipodematerial > b.dataset.tipodematerial) {
          return 1;
        }
        if (a.dataset.tipodematerial < b.dataset.tipodematerial) {
          return -1;
        }
        return 0;
      }
    });

    for (var i = 0; i < arrayMateriaisDoModulo.length; i++) {
      materiaisDoModulo.appendChild(arrayMateriaisDoModulo[i]);
    }

    let forum = criaForum(x);

    materiaisDoModulo.appendChild(forum);

    caixaDosMateriais.appendChild(materiaisDoModulo)
  }
}
function destroiMateriais() {
  document.querySelectorAll('.caixaDosMateriais')[0].innerHTML = "";
}
function constroiSelect() {
  let arrayModulos = [];
  let arrayNomes = [];
  for (let x in aluno.modulos) {
    arrayModulos.push([aluno.modulos[x], x]);
  }

  arrayModulos.sort(function(a, b) {
    if (a[0].sequencia > b[0].sequencia) {
      return 1;
    }
    if (a[0].sequencia < b[0].sequencia) {
      return -1;
    }
    return 0;
  });

  let option2 = document.createElement('option');
  option2.value = 'padrao';
  let t2 = document.createTextNode('Selecione o módulo');
  option2.appendChild(t2);
  option2.setAttribute('selected', 'selected');
  select.appendChild(option2);

  for (let x in arrayModulos) {
    let option = document.createElement('option');
    option.value = arrayModulos[x][1];
    let t = document.createTextNode(arrayModulos[x][0].nome);
    option.appendChild(t);
    select.appendChild(option);
  }

  select.value = "padrao";
  select.addEventListener('change', fnSelect);
}
function fnSelect() {
  // console.log('entrei aqui: ', this.value);
  if (this.value != 'padrao') {
    let todasAsCaixasSelect = document.querySelectorAll('.caixaSelectModulo');
    let caixaSelect = document.querySelectorAll('.caixaSelectModulo[data-modulo="' + this.value + '"]');
    let todosOsModulos = document.querySelectorAll('.materiaisDoModulo')
    let moduloEmQuestao = document.querySelectorAll('.materiaisDoModulo[data-modulo="' + this.value + '"]');
    esconde(todosOsModulos);
    revelaBlock(moduloEmQuestao);
    esconde(todasAsCaixasSelect);
    revelaBlock(caixaSelect);
    moduloEmQuestao[0].querySelectorAll('textarea')[0].focus();
    caixaSelect[0].querySelectorAll('textarea')[0].focus();
  }
}
function constroiCaixaSelect() {
  for (let x in aluno.modulos) {
    let caixa = criaCaixaSelectModulo(x)
    caixaSelect.appendChild(caixa);
  }
}
function destroiCaixaSelect() {
  caixaSelect.innerHTML = "";
}
function constroiEtapa2() {
  for (let x in aluno.modulos) {
    let modulo = criaModulo(x, aluno.modulos[x], true);
    etapa2.appendChild(modulo);
  }
}
function organizaEtapa2() {
  let modulos = document.getElementsByClassName('modulo');
  let arrModulos = [];

  for (var i = 0; i < modulos.length; i++) {
    arrModulos.push(modulos[i]);
  }

  arrModulos.sort(function(a, b) {
    if (a.dataset.sequencia > b.dataset.sequencia) {
      return 1;
    }
    if (a.dataset.sequencia < b.dataset.sequencia) {
      return -1;
    }
    return 0;
  });

  for (var j = 0; j < arrModulos.length; j++) {
    etapa2.appendChild(arrModulos[j]);
  }


  document.getElementsByClassName('modulo')[0].classList.add('modAtivo');
  appendaLogoDepois(criaRodapeModulo(), document.getElementsByClassName('modAtivo')[0])
}
function destroiEtapa2() {
  destroiRodapeModulo();
  let modulos = document.getElementsByClassName('modulo');
  let tamanho = modulos.length;
  for (var i = 0; i < tamanho; i++) {
    etapa2.removeChild(modulos[0]);
  }
}
function carrossel() {

  let inner = document.querySelectorAll('#' + this.parentElement.id + ' .carousel-item');
  let id = this.parentElement.id
  let resto = inner.length;
  let vez = 0
  for (var i = 0; i < inner.length; i++) {
    if (inner[i].classList.contains('active') && this.dataset.slide == 'next') {
      vez = (i + 1) % resto;
      break;
    }
    if (inner[i].classList.contains('active') && this.dataset.slide == 'prev') {
      if (i != 0) {
        vez = (Math.abs(i - 1)) % resto;
      } else {
        vez = resto - 1;
      }

      break;
    }
  }
  let bolinhas = document.querySelectorAll('.' + id + ' > div > span');
  for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].classList.remove('ativo');
  }
  bolinhas[vez].classList.add('ativo');
}
function fncBolinhaMateriais() {
  let bolinhaMateriais = this.parentElement.parentElement.getElementsByClassName('bolinha');
  for (var i = 0; i < bolinhaMateriais.length; i++) {
    bolinhaMateriais[i].classList.remove('blnSelecionada');
  }
  this.classList.add('blnSelecionada');
}
function fnBolinhasForum() {
  let bolinhas = this.parentElement.parentElement.getElementsByClassName('bolinha');
  for (var i = 0; i < bolinhas.length; i++) {
    bolinhas[i].classList.remove('blnSelecionada');
  }
  this.classList.add('blnSelecionada');
  atualizaArray(this.dataset.modulo, this.dataset.tipo, this.dataset.valor);
}