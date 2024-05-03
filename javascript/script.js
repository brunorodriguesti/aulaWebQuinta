function validarNome(){
  var nome = document.getElementById("nome").value;
  var letras = /^[A-Za-z]+$/;  //expressão regular - Regex
  if(nome.match(letras)){
    //alert(nome);
    document.getElementById("texto").innerHTML="Nome ok";  
  }else{
    document.getElementById("nome").value="";
    document.getElementById("nome").focus();
    //alert("Favor digitar somente letras");
    document.getElementById("texto").innerHTML="Favor digitar somente letras";  
  }
  
  return false;
}


function calcularImc(){
  //var peso = parseFloat(document.formulario.peso.value);
  //var altura = parseFloat(document.formulario.altura.value);
  var peso = document.getElementById("peso").value;
  var altura = document.getElementById("altura").value;

  if(peso == "" || altura == ""){
    document.getElementById("peso").focus();
    alert("Favor preencher os campos");
    return false;
  }
  var resultado = peso/(altura*altura);
  console.log("peso " + peso);
  console.log("altura " + altura);
  console.log("resultado " + resultado);
  alert("Seu IMC é: " + resultado.toFixed(2));
  return false;
}









function habilitarCampo(opcao){ 
    if(opcao){
      document.formulario.nome.disabled = false;
    }else{
      document.formulario.nome.value = "";        
      document.formulario.nome.disabled = true;
   }
}




function mostrarCheio(imagem){
    imagem.src="carrinho_cheio.png";
}

function mostarVazio(imagem){
    imagem.src="carrinho_vazio.png";
}

function maiuscula(texto){ 
    texto.value = texto.value.toUpperCase();
  }
  
  