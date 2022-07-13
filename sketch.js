//inimigos
var esquilos, morcegos, piranha1, piranha2, piranha3;
var esquilosGif, morcegosGif, piranhasGif1, piranhasGif2, piranhasGif3;

var guardas;
var guardasGif;

var gatoGif;
var gato;

//pp = personagem principal
var pp;
var ppPara;
var ppGifFrent;
var ppGifTras;
var ppCaver, ppAgua;

//fundos
var base;

var casa, ponte;

var casaImg, casaPonteImg, ponteImg, vilaImg, inicioFloImg, florestaImg, colinaSubImg, colinaDescImg, emBaixoAguaImg;
var entradaCaverImg, cavernaImg, cavernaEscuroImg, arvoreFimImg, finalImg;

var casa, casaPonte, ponte, vila, inicioFlo, floresta, colinaSub, colinaDesc, emBaixoAgua, entradaCaver;
var caverna, cavernaEscuro, arvoreFim, final;

var chaoBase, chaoBaseImg;

var camera;

function preload() {
  
  //pp = createImg("Assets/personagemPrincipal.gif");

  //inimigos
  esquilosGif = loadAnimation("Assets/inimigos/esquilo1.png", "Assets/inimigos/esquilo1.png", "Assets/inimigos/esquilo2.png", "Assets/inimigos/esquilo2.png", "Assets/inimigos/esquilo1.png", "Assets/inimigos/esquilo1.png", "Assets/inimigos/esquilo3.png", "Assets/inimigos/esquilo3.png");
  morcegosGif = loadAnimation("Assets/inimigos/morcegos1.png", "Assets/inimigos/morcegos2.png");
  piranhasGif1 = loadAnimation("Assets/inimigos/PiranhaLaranja1.png", "Assets/inimigos/PiranhaLaranja2.png", "Assets/inimigos/PiranhaLaranja3.png");
  piranhasGif2 = loadAnimation("Assets/inimigos/PiranhaRoxa1.png", "Assets/inimigos/PiranhaRoxa2.png", "Assets/inimigos/PiranhaRoxa3.png");
  piranhasGif3 = loadAnimation("Assets/inimigos/PiranhaVerde1.png", "Assets/inimigos/PiranhaVerde2.png", "Assets/inimigos/PiranhaVerde3.png");
  
  gatoGif = loadAnimation("Assets/gato1.png", "Assets/gato2.png", "Assets/gato1.png", "Assets/gato4.png");
  
  ppPara = loadAnimation("Assets/ppPara.png");
  ppGifFrent = loadAnimation("Assets/pp1.png", "Assets/pp2.png", "Assets/pp1.png", "Assets/pp3.png");
  ppGifTras = loadAnimation("Assets/ppTras1.png", "Assets/ppTras2.png", "Assets/ppTras1.png", "Assets/ppTras3.png");
  ppCaver = loadAnimation("Assets/pp21.png", "Assets/pp22.png", "Assets/pp21.png", "Assets/pp23.png");
  ppAgua = loadAnimation("Assets/pp31.png", "Assets/pp32.png", "Assets/pp31.png", "Assets/pp33.png")
  //guardasGif = loadAnimation("Assets/guardas.gif");

  //fundos
  baseImg = loadImage("Assets/fundos/fundoBase.gif");
  casaPonteImg = loadImage("Assets/fundos/casaPonte.jpeg");
  ponteImg = loadImage("Assets/fundos/ponte.jpeg");
  vilaImg = loadImage("Assets/fundos/vila.jpeg");
  inicioFloImg = loadImage("Assets/fundos/inicioFloresta.gif");
  florestaImg = loadImage("Assets/fundos/floresta.gif");
  cavernaImg = loadImage("Assets/fundos/caverna.jpeg");
  arvoreFimImg = loadImage("Assets/fundos/arvoreFinal.png");
  finalImg = loadImage("Assets/fundos/final.gif");

  chaoBaseImg = loadImage("Assets/fundos/chaoBase.gif");

}

