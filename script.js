
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/

//Fazer a criptografia: Criar a função 
//Ligar a função ao botão correspondente no HTML 
//Desenvolver a lógica da criptografia

var textoDigitado = document.querySelector("#input-texto");
console.log(textoDigitado);
var textoCriptografado = "";
textoDigitado.focus();


function criptografar(){

    var textoCriptografado = textoDigitado.value.replace(/a/g, "ai").replace(/e/g, "enter")
    .replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    var criptografiaPronta = document.querySelector("#msg");
    criptografiaPronta.value = textoCriptografado;
    textoDigitado.value = "";
    return textoCriptografado;
    
};

var botaoCriptografar = document.querySelector("#btn-cripto");
botaoCriptografar.onclick = criptografar;

console.log(textoCriptografado);
