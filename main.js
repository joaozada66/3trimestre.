function tocaSomPom(){
     document.querySelector('#som_tecla_pom').play();
document.querySelector('.tecla_pom').onclick = tocaSomPom;}


function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
document.querySelector('.tecla_clap').onclick = tocaSomClap;}

function tocaSomTim(){
    document.querySelector('#som_tecla_tim').play();
document.querySelector('.tecla_tim').onclick = tocaSomTim;}

function tocaSomPuff(){
    document.querySelector('#som_tecla_puff').play();
document.querySelector('.tecla_Puff').onclick = tocaSomPuff;}

function tocaSomSplash(){
    document.querySelector('#som_tecla_splash').play();
document.querySelector('.tecla_Splash').onclick = tocaSomSplash;}

function tocaSomToim(){
    document.querySelector('#som_tecla_toim').play();
document.querySelector('.tecla_Toim').onclick = tocaSomToim;}

function tocaSomPsh(){
    document.querySelector('#som_tecla_psh').play();
document.querySelector('.tecla_Psh').onclick = tocaSomPsh;}

function tocaSomTic(){
    document.querySelector('#som_tecla_tic').play();
document.querySelector('.tecla_Tic').onclick = tocaSomTic;}

function tocaSomTom(){
    document.querySelector('#som_tecla_tom').play();
document.querySelector('.tecla_Tom').onclick = tocaSomTom;}

const listaDeTeclas = document.querySelectorA11('.tecla');

let contador = 0;
  listaDeTeclas[0].onclick = tocaSomPom;

  while(contador <listaDeTeclas.length){
       listaDReTeclas[contador].onclick = tocaSomPom;
      contador= contador + 1;
  }