function setup() {
  createCanvas(500, 500);

  
  esquilos = createSprite(150, 250, 20, 20);
  esquilos.addAnimation("esquilosGif", esquilosGif);
  esquilos.scale = 0.5
  
  morcegos = createSprite(350, 250, 20, 20);
  morcegos.addAnimation("morcegosGif", morcegosGif);
  morcegos.scale = 0.5

  piranha1 = createSprite(550, 500, 20, 20);
  piranha1.addAnimation("piranhaGif1", piranhasGif1);
  piranha1.scale = 0.5
  
  piranha2 = createSprite(350, 500, 20, 20);
  piranha2.addAnimation("piranhaGif1", piranhasGif2);
  piranha2.scale = 0.5

  piranha3 = createSprite(150, 500, 20, 20);
  piranha3.addAnimation("piranhaGif1", piranhasGif3);
  piranha3.scale = 0.5

  gato = createSprite(550, 200, 20, 20);
  gato.addAnimation("gatoGif", gatoGif);
  gato.scale = 0.5
  
  pp = createSprite(200, 735, 20, 20);
  pp.addAnimation("ppPara", ppPara);
  pp.addAnimation("ppGifFrent", ppGifFrent);
  pp.addAnimation("ppGifTras", ppGifTras);
  pp.addAnimation("ppCaver", ppCaver);
  pp.addAnimation("ppAgua", ppAgua);
  pp.scale = 0.3
  
  //camera.on();
  camera = new Camera(pp.x, pp.y, 1);

  // guardas = createSprite(250, 250, 20, 20);
 // guardas.addImage("guardasGif", guardasGif);
  
  //fundo
  ponte = createSprite(500, 500, 500, 500);
  ponte.addImage("ponteImg", ponteImg);
  
  vila = createSprite(500, 500, 500, 500);
  vila.addImage("vilaImg", vilaImg);
  
  floresta = createSprite(500, 500, 500, 500);
  floresta.addImage("florestaImg", florestaImg);

  caverna = createSprite(500, 500, 500, 500);
  caverna.addImage("cavernaImg", cavernaImg);

  arvoreFim = createSprite(500, 500, 500, 500);
  arvoreFim.addImage("arvoreFimImg", arvoreFimImg);

  chaoBase = createSprite(100, 800, 50, 20);
  chaoBase.addImage("chaoBaseImg", chaoBaseImg);
  
  casaPonte = createSprite(1040, 500, 500, 500);
  casaPonte.addImage("casaPonteImg", casaPonteImg);
  casaPonte.scale = 1.3;
  
  chaoBase.depth = casaPonte.depth;
  chaoBase.depth += 1;
  /*
  pp = createSprite(200, 735, 20, 20);
  pp.addImage("ppPara", ppPara);
  pp.addAnimation("ppGifFrent", ppGifFrent);
  pp.addAnimation("ppGifTras", ppGifTras);
  pp.scale = 0.3;
  */
  pp.depth = casaPonte.depth;
  pp.depth += 1;
  
}

function draw() {
  createCanvas(1000, 1000);
  var gameState = 1;
 // pp.position(100, 100);
  camera.position.x = pp.x;
  camera.position.y = pp.y;
  
  if(gameState == 1) {
    background("grey");
  
    console.log(camera.position)

    if (keyDown(LEFT_ARROW)){
      pp.x -= 5;
      pp.changeAnimation("ppGifTras", ppGifTras);
      }
      if (keyDown(RIGHT_ARROW)){
        pp.x += 5;
        pp.changeAnimation("ppGifFrent", ppGifFrent);
      }
      if (keyIsDown(UP_ARROW)) {
        pp.y -= 10;
/*
        pp.x = x;
        pp.y = y;
        */
      }
      /*
      if (keyIsDown(DOWN_ARROW)) {
        pp.y += 10;
      }
      */
    }

    drawSprites();
  }