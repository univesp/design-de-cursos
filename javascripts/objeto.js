let aluno = '';

function alimentaAluno(e) {
  // console.log('e: ', e);
  json = JSON.parse(e);
  // console.log('json: ', json);
  aluno = json;
  // console.log('aluno: ', aluno)
  alimentaEtapa1();
}

function alimentaEtapa1() {
  document.getElementById('integrantes').value = aluno.integrantes;
  document.getElementById('tema').value = aluno.tema;
  document.getElementById('publico').value = aluno.publico;
  document.getElementById('justificativa').value = aluno.justificativa;
  headerCont.style.display = 'flex';
  headerAluno.innerHTML = aluno.nome;
  headerEmail.innerHTML = headerEmail.innerHTML + aluno.email;
};

function calculaCargaHoraria() {
  for (let x in aluno.modulos) {
    let total = 0;
  }
}

function atualizaBanco() {
  // console.log(JSON.stringify(aluno));
  $.ajax({
    type: "POST",
    data: {
      operacao: 'alteracao',
      json: JSON.stringify(aluno)
    },
    url: "../_testes/testes-php/design-de-cursos/mongo.php",
    async: false,
    success: function(data) {}
  })
}

function atualizaArray(modulo, tipoInput, value) {
  aluno.modulos[modulo][tipoInput] = value;
}

function atualizaMaterialObjeto(modulo, material, campo, valor) {
  aluno.modulos[modulo].materiais[material][campo] = valor;
  // console.log(aluno);
}

function atualizaCamposIndividuais(campo, e) {
  aluno[campo] = e;
  // console.log(aluno);
}

function adicionaModulo(e, obj) {
  aluno.modulos[e] = obj;
  // console.log(JSON.stringify(aluno));
  // console.log(aluno);
}

function removeModulo(e) {
  delete aluno.modulos[e];
  // console.log(aluno);
}

function removeMaterialNoModulo(material, modulo) {
  delete aluno.modulos[modulo].materiais[material];
}

function Modulo() {
  this.nome = "";
  this.placeholdernome = "Preencha o nome";
  this.sequencia = "";
  this.placeholdersequencia = "1";
  this.carga = "";
  this.placeholdercarga = "";
  this.objetivos = "";
  this.placeholderobjetivos = "Preencha os objetivos";
  this.apresentacao = "";
  this.placeholderapresentacao = "";
  this.situacaoproblema = "";
  this.placeholdersituacaoproblema = "";
  this.forum = "2";
  this.atividadeavaliativa = "2";
  this.encerramento = "";
  this.placeholderencerramento = "";
  let material = idRandom()
  this.materiais = {
    material: new Material
  };
}

function Material() {
  this.tipodematerial = "1";
  this.titulo = "";
  this.autoria = "";
  this.comentario = "";
  this.link = "";
  this.sequencia = "1";
}

function cargaHorariaTotal() {
  let soma = 0;

  for (let x in aluno.modulos) {
    soma += fromTime(aluno.modulos[x].carga);
  }

  return (toTime(soma));
  //  let txtFirstNumberValue = document.getElementById('txt1').value;
  //  let txtSecondNumberValue = document.getElementById('txt2').value;
  //  let result = fromTime(txtFirstNumberValue) + fromTime(txtSecondNumberValue);
  //  if (!isNaN(result)) {
  //      document.getElementById('txt3').value = toTime(result);
  //  }
  // return('15')
}
