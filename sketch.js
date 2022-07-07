//menu
var lixosQ = 0;
var preJogo = 0;
var asteroidesQ = 0;

var mouse = "nao";
var espaco = "nao";
var animacao = "a";
var estado = "inicio";
var audio = "musicaToque";

var fundo1, fundo2, fundo3;
var jogar, jogar1, instrucoes, instrucoes1;
var tituloA, tituloB, tituloC, titulo0, titulo1;
var som, somA0, somB0, somC0, somD0, somA1, somB1, somC1, somD1;
var menu, menuA, menuB, menuC0, menuC1, skip, skip1, controle, controle1;

//grupos de sprites
var misseis, asteroides, lixos, enegias, reparos, bombas;

// var = sprite // var0 = sprite preto // var1[...] = sprite colorido
var missel, missel0, missel1, missel2, missel3, missel4, missel5;
var asteroide, asteroideQ, asteroide0, asteroide1;
var universo, universo0A, universo0B, universo1;
var bomba, bomba0, bomba1, explosao0, explosao1;
var bateria, bateria0, bateria1;
var energia, energia0, energia1;
var lixo, lixoQ, lixo0, lixo1;
var reparo, reparo0, reparo1;
var marte,  marte0, marte1;
var nastd, nastd0, nastd1;
var poli, poli0, poli1;
var vida, vida0, vida1;
var seta, seta1;

//carregar página
const pre_carregamento = document.querySelector("div.pre-carregamento");

function preCarregamento(){
  pre_carregamento.style.opacity = "0";
  setTimeout(() => {
    pre_carregamento.style.display = "none";
  }, 1500);
}

function preload(){

  //menu

  fundo1 = loadImage("Images/menu/fundo1.jpg");
  fundo2 = loadImage("Images/menu/fundo2.jpg");
  fundo3 = loadImage("Images/menu/fundo3.jpg")

  jogar1 = loadImage("Images/menu/jogar.png");
  titulo0 = loadImage("Images/menu/titulo0.png");
  titulo1 = loadImage("Images/menu/titulo1.png");
  instrucoes1 = loadImage("Images/menu/instrucoes.png");

  somA0 = loadImage("Images/som/somA0.png");
  somB0 = loadImage("Images/som/somB0.png");
  somC0 = loadImage("Images/som/somC0.png");
  somD0 = loadImage("Images/som/somD0.png");
  somA1 = loadImage("Images/som/somA1.png");
  somB1 = loadImage("Images/som/somB1.png");
  somC1 = loadImage("Images/som/somC1.png");
  somD1 = loadImage("Images/som/somD1.png");

  skip1 = loadImage("Images/seta/skip.png");
  menuA = loadImage("Images/menu/menuA.png");
  menuB = loadImage("Images/menu/menuB.png");
  menuC0 = loadImage("Images/menu/menuC0.png");
  menuC1 = loadImage("Images/menu/menuC1.png");
  controle1 = loadImage("Images/menu/controle.png");

  //sprites

  marte0 = loadAnimation(
    "Images/marte/marte1A.png",
    "Images/marte/marte0B.png",
    "Images/marte/marte0C.png",
    "Images/marte/marte0D.png"
  );
  marte1 = loadAnimation(
    "Images/marte/marte1A.png",
    "Images/marte/marte1B.png",
    "Images/marte/marte1C.png",
    "Images/marte/marte1D.png"
  );

  seta1 = loadImage("Images/seta/seta.png");

  nastd0 = loadImage("Images/nastd/nastd0.png");
  nastd1 = loadImage("Images/nastd/nastd1.png");

  poli0 = loadImage("Images/poli/poli0.png");
  poli1 = loadImage("Images/poli/poli1.png");

  missel0 = loadImage("Images/missel/missel0.png");
  missel1 = loadImage("Images/missel/missel1.png");
  missel2 = loadImage("Images/missel/missel2.png");
  missel3 = loadImage("Images/missel/missel3.png");
  missel4 = loadImage("Images/missel/missel4.png");
  missel5 = loadImage("Images/missel/missel5.png");

  asteroide0 = loadImage("Images/asteroide/asteroide0.png");
  asteroide1 = loadImage("Images/asteroide/asteroide1.png");

  lixo0 = loadImage("Images/lixo/lixo0.png");
  lixo1 = loadImage("Images/lixo/lixo1.png");

  universo0A = loadImage("Images/universo/universo0A.png");
  universo0B = loadImage("Images/universo/universo0B.png");
  universo1 = loadImage("Images/universo/universo1.png");

  vida0 = loadImage("Images/vida/vida0.png");
  vida1 = loadImage("Images/vida/vida1.png");

  reparo0 = loadImage("Images/reparo/reparo0.png");
  reparo1 = loadImage("Images/reparo/reparo1.png");

  bateria0 = loadImage("Images/bateria/bateria0.png");
  bateria1 = loadImage("Images/bateria/bateria1.png");

  energia0 = loadImage("Images/energia/energia0.png");
  energia1 = loadImage("Images/energia/energia1.png");

  bomba0 = loadImage("Images/bomba/bomba0.png");
  bomba1 = loadImage("Images/bomba/bomba1.png");

  explosao0 = loadImage("Images/bomba/explosao0.png");
  explosao1 = loadImage("Images/bomba/explosao1.png");
}

