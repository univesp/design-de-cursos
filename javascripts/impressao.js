function criacaoHTMLImpressao(){
  let texto = "";
  let divQueOInteriorVaiVirarTexto = document.createElement('div');
  let divPai = document.createElement('div');

  // Projeto
  let projeto = criaP('<b>Projeto ' + naoPreenchido(aluno.tema) + '</b>');
  fonteMaior(projeto);
  marginBottomMaior(projeto);
  divPai.appendChild(projeto);

  let divInicial = document.createElement('div');
  marginLeft(divInicial);
  let p = '';
  // Nome do aluno
  p = criaSpan('por ' + naoPreenchido(aluno.integrantes), false);
  divInicial.appendChild(p);

  // Carga Horária:
  p = criaSpan('<b>Carga horária:</b> ' + cargaHorariaTotal(), false);
  divInicial.appendChild(p);

  // Público Alvo
  p = criaSpan('<b>Público alvo:</b> ' + naoPreenchido(aluno.publico), false);
  divInicial.appendChild(p);

  //Justificativa
  p = criaSpan('<b>Justificativa:</b> ' + naoPreenchido(aluno.justificativa), false);
  divInicial.appendChild(p);

  // Objetivos Gerais
  p = criaSpan('<b>Objetivos gerais:</b> ' + naoPreenchido(aluno.objetivos), false);
  marginBottomMaior(p);
  divInicial.appendChild(p);


  divPai.appendChild(divInicial);



  let arrayModulos = []
  for (let x in aluno.modulos) {
    arrayModulos.push(aluno.modulos[x]);
  }

  arrayModulos.sort(function (a, b) {
    if (a.sequencia > b.sequencia) {
      return 1;
    }
    if (a.sequencia < b.sequencia) {
      return -1;
    }
    return 0;
  });


  let k = 1;
  for (let i in arrayModulos) {
    let pModulo = criaP('<b>Módulo ' + k + ": " +  naoPreenchido(arrayModulos[i].nome) +'</b>');
    marginBottom(pModulo);
  	divPai.appendChild(pModulo);
    // Carga Horária
    let divModulo1 = document.createElement('div');
    marginLeft(divModulo1);

    p = criaSpan('<b>Carga horária:</b> ' + naoPreenchido(arrayModulos[i].carga), false);
    divModulo1.appendChild(p);

    // Objetivos de aprendizagem
    p = criaSpan('<b>Objetivos de aprendizagem:</b> ' + naoPreenchido(arrayModulos[i].objetivos), false);
    divModulo1.appendChild(p);

    // Apresentação
    p = criaSpan('<b>Apresentação:</b> ' + naoPreenchido(arrayModulos[i].apresentacao), false);
    divModulo1.appendChild(p);

    // Situação Problema
    p = criaSpan('<b>Situação problema:</b> ' + naoPreenchido(arrayModulos[i].situacaoproblema), false);
    marginBottom(p);
    divModulo1.appendChild(p);

    divPai.appendChild(divModulo1);



    divPai.appendChild(divModulo1);


    let materiais = criaP("<b>Materiais:</b>");
    marginLeft(materiais);
    marginBottom(materiais);
    divPai.appendChild(materiais);

    let divMateriais = document.createElement('div');
    marginLeftMaior(divMateriais);
    // let l = 1;

    let arrayMateriais = []
    for (let x in arrayModulos[i].materiais) {
      arrayMateriais.push(arrayModulos[i].materiais[x]);
    }

    arrayMateriais.sort(function (a, b) {
      if (a.tipodematerial === b.tipodematerial) {
        if (a.sequencia > b.sequencia) {
          return 1;
        }
        if (a.sequencia < b.sequencia) {
          return -1;
        }
        return 0;
      }
      else{
        if (a.tipodematerial > b.tipodematerial) {
          return 1;
        }
        if (a.tipodematerial < b.tipodematerial) {
          return -1;
        }
        return 0;
      }
    });


  	for(let j in arrayMateriais){
  	  divMateriais.appendChild(criaP('<b>' + '• '  + naoPreenchido(tipoDeMaterial(arrayMateriais[j].tipodematerial)) + ':</b> ' +
  	  	                        naoPreenchido(arrayMateriais[j].titulo) + ' | ' + naoPreenchido(arrayMateriais[j].autoria) + ' - ' +
  	  	                        naoPreenchido(arrayMateriais[j].link) + ' | comentário: ' + naoPreenchido(arrayMateriais[j].comentario)));
  	  // l++
  	}



    marginBottom(divMateriais);
    divPai.appendChild(divMateriais);

    let divFinalModulo = document.createElement('div');
    marginLeft(divFinalModulo);

  	divFinalModulo.appendChild(criaSpan('<b>Fórum temático: </b>' + simNao(arrayModulos[i].forum)));
  	divFinalModulo.appendChild(criaSpan('<b>Atividade avaliativa: </b>' + simNao(arrayModulos[i].atividadeavaliativa)));
  	divFinalModulo.appendChild(criaSpan('<b>Encerramento: </b>' + naoPreenchido(arrayModulos[i].encerramento)));
    marginBottomMaior(divFinalModulo);
    divPai.appendChild(divFinalModulo)

  	k++;
  }



  divQueOInteriorVaiVirarTexto.appendChild(divPai);
  texto = divQueOInteriorVaiVirarTexto.innerHTML;
  return(texto)
}

function simNao(e){
  let tipo = '';
  if(e == "1"){tipo = "Sim"}
  else if(e == "2"){tipo = "Não"}
  return(tipo);
}

function fonteMaior(e){
  e.style.fontSize = "20px";
}

function tipoDeMaterial(e){
  let tipo = ""
  if(e == "1"){tipo = "Revisão de conhecimentos"}
  else if (e == "2") {tipo = "Material básico"}
  else if (e == "3") {tipo = "Aprofundando o tema"}
  return(tipo)
}

function paddingLeft(e){
  e.style.paddingLeft = "50px"
}

function marginLeft(e){
  e.style.marginLeft = '20px';
}

function marginLeftMaior(e){
 e.style.marginLeft = '40px';
}

function marginBottom(e){
  e.style.marginBottom = '10px';
}

function marginBottomMaior(e){
  e.style.marginBottom = '20px';
}

function marginTop(e){
  e.style.marginTop = '10px';
}

function marginTopMaior(e){
  e.style.marginTop = '20px';
}

function criaP(e){
  let p = document.createElement('div');
  p.innerHTML = e;
  return(p);
}

function criaSpan(e, negrito){
  let span = document.createElement('div');
  if(negrito)
  	span.innerHTML ='<b>' + e + '</b>';
  else
  	span.innerHTML = e;
  return(span);
}

function naoPreenchido(e){
  if(e == ""){
    return(" [Não preenchido] ");
  }
  else {
    return(e);
  }
}
