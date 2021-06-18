

function clicou(){
    document.getElementById("agradecimento").innerHTML= "<b>Obrigado por clicar</b>";
   // console.log(document.getElementById("agradecimento"));
   // alert("obrigado por clicar");
};

function redirecionar(){
    window.open("https://web.digitalinnovation.one/home");//abre o site numa nova janela
    window.location.href="https://web.digitalinnovation.one/home";// abre o site na mesma janela
};
function trocar(elemento){
    //alert("Trocar texto");
    elemento.innerHTML = "obrigado por passar o mouse";
    //document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
};
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
};

function load(){
    alert("Página Carregada")
};
function change(elemento){
    console.log(elemento.value);
};

/* FUNÇÃO SOMA//
function soma(n1,n2){
    return n1+n2;
}
alert(soma(5,10));
*/



/*FUNÇÃO USANDO VARIAVEL GLOBAL OU LOCAL
var validar = 0
function validaIdade(idade){
  //  var validar
    if(idade>=18){
        validar= true;
    }else{
        validar= false;
    }
    return validar;
};
var idade= prompt("Qual sua idade?");
//console.log(validaIdade(idade));
console.log(validar)
*/

/* function setReplace(frase,nome,nome_nome){
    return frase.replace(nome,nome_nome);
}
alert(setReplace("vai Japão","Japão","Brasil")); */




/* OBJETO DATE
var d = new Date();
//alert(d);
alert(d.getDate());
alert(d.getMonth()+1);
alert(d.getMinutes());
alert(d.getHours());
alert(d.getFullYear());
alert(d.getDay());  ///pega o dia da semana
*/

/* ESTRUTURA FOR
var count;
for(count=0;count<=5;count++){
    alert(count);
};
*/

/* ESTRUTURA WHILE
var count=0;
while (count <=5){
console.log(count);
count++;
};
*/

/* ESTRUTURA IF ELSE
var idade= prompt("Qual é a sua idade");
//var idade=18;
if(idade>=18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

//USANDO DICIONARIO
/* var frutas = [{nome:"maça",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
alert(frutas[0].nome);  */
/* var fruta = {nome:"maça",cor:"vermelha"};
console.log(fruta);
console.log(fruta.nome);
alert(fruta.nome); */

//USANDO LISTAS
/*var lista =["maça","pera","laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.join("-"));*/
//alert(lista[3]);

// CONCATENAÇÃO E REPLACE,UPPERCASE
//var nome = "Sandoval Bezerra";
//var idade = 51;
//var idade2 =-22;
//var frase="Japão é o melhor time do Mundo";
///alert(frase.replace("Japão","Brasil"));
//alert(nome+ " Tem "+idade+" anos");
//alert(idade+idade2);
/* console.log(nome)
console.log(frase.replace("Japão","Brasil"));
console.log(frase.toUpperCase());
 */