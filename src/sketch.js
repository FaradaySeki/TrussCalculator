//<reference path="C:\Users\SSRFT-LAB\Desktop\TrussCalculator\node_modules\@types\p5\global.d.ts"/>

const span = document.getElementById("cords");
const trash = document.getElementById("trash");
const vector = document.getElementById("vector");
const reta = document.getElementById("bar");
const movel = document.getElementById("roller");
const fixo = document.getElementById("fixed");
const calcular = document.getElementById("calculate");
//const principal = document.getElementById('principal');

const modal = document.getElementById("myModal");
const modalContent = document.getElementById("contentModal");
const spanC = document.getElementsByClassName("close")[0];
// Get the <span> element that closes the modal


// When the user clicks on the button, open the modal
vector.onclick = function () {
  flag_vetor = true;
  flag_inicio = false;
  flag_desenhou = true;
  modal.style.display = "block";
  pontos.forEach(ponto => {
    const row = document.createElement('div');
    modalContent.appendChild(row);
    const radiob = document.createElement('input');
    radiob.type = 'radio';
    row.id = `ponto${ponto.name}`;
    const text = document.createTextNode(`ponto ${ponto.name}`)

    row.appendChild(radiob);
    row.appendChild(text);
    //radiob.style.width = '100px';
    //radiob.innerText = `ponto ${ponto.name}`.toUpperCase();
    //radiob.innerHTML = `ponto ${ponto.name}`.toUpperCase();
    //const label = document.createElement('label');
    //label.innerHTML = `ponto ${ponto.name}`.toUpperCase();
    //label.style.fontFamily = 'Courier New, Courier, monospace';
    //label.style.color = 'red';
    //label.style.fontSize = '15px';

    // radiob.appendChild(label);
    //adiob.setAttribute("type", "radio");
    //radiob.setAttribute("name", ponto.name);
    //radiob.setAttribute("id", `ponto${ponto.name}`);

    //font-family: "Courier New", Courier, monospace;
    //color: black;
    //font-size: 20px;
  })


}

// When the user clicks on <span> (x), close the modal
spanC.onclick = function () {
  flag_vetor = false;
  pontos.forEach(ponto => {
    const radiob = document.getElementById(`ponto${ponto.name}`);
    modalContent.removeChild(radiob);
  })
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  flag_vetor = false;
  if (event.target == modal) {
    pontos.forEach(ponto => {
      const radiob = document.getElementById(`ponto${ponto.name}`);
      modalContent.removeChild(radiob);
    })
    modal.style.display = "none";
  }
}

//vector.onclick = () => alert('clicou no vertozim !');
fixo.onclick = () => alert('clicou no ponto fixo');
reta.onclick = () => alert('clicou na retinha');
movel.onclick = () => alert('clicou no ponto movel');
calcular.onclick = () => alert('clicou no calcular ');


trash.onclick = () => {
  cnv.clear();
  barras = [];
  componentesX = [];
  componentesY = [];
  pontos = [];
  flag_inicio = false;
  flag_pointFirstBar = false;
  desenharGrid(backcnv);
};

let gridPoints = [];
let barras = [];
let componentesX = [];
let componentesY = [];
let pontos = [];

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

let cols = 33;
let rows = 17;

let cnv;
let backcnv;

let teste = 0

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
  cnv.strokeWeight(2);
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









