///<reference path="C:\Users\Seki\node_modules\@types\p5\global.d.ts"/>

let start_x = 0,
  start_y = 0,
  end_x = 0,
  end_y = 0;

let flag_inicial = false,
  flag_iniciou = false;

function setup() {
  let cnv = createCanvas(1000, 600);

  strokeWeight(4);

  background("#f6f8fa");
  // put setup code here
}

function draw() {
  // put drawing code here
}

function mouseClicked() {
  if (!flag_inicial) {
    start_x = mouseX;
    start_y = mouseY;
    flag_inicial = true;
  } else {
    end_x = mouseX;
    end_y = mouseY;
    line(start_x, start_y, end_x, end_y);
    flag_iniciou = true;
    start_x = end_x;
    start_y = end_y;
  }
  if (flag_iniciou) {
    end_x = mouseX;
    end_y = mouseY;

    line(start_x, start_y, end_x, end_y);

    start_x = end_x;
    start_y = end_y;
  }
}
