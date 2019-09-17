//<reference path="C:\Users\Seki\node_modules\@types\p5\global.d.ts"/>

const nomes = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
  7: "H",
  8: "I",
  9: "J",
  10: "K",
  11: "L",
  12: "M",
  13: "N",
  14: "O",
  15: "P",
  16: "Q",
  17: "R",
  18: "S",
  19: "T",
  20: "U",
  21: "V"
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

function setup() {
  const cnv = createCanvas(1000, 600);

  strokeWeight(4);
  cnv.background('#f6f8fa');
  // background("#f6f8fa");
  // put setup code here
}

function draw() {
  // put drawing code here
}

function mouseClicked() {
  console.log(`ponto clicado: (${mouseX} , ${mouseY})`);

  if (!flag_inicio) {
    start_x = mouseX;
    start_y = mouseY;

    flag_inicio = true;
  } else {
    end_x = mouseX;
    end_y = mouseY;

    //pontos.push(new Ponto(end_x, end_y, nomes[pontos.length]));
    desenharPonto(start_x, start_y, nomes[pontos.length]);
    desenharBarra(start_x, start_y, end_x, end_y);
    //barras.push(new Barra(start_x, start_y, end_x, end_y));

    start_x = end_x;
    start_y = end_y;
  }
}

class Vetor {
  constructor(x, y) {
    this.vector = createVector(x, y);
  }
}
class Ponto {
  constructor(x, y, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.DesenharPonto(x, y, name);
  }
  DesenharPonto(x, y, name) {
    circle(x, y, 7);

    textSize(20);
    textLeading(30);
    textStyle(BOLDITALIC);
    text(name, x, y, 500, 500);
  }
}
class Barra {
  constructor(sx, sy, ex, ey) {
    this.initx = sx;
    this.inity = sy;
    this.endx = ex;
    this.endy = ey;
    this.comprimento = this.DesenharBarra(sx, sy, ex, ey);
  }
  DesenharBarra(initx, inity, endx, endy) {
    line(initx, inity, endx, endy);
    const x = endx - initx;
    const y = endy - inity;
    const raiz = sqrt(x * x + y * y);
    const comprimento = raiz.toPrecision(5);
    return comprimento;
  }
}

function desenharPonto(x, y, nome) {
  if (barras.length !== 0) {
    for (let i = 0; i < barras.length; i++) {
      if (barras[i].endx === x && barras[i].endy === y) {
        const existe = pontos.find(ponto => {
          return (ponto.x == x && ponto.y == y)
        })
        if (!existe) {
          pontos.push(new Ponto(x, y, nome));
        }
        break;
      }
    }
  }
}

function desenharBarra(startx, starty, endx, endy) {
  let flag_desenhou = false;
  if (barras.length === 0) barras.push(new Barra(startx, starty, endx, endy));
  else {
    let difx = 0;
    let dify = 0;
    for (let z = 0; z < barras.length; z++) {
      endx > barras[z].initx
        ? (difx = endx - barras[z].initx)
        : (difx = barras[z].initx - endx);
      endy > barras[z].inity
        ? (dify = endy - barras[z].inity)
        : (dify = barras[z].inity - endy);

      console.log(`difx = ${difx} , dify = ${dify}`);

      if (difx < 75 && dify < 75) {
        barras.push(
          new Barra(startx, starty, barras[z].initx, barras[z].inity)
        );
        end_x = barras[z].initx;
        end_y = barras[z].inity;
        flag_desenhou = true;
        if (barras[barras.length - 1].endx === barras[0].initx &&
          barras[barras.length - 1].endy === barras[0].inity) {
          pontos.push(new Ponto(barras[0].initx, barras[0].inity, nomes[barras.length - 1]));
        }
        break;
      }
    }
    if (!flag_desenhou) barras.push(new Barra(startx, starty, endx, endy));
  }
}
