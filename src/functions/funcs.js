function mouseMoved() {
  if (!(mouseX > 994 || mouseX < 3 || mouseY < 3 || mouseY > 499)) {
    let cords = `(${mouseX.toFixed(0)} , ${mouseY.toFixed(0)})`;
    span.textContent = cords;
  }

  //clear();
  //desenharGrid();
  //backcnv.style("z-index", "-1");
  //cnv.style("z-index", "1");
  //textSize(10);
  //textLeading(30);
  //textStyle(BOLDITALIC);
  // let cords = `(${mouseX.toFixed(2)},${mouseY.toFixed(2)})`;
  // text(cords, mouseX + 10, mouseY, 500, 500);
}
function desenharGrid(cnv) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 31;
      let y = j * 31;
      cnv.stroke(75);
      cnv.rect(x, y, 31, 31);
    }
  }
  image(cnv, 0, 0);

  strokeWeight(2);
}
function mouseClicked() {
  console.log(`ponto clicado: (${mouseX} , ${mouseY})`);
  try {
    if (squareClick(mouseX, mouseY)) {
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
  } catch (error) {
    alert(`error`);
  }
}
function desenharPonto(x, y, nome) {
  if (barras.length !== 0) {
    for (let i = 0; i < barras.length; i++) {
      if (barras[i].endx === x && barras[i].endy === y) {
        const existe = pontos.find(ponto => {
          return ponto.x == x && ponto.y == y;
        });
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
        if (
          barras[barras.length - 1].endx === barras[0].initx &&
          barras[barras.length - 1].endy === barras[0].inity
        ) {
          pontos.push(
            new Ponto(
              barras[0].initx,
              barras[0].inity,
              nomes[barras.length - 1]
            )
          );
        }
        break;
      }
    }
    if (!flag_desenhou) barras.push(new Barra(startx, starty, endx, endy));
  }
}
function squareClick(x, y) {
  if (x > 5 && x < 995 && (y > 5 && y < 495)) return true;
  return false;
}