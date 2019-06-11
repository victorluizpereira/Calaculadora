function concat(entrada){
	var concat = document.painel.input;
	if(concat.value == "ERRO"){
		concat.value = "";
		concat.style.color = "white";
	}
	concat.value += entrada;
}
function limpar(){
	document.painel.input.value = "";
	document.painel.input.style.color = "white";
}
function limparultim(){
	document.painel.input.innerHTML += "<>"; // ver tag que dá backspace
}
function calcular(){
	var aux = document.painel.input;
	try{
		return eval(aux.value);
	}catch{
		return null;
	}
}
function resultado(input){
	var aux = document.painel.input;
	if(calcular() != null){
		aux.value = calcular();
	}else{
		aux.value = "ERRO";
		document.painel.input.style.color = "red";//achar um jeito de centralizar
	}
}
/*
function ans(){
	if(i > 0 && $("#ans").onclick() == true){
		i--;
		return ansestrais[i];
	}else{
		return null;
	}
}*/