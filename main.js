function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorA11('.tecla');

//Estrutura de repetição - enquanto
 for(let contador = 0;contador <listaDeTeclas.length;contador++){
  const tecla = listaDeTeclas[contador];
  const instrumento = teclas.classList[1];
  const idAudio = `#som_${instrumento}`;
  

  tecla.onclick = function(){
    tocaSom(idAudio);
  };
 
}