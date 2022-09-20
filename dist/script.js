alert("Olá, Estou Funcinado")
document.getElementById("intro").innerHTML="Vejá os exemplos";
document.write("Oi estou usando document.write");
window.alert("Estou utilizando o comando window");
console.log("Está mensagem irá aparecer no console");

var x=10;
var y=9;
var total=x + y;
alert(total);

var nome="Bianca";
var sobrenome=" de Oliveira Lima";
var nomecompleto=nome + sobrenome;
alert(nomecompleto);

var hora=12;
if (hora<12){
    console.log("Bom dia");
}else if(hora<18){
    console.log("Boa tarde");
}else if(hora<=23){
    console.log("Boa noite");
}

var hora=12;
if(hora==12 || hora ==18){
    console.log("Você está na hora do rush")
}