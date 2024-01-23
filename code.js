

function calcular() {
    
    let nome = document.getElementById('nome').value;
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;
    let resultado = document.getElementById('resultado');

     

    if (nome !== '' && altura !== '' && peso !== '') {
        
        let calcularImc = (peso / (altura * altura)).toFixed(1);
        
        let classificacao = '';
     if (calcularImc < 18.5) {
         classificacao = 'abaixo do peso';
     } else if (calcularImc < 25) {
         classificacao = 'esta dentro dos padrões. Parabéns!';
     } else if (calcularImc < 30) {
         classificacao = 'levemente acima do peso';
     } else if (calcularImc < 35) {
         classificacao = 'com obesidade grau I.';
     } else if (calcularImc < 40) {
         classificacao = 'com obesidade grau II.';
     } else {
         classificacao = 'com obesidade grau III. Cuidado!!';
     }
     
     resultado.textContent = `${nome} seu IMC é ${calcularImc} e você esta ${classificacao}`;
         
    }else{
     resultado.textContent = 'Preencha todos os campos!';
 }
 }