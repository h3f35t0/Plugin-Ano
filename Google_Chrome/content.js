console.log("oi sou o plung do Minitério do Esporte para preenche o campo ano de exercução");
var tamanho = document.getElementById("ano").options.length;
var anosExecucao = document.getElementById("ano");
var data = new Date();
const anoAtual = data.getFullYear();
var anoUltimo = parseInt(anosExecucao.options[tamanho-1].value);

console.log("Tamanho do select ano de exercução: " + tamanho);
console.log("Valor do ultimo no select ano de exercução:" + anoUltimo);
console.log("Valor do ano atual: " + anoAtual);
console.log(typeof(anosExecucao));
console.log(typeof(anoUltimo));

for (var ano = (anoUltimo + 1); ano <= (anoAtual + 5); ano++) {
   console.log("Ano para se colocado no select ano de exercução " + ano);
    var option = document.createElement("option");
    option.text = ano;
    option.value = ano;
    anosExecucao.add(option);
 }


// option.text = "Kiwi";
// x.add(option);


// anosExecucao = document.getElementById("ano");
// console.log(anosExecucao);