function mouseMoved() {
  if (!(mouseX > 994 || mouseX < 3 || mouseY < 3 || mouseY > 499)) {
    let cords = `(${mouseX.toFixed(0)} , ${mouseY.toFixed(0)})`;
    span.textContent = cords;
  }
  if(flag_apply)
    flag_apply = false;
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
function desenharGrid(rcnv) {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * 31;
      let y = j * 31;
      rcnv.stroke(75);
      //rcnv.fill(10,0,0,10);
      rcnv.rect(x + 3, y + 2, 31, 31);
      gridPoints.push({
        ponto_x: x + 3,
        ponto_y: y + 2
      });
      //cnv.circle(x + 3, y + 1, 3);
    }
  }

  image(rcnv, 0, 0);
  stroke(3);

  desespero();
  
  //rect(40,40,50,40);
  loadBarsandPoints();
}
function desespero(){
  if(!flag_desespero){
    barras.push(new Barra(282, 312,654 , 312))
    flag_desespero = true;
  }
  
  if(!flag_pfixo){
    const pontoFixo = pontos.find(ponto => {
      if(ponto.x == 654 && ponto.y == 312)
        return ponto;
    })
    if(pontoFixo){
      pontoFixo.forcas
    }
  }
  if(!flag_pmovel){
    flag_pmovel = true;
  }

  strokeWeight(2);

  // apoio esquerda movel
  line(282,312,251,343);
  line(282,312,313,343);
  line(251,343,313,343);

  fill(255, 165, 0);
  
  circle(262,345,8);
  circle(272,345,8);
  circle(282,345,8);
  circle(292,345,8);
  circle(302,345,8);

  // apoio direita fixo
  line(282+372,312,251+372,343);
  line(282+372,312,313+372,343);
  line(251+372,343,313+372,343);

  line(251+382,343,251+377,343+6);
  line(251+392,343,251+387,343+6);
  line(251+402,343,251+397,343+6);
  line(251+412,343,251+407,343+6);
  line(251+422,343,251+417,343+6);

  // reação movel vertical
  line(654,312,654,312-70);
  line(654,312-70,654-5,312-65);
  line(654,312-70,654+5,312-65);
  textSize(18);
  text(`Vy`, 654, 312-85, 50, 50);

  // reação fixo ver
  line(282,312,282,312-70);
  line(282,312-70,282-5,312-65);
  line(282,312-70,282+5,312-65);
  textSize(18);
  text(`Vx`, 282, 312-85, 50, 50);

  // reação fixo hor
  line(240,312,282,312);
  line(282,312,275,312-3)
  line(282,312,275,312+3)
  text(`Hx`, 220, 312, 50, 50);
}
function mouseClicked() {
  console.log(`ponto clicado: (${mouseX} , ${mouseY})`);


  try {
    if (squareClick(mouseX, mouseY) && !flag_vetor && !flag_apply){
      if (!flag_inicio) {
        start_x = mouseX;
        start_y = mouseY;

        flag_inicio = true;
      } else {
        if (true) {//!checkBarraisNear()) {
          end_x = mouseX;
          end_y = mouseY;

          //pontos.push(new Ponto(end_x, end_y, nomes[pontos.length]));
          //desenharPonto(start_x, start_y, nomes[pontos.length]);
          // desenharBarra(start_x, start_y, end_x, end_y);
          barras.push(new Barra(start_x, start_y, end_x, end_y));
          console.log(barras);
          if (barras.length > 1) {
            const bar = barras[barras.length - 1];

            for (let i = 0; i < barras.length - 1; i++) {
              if (barras[i].initx === bar.initx && barras[i].inity === bar.inity) {
                const existe = pontos.find(ponto => ponto.x == bar.initx && ponto.y == bar.inity)
                if (!existe) pontos.push(new Ponto(bar.initx, bar.inity, nomes[pontos.length]))
              }
              else if (barras[i].endx === bar.initx && barras[i].endy === bar.inity) {
                const existe = pontos.find(ponto => ponto.x == bar.initx && ponto.y == bar.inity)
                if (!existe) pontos.push(new Ponto(bar.initx, bar.inity, nomes[pontos.length]))
              }
              if (barras[i].initx === bar.endx && barras[i].inity === bar.endy) {
                const existe = pontos.find(ponto => ponto.x == bar.endx && ponto.y == bar.endy)
                if (!existe) pontos.push(new Ponto(bar.endx, bar.endy, nomes[pontos.length]))
              }
              else if (barras[i].endx === bar.endx && barras[i].endy === bar.endy) {
                const existe = pontos.find(ponto => ponto.x == bar.endx && ponto.y == bar.endy)
                if (!existe) pontos.push(new Ponto(bar.endx, bar.endy, nomes[pontos.length]))
              }
            }
          }



          //barras.push(new Barra(start_x, start_y, end_x, end_y));

          //   start_x = end_x;
          // start_y = end_y;
          flag_inicio = false;
          flag_desenhou = true;
        }
        //else alert('não é possível desenhar barras muito proximas !');
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
      console.log(start_x, start_y);
      console.log(barras);
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
        /*end_x = barras[z].initx;
        end_y = barras[z].inity;
        flag_desenhou = true;
        if (
          barras[barras.length - 1].endx === barras[0].initx &&
          barras[barras.length - 1].endy === barras[0].inity && !flag_pointFirstBar
        ) {
          flag_pointFirstBar = true;
          pontos.push(
            new Ponto(
              barras[0].initx,
              barras[0].inity,
              nomes[barras.length - 1]
            )
          );
        }*/
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
function checkBarraisNear() {
  let flag = false;
  if (barras.length === 0)
    return flag;
  else {
    let barra = barras[barras.length - 1];
    flag = PercorrerReta(barra.initx, barra.inity, barra.endx, barra.endy, barra.comprimento);

  }
  return flag;
}

function PercorrerReta(xinit, yinit, xend, yend, comp) {
  let flag = false;
  let modifx = (xinit - xend);
  if (modifx < 0)
    modifx *= -1;
  let modify = (yinit - yend);
  if (modify < 0)
    modify *= -1;

  let ycounter = comp / modifx;
  let xcounter = comp / modify;

  if ((yend - yinit) < 0)
    ycounter *= -1;
  if ((xend - xinit) < 0)
    xcounter *= -1;
  while (Math.trunc(xinit) != Math.trunc(xend) && Math.trunc(yinit) != Math.trunc(yend) && (xinit > 0 && yinit > 0 && xinit < 1010 && yinit < 510)) {

    let diffx = xinit - mouseX;
    if (diffx < 0)
      diffx *= -1;

    let diffy = yinit - mouseY;
    if (diffy < 0)
      diffy *= -1;

    if (diffx < 30 && diffy < 30) {
      flag = true;
      break;
    }
    console.log(xinit, yinit);
    xinit += xcounter;
    yinit += ycounter;
  }
  return flag;
}

function loadBarsandPoints() {
  if (barras.length > 0) {
    barras.forEach(barra => {
      Barra.DesenharBarra(barra.initx, barra.inity, barra.endx, barra.endy)
    });
  }
  if (pontos.length > 0) {
    pontos.forEach(ponto => {
      Ponto.DesenharPonto(ponto.x, ponto.y, ponto.name);
      ponto.forcas.forEach(obj => {
        Ponto.DesenharVetor(obj,ponto.x,ponto.y);
      })
    })
  }
}
