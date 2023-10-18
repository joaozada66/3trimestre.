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

const instrumento = listaDeTeclas[contador].classList [1];
  const idAudio = `#som_ ${instrumento}`;
  console.log(instrumento);
  listaDeTeclas[contador].onclick = function () {
    tocaSom('#som_tecla_Splash');
    tocaSom (idAudio)
  }