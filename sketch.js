function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
//    background(imagemCenario);
    background(55);
    chao();
    quadrado();
    movimentar();
    gravidade();
  }

  
//chao

var xChao = 0;
var yChao = 310;
var largChao = 600;
var espChao = 90;

function chao() {
  rect(xChao, yChao, largChao, espChao);
}

//quad

var xQuad = 10;
var yQuad = 280;

function quadrado() {
  rect(xQuad, yQuad, 30, 30)
}

function movimentar(){
  if (keyIsDown(LEFT_ARROW)){
    xQuad -= 3;
  }
  if (keyIsDown(RIGHT_ARROW)){
    xQuad += 3;
  }
  if (keyIsDown(UP_ARROW)){
    yQuad -= 3;
  }
  if (podeMover()){
    if (keyIsDown(DOWN_ARROW)){
    yQuad += 3;
    }
  }
}

function gravidade(){
  if (yQuad < 280){
    yQuad += 1.5;
  }
}

function podeMover() {
  return yQuad < 280;
}