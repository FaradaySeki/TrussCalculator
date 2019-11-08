//<reference path="C:\Users\SSRFT-LAB\Desktop\TrussCalculator\node_modules\@types\p5\global.d.ts"/>

let eqs = [];
let eqs_f = [];
let colum = [];
let gridPoints = [];
let barras = [];
let pontos = [];
let results = [];

let start_x = 0,
  start_y = 0,
  end_x = 0,
  end_y = 0;

let flag_inicio = false;
let flag_pointFirstBar = false;
let flag_vetor = false;
let flag_reta = false;
let flag_pmovel = false;
let flag_pfixo = false;
let flag_desenhou = false;
let flag_desespero = false;
let flag_apply = false;
let flag_calculou = false;

let cols = 33;
let rows = 17;

let cnv;
let backcnv;

let teste = 0





/*function preload(){
  img2 = loadImage('../src/images/Apoio_Fixo.png')
}*/

function setup() {
  cnv = createCanvas(1000, 500);
  backcnv = createGraphics(1000, 500);
  //backcnv.style('z-index','-1');
  backcnv.strokeWeight(1);
  cnv.background(255);
  //backcnv.background(0);
  cnv.parent("divUseless");
  // backcnv.parent()
  // background("#f6f8fa");
  // put setup code here
  cnv.strokeWeight(3);
  desenharGrid(backcnv);
}

function draw() {
  if (flag_inicio && !flag_vetor) {
    desenharGrid(backcnv);
    //let v0 = createVector(start_x,start_y);
    // let ref = createVector(mouseX - start_x,mouseY - start_y);
    stroke(3);
    const referencial = new Barra(start_x, start_y, mouseX, mouseY);
    line(referencial.initx, referencial.inity, referencial.endx, referencial.endy);
    text(`${referencial.comprimento}mm`, mouseX-10, mouseY-12, 50, 50);
    //drawLine(v0,ref);
    noStroke();
    //rect(500+teste,100+teste,20,20);
    //teste +=5;
  }
  else if (flag_desenhou) {
    teste = 0
    clear();
    desenharGrid(backcnv);
    flag_desenhou = false;
  }
}

function drawLine(base, vec) {
  push();
  stroke(0);
  strokeWeight(3);
  fill(0);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag(), 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}









