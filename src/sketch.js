//<reference path="C:\Users\SSRFT-LAB\Desktop\TrussCalculator\node_modules\@types\p5\global.d.ts"/>

const span = document.getElementById("cords");
const trash = document.getElementById("trash");
trash.onclick = () => {
  cnv.clear();
  desenharGrid(backcnv);
  barras = [];
  componentesX = [];
  componentesY = [];
  pontos = [];
  flag_inicio = false;
};

let barras = [];
let componentesX = [];
let componentesY = [];
let pontos = [];

let start_x = 0,
  start_y = 0,
  end_x = 0,
  end_y = 0;

let flag_inicio = false;

let cols = 34;
let rows = 16;

let cnv;
let backcnv;

function setup() {
  cnv = createCanvas(994, 500);
  backcnv = createGraphics(994, 500);
  backcnv.strokeWeight(1);
  //cnv.background(0);
  cnv.parent("divUseless");
  // background("#f6f8fa");
  // put setup code here
  cnv.strokeWeight(1);
  desenharGrid(backcnv);
}

function draw() { }







