/*Variaveis*/
var etanol;
var gasolina;
/*Função calculo*/
function calcular() {
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="etanol.png"; 
    }else{  
        document.getElementById("status").src="gasolina.png"; 
    }
}
/*Função para resetar imagem com o botão limpar*/
function resetar() {
    document.getElementById("status").src="neutro.png"; 
}