function setup(){

  createCanvas(windowWidth, windowHeight);  

  instrucoes = createSprite(width/2, 280);
  instrucoes.setCollider("rectangle", 0, 0, 560, 232);
  instrucoes.addImage(instrucoes1);
  instrucoes.scale = 0.45;

  jogar = createSprite(width/2, instrucoes.y-150);
  jogar.setCollider("rectangle", 0, 0, 560, 232);
  jogar.addImage(jogar1);
  jogar.scale = 0.45;

  tituloA = createSprite(width/2-150, instrucoes.y+240);
  tituloA.addImage(titulo1);
  tituloA.velocityX = 5;

  tituloB = createSprite(-2000, instrucoes.y+240);
  tituloB.addImage(titulo1);
  tituloB.velocityX = 5;

  tituloC = createSprite(135, 35);
  tituloC.addImage(titulo0);
  tituloC.visible = false;
  tituloC.scale = 0.4;
  
  controle = createSprite(width/2, height/2-30);
  controle.addImage(controle1);
  controle.scale = 1.8;

  skip = createSprite(width-50, height-47);
  skip.addImage(skip1);
  skip.visible = false;
  skip.scale = 0.25;
  
  menu = createSprite();
  som = createSprite();

  marte = createSprite(width/2, height/2);
  marte.addAnimation("girando", marte1);
  marte.addAnimation("mudando", marte0);
  marte.frameDelay = 30;
  marte.visible = false;
  marte.scale = 1.2;

  seta = createSprite(width/2, height-45);
  seta.setCollider("rectangle", 0, 0, 450, 300);
  seta.addImage(seta1);
  seta.visible = false;
  seta.scale = 0.25;

  nastd = createSprite(width/2, height-100);
  nastd.setCollider("rectangle", 0, 10, 300, 510);
  nastd.addImage(nastd0);
  nastd.visible = false;
  nastd.scale = 0.3;
  nastd.depth = 2;

  poli = createSprite(width/2, height/2);
  poli.setCollider("rectangle", 0, 0, 400, 750);
  poli.addImage(poli0);
  poli.visible = false;
  poli.scale = 0.1;
  poli.depth = 2;

  universo = createSprite(width-43, 43);
  universo.addImage(universo0A);
  universo.visible = false;
  universo.scale = 0.2;

  vida = createSprite(330, 25);
  vida.visible = false;
  vida.addImage(vida0);
  vida.scale = 0.06;
  vida.depth = 1;

  bateria = createSprite(330, 57);
  bateria.addImage(bateria0);
  bateria.visible = false;
  bateria.scale = 0.07;
  bateria.depth = 1;

  asteroideQ = createSprite(width/2-30, 35);
  asteroideQ.addImage(asteroide0);
  asteroideQ.visible = false;
  asteroideQ.scale = 0.13;

  lixoQ = createSprite(width/2+180, 40);
  lixoQ.addImage(lixo0);
  lixoQ.visible = false;
  lixoQ.scale = 0.13;

  asteroides = createGroup();
  misseis = createGroup();
  enegias = createGroup();
  reparos = createGroup();
  bombas = createGroup();
  lixos = createGroup();
}

function draw(){

  console.log(cursor)

  if(estado === "inicio"){

    background(fundo1);
    inicio();
    drawSprites();

  }else if(estado === "instrucoes"){

    background(fundo2);
    comoJogar();
    drawSprites();

  }else if(estado === "historia"){

    historia();

  }else if(estado === "jogo"){
    background("white");
    jogo();
    drawSprites();
  }
}

function inicio(){

  instrucoes.visible = true;
  controle.visible = false;
  tituloA.visible = true;
  tituloB.visible = true;
  jogar.visible = true;
  marte.visible = false;
  menu.visible = false;
  seta.visible = false;
  skip.visible = false;

  marte.changeAnimation("girando");
  marte.scale = 1.2;

  som.x = width-130, som.y = 110;
  som.addImage(somD1);
  som.visible = true;
  som.scale = 0.35;

  menu.x = 80, menu.y = height-80;
  menu.setCollider("circle", 0, 0, 180);
  menu.addImage(menuA);
  menu.scale = 0.3;

  if(tituloA.x > width-333 && animacao === "a"){
    animacao = "b";
    tituloB.x = -330;
  }

  if(tituloB.x > width-333 && animacao === "b"){
    animacao = "a";
    tituloA.x = -330;
  }

  if(mouseIsOver(jogar)){
    jogar.scale = 0.5;
    cursor("pointer");
  }else{
    jogar.scale = 0.45;
  }

  if(mouseIsOver(instrucoes)){
    instrucoes.scale = 0.5;
    cursor("pointer");
  }else{
    instrucoes.scale = 0.45;
  }

  if(!mouseIsOver(jogar) && !mouseIsOver(instrucoes)){
    cursor("auto");
  }

  if(mousePressedOver(jogar) || mousePressedOver(instrucoes)){
    
    instrucoes.visible = false;
    tituloA.visible = false;
    tituloB.visible = false;
    jogar.visible = false;
    som.visible = false;

    if(mousePressedOver(jogar)){
      estado = "historia";
    }else{
      estado = "instrucoes"; 
    }
  }
}

function comoJogar(){

  menu.visible = true;
  controle.visible = true;

  if(mouseIsOver(menu)){
    menu.scale = 0.32;
    cursor("pointer");
  }else{
    menu.scale = 0.3;
    cursor("auto");
  }

  if(mousePressedOver(menu)){
    estado = "inicio";
  }
}

function historia(){

  marte.visible = true;
  skip.visible = true;
  menu.visible = true;
  seta.visible = true;
  som.visible = false;

  menu.x = 43, menu.y = height-43;
  menu.setCollider("rectangle", 0, -20, 300,300);
  menu.addImage(menuB);
 
  mudarFundo();

  drawSprites();

  botoes();

  elementos();
}

function botoes(){

  //controle do mouse
  if(mouseDown("leftButton")){
    mouse = "sim";
  }else{
    mouse = "nao";
  }

  noStroke();
  textSize(20);
  fill("white");
  textAlign(CENTER);
  textFont("Geórgian");

  //menu (voltar ao menu)

  if(mouseIsOver(menu)){
    menu.scale = 0.27;
    cursor("pointer");
  }else{
    menu.scale = 0.23;
  }

  if(mousePressedOver(menu) && mouse === "nao"){
    estado = "inicio";
    preJogo = 0;
  }

  //seta (mudar texto)

  if(mouseIsOver(seta)){
    seta.scale = 0.3;
    cursor("pointer");
  }else{
    seta.scale = 0.25;
  }

  if(mousePressedOver(seta) && mouse === "nao"){
    preJogo++;
  }

  //skip (pular história)

  if(mouseIsOver(skip)){
    skip.scale = 0.3;
    cursor("pointer");
  }else{
    skip.scale = 0.25;
  }

  if(mousePressedOver(skip) && mouse === "nao"){
    preJogo = 14;
  }

  if(!mouseIsOver(menu) && !mouseIsOver(seta) && !mouseIsOver(skip)){
    cursor("auto");
  }
}

function mudarFundo(){

  textSize(40);
  textAlign(CENTER);
  textFont("Geórgian");

  if(preJogo === 0){

    background("#845919");

  }else if(preJogo === 1){

    background("#8E6221");

  }else if(preJogo === 2){

    background("#946D24");

  }else if(preJogo === 3){

    background("#9C7628");

  }else if(preJogo === 4){

    background("#AD8034");

  }else if(preJogo === 5){

    background("#BE8A3F");

  }else if(preJogo === 6){

    background("#C69646");

  }else if(preJogo === 7){

    background("#D3A34D");

  }else if(preJogo === 8){

    background("#D8A959");

  }else if(preJogo === 9){

    background("#DFAD62");

  }else if(preJogo === 10){

    background("#E5AF6B");

  }else if(preJogo === 11){

    background("#E2BA74");

  }else if(preJogo === 12){

    background("#E7BF82");

  }else if(preJogo === 13){
    
    background("#ECC28C");

  }else{
    background("#F5DFBA");
    seta.visible = false;
    skip.visible = false;
    menu.visible = false;
  }
}

function elementos(){

  textSize(40);

  if(preJogo < 14){
    strokeWeight(3);
    stroke("#16213D");
    fill("lightBlue")
    rect(-10, 40, width+20, 20);
  }

  if(preJogo === 0){

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("O ano é 2148...", width/2, height/2+20);

  }else if(preJogo === 1){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Os humanos finalmente", width/2, height/2);
    text("colonizaram Marte!", width/2, height/2+50);
    
  }else if(preJogo === 2){
        
    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*2, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Mas para que isso", width/2, height/2-50);
    text("acontecesse, eles", width/2, height/2);
    text("poluíram muito o", width/2, height/2+50);
    text("espaço sideral,", width/2, height/2+100);
    
  }else if(preJogo === 3){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*3, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("e o Sr. Universo não", width/2, height/2);
    text("gostou nadinha disso.", width/2, height/2+50);
    
  }else if(preJogo === 4){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*4, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Então ele resolveu", width/2, height/2);
    text("se vingar!", width/2, height/2+50);

  }else if(preJogo === 5){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*5, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Asteroides foram", width/2, height/2-50);
    text("invocados e lançados", width/2, height/2);
    text("em direção ao", width/2, height/2+50);
    text("Planeta Vermelho,", width/2, height/2+100);

  }else if(preJogo === 6){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*6, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("e a missão agora", width/2, height/2-50);
    text("é impedir que", width/2, height/2);
    text("eles exterminem", width/2, height/2+50);
    text("tudo e todos.", width/2, height/2+100);

  }else if(preJogo === 7){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*7, 20);

    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Você acaba de ser", width/2, height/2-80);
    text("convocado para", width/2, height/2-30);
    text("pilotar a NASTD-i,", width/2, height/2+20);
    text("a nave desenvolvida", width/2, height/2+70);
    text("pela SpaceX 2.0", width/2, height/2+120);

  }else if(preJogo === 8){

  noStroke();
  fill("#16213D");
  rect(0, 40, width/13*8, 20);

  fill("#fff");
  strokeWeight(4);
  stroke("#BC383E");
  text("para aniquilar qualquer", width/2, height/2-50);
  text("tipo de corpo celeste que", width/2, height/2);
  text("seja uma ameaça", width/2, height/2+50);
  text("à população.", width/2, height/2+100);

}else if(preJogo === 9){

  noStroke();
  fill("#16213D");
  rect(0, 40, width/13*9, 20);
  
  fill("#fff");
  strokeWeight(4);
  stroke("#BC383E");
  text("E para deixar o", width/2, height/2-50);
  text("Sr. Universo feliz,", width/2, height/2);
  text("você e a Poli,", width/2, height/2+50);
  text("sua robô assistente,", width/2, height/2+100);
  
  }else if(preJogo === 10){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*10, 20);
    
    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("devem recolher todo", width/2, height/2-30);
    text("o lixo espacial", width/2, height/2+20);
    text("lançado pelos humanos,", width/2, height/2+70);
    
  }else if(preJogo === 11){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*11, 20);
    
    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("só assim ele irá", width/2, height/2-30);
    text("parar de lançar", width/2, height/2+20);
    text("os asteroides.", width/2, height/2+70);
    
  }else if(preJogo === 12){

    noStroke();
    fill("#16213D");
    rect(0, 40, width/13*12, 20);
    
    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Defenda-os e", width/2, height/2-30);
    text("torne-se o", width/2, height/2+20);
    text("herói deles.", width/2, height/2+70);
    
  }else if(preJogo === 13){

    noStroke();
    fill("#16213D");
    rect(0, 40, width, 20);
    
    fill("#fff");
    strokeWeight(4);
    stroke("#BC383E");
    text("Ahh e boa sorte,", width/2, height/2);
    text("pois você vai precisar!!", width/2, height/2+50);
    
  }else{ 

    marte.changeAnimation("mudando");
    marte.frameDelay = 30;
    
    if(marte.scale < 14){
      marte.scale += 0.11; 
    }else{
      estado = "jogo";
      mouseX = width/2+100;
      mouseY = height/2+100;
      marte.visible = false;
    }
  }
}

function jogo(){

  asteroideQ.visible = true;
  universo.visible = true;
  bateria.visible = true;
  tituloC.visible = true;
  lixoQ.visible = true;
  nastd.visible = true;
  vida.visible = true;
  poli.visible = true;
  menu.visible = true;
  som.visible = true;

  menu.x = width-295, menu.y = 45;
  menu.addImage(menuC0);
  menu.scale = 0.2;

  som.x = width-170, som.y = 45;
  som.addImage(somD0);
  som.scale = 0.2;

  feedbacks();
  nave();
  robo();  
}

function feedbacks(){

  stroke(0);
  fill("#fff");
  strokeWeight(3);

  rect(vida.x+35, vida.y-10, 200,  20);
  rect(vida.x+35, bateria.y-10, 200, 20);

  rectMode(CENTER);
  rect(universo.x, height/2+38, 20, height-110);

  textSize(70);
  strokeWeight(5);
  textAlign(CENTER);
  textFont("Geórgian");

  if(asteroidesQ < 10){
    text("0"+asteroidesQ, asteroideQ.x+80, 63);
  }else{
    text(asteroidesQ, asteroideQ.x+80, 63);
  }

  if(lixosQ < 10){
    text("0"+lixosQ, lixoQ.x+80, 63);
  }else{
    text(lixosQ, lixoQ.x+80, 63);
  }
}

function nave(){

  //movimento

  if(keyDown("a") || keyDown("LEFT_ARROW")){
    nastd.x -= 15;
  }

  if(keyDown("d") || keyDown("RIGHT_ARROW")){
    nastd.x += 15;
  }

  if(nastd.x < 45){
    nastd.x = 45;
  }

  if(nastd.x > width-105){
    nastd.x = width-105;
  }

  //tiro

  if(keyDown("space") && espaco === "nao"){
    missel = createSprite(nastd.x, nastd.y-80);
    missel.addImage(missel0);
    missel.velocityY = -10;
    missel.lifetime = 60;
    misseis.add(missel);
    missel.scale = 0.1;
    missel.depth = 1;
  }

  if(keyDown("space")){
    espaco = "sim";
  }else{
    espaco = "nao";
  }
}

function robo(){

  //movimento

  if(mouseY < 120){
    cursor();
  }else{
    noCursor();
    poli.x = mouseX;
    poli.y = mouseY;
  }

  if(mouseX < 20){
    mouseX = 20;
    poli.x = 20
  }

  if(mouseX > width-80){
    mouseX = width-80;
    poli.x = width-80;
  }

  if(mouseY > height-37){
    mouseY = height-37;
    poli.y = height-37;
  }

  //coleta
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}