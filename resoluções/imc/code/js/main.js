//Capturou os elementos do HTML que serão utilizados
let alturaInput = document.querySelector('#altura');
let pesoInput = document.querySelector('#peso');
let btnMasc = document.querySelector('#masculino');
let resultadoContainer = document.querySelector('#imc');
let btnIMC = document.querySelector('button');

//Adicionamos evento ao botão quando clicar
btnIMC.addEventListener('click', () => {
   //Converteu as entradas escritas nos inputs
   let altura = parseFloat(alturaInput.value);
   let peso = parseFloat(pesoInput.value);
   //Lógica da questão
   let resultado = peso / (altura ** 2);
   //Arredondamento com 1 casa decimal
   resultado = resultado.toFixed(1);
   //Criamos 2 arrays para representar os valores do IMC Masculino e Feminino
   let imcMasculino = [20.7, 26.4, 27.8, 31.1];
   let imcFeminino = [19.1, 25.8, 27.3, 32.3];
   //Usamos ternário pra verificar se o radio input Masculino estava com atributo 'checked' e atribuímos ao array IMC o array que será utilizado
   let imc = btnMasc.checked ? imcMasculino : imcFeminino;
   //Verificação do resultado para imprimir a condição através do método .value pelo fato do container ser um input, caso fosse um título ou parágrafo, usaríamos o .innerHTML
   if (resultado <= imc[0]) {
      resultadoContainer.value = 'Abaixo do Peso';
   }else {
      if (resultado <= imc[1]) {
         resultadoContainer.value = 'Peso Normal';
      }else {
         if (resultado <= imc[2]) {
            resultadoContainer.value = 'Marginalmente Acima do Peso';
         }else {
            if (resultado <= imc[3]) {
            resultadoContainer.value = 'Acima do Peso Ideal';            
            }else {
               resultadoContainer.value = 'Obeso';                        
            }
         }
      }
   }
   //Segunda alternativa para deixar os testes no IF de forma mais semântica
   // let abaixoPeso = btnMasc.checked ? 20.7 : 19.1;
   // let normalPeso = btnMasc.checked ? 26.4 : 25.8;
   // let acimaPeso = btnMasc.checked ? 27.8 : 27.3;
   // let acimaPesoNormal = btnMasc.checked ? 31.1 : 32.3;

   // if (resultado <= abaixoPeso) {
   //    resultadoContainer.value = 'Abaixo do Peso';
   // }else {
   //    if (resultado <= normalPeso) {
   //       resultadoContainer.value = 'Peso Normal';
   //    }else {
   //       if (resultado <= acimaPeso) {
   //          resultadoContainer.value = 'Marginalmente Acima do Peso';
   //       }else {
   //          if (resultado <= acimaPesoNormal) {
   //          resultadoContainer.value = 'Acima do Peso Ideal';            
   //          }else {
   //             resultadoContainer.value = 'Obeso';                        
   //          }
   //       }
   //    }
   // }
})
