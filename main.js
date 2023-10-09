function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorA11('.tecla');

let contador = 0;
//Estrutura de repetição - enquanto
 while(contador <listaDeTeclas.leigth){
      listaDeTeclas[contador].onclick = function(){
tocaSom('#som_tecla_splash');
      };
      contador = contador + 1;
    }