
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


const btncripto = document.querySelector("#btn-cripto");
const btndescripto = document.querySelector("#btn-descripto");



function entrada_palavra() {
    const palavra = (document.querySelector("#input-texto")).value;

    return palavra;
}

function codificar() {

    var cripto = entrada_palavra();
    cripto = cripto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById("msg").value = cripto;


}


function descodificar() {
    var descripto = entrada_palavra();
    descripto = descripto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById("msg").value = descripto;

}



btncripto.addEventListener('click', codificar);
btndescripto.addEventListener('click', descodificar);

//Copiar

document.getElementById("btn-copy").addEventListener('click', function () {
    document.getElementById("msg").select();
    /*document.execCommand("copy");*/
    navigator.clipboard.writeText(msg.value);
    msg.value = ""
});