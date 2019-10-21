class Barra {
  constructor(sx, sy, ex, ey) {
    this.initx = sx;
    this.inity = sy;
    this.endx = ex;
    this.endy = ey;
    this.defineNewPoints(sx, sy, ex, ey)
    // desenharPonto(this.initx, this.inity, nomes[pontos.length])
    this.comprimento = Barra.DesenharBarra(this.initx, this.inity, this.endx, this.endy);
  }
  static DesenharBarra(initx, inity, endx, endy) {
    strokeWeight(4);
    line(initx, inity, endx, endy);
    strokeWeight(2);
    const x = endx - initx;
    const y = endy - inity;
    const raiz = sqrt(x * x + y * y);
    const comprimento = raiz.toPrecision(5);
    return comprimento;
  }
  defineNewPoints(initx, inity, endx, endy) {
    let flag_init = false;
    let flag_end = false;
    gridPoints.find(point => {
      if (flag_init && flag_end)
        return;
      let difinitx = initx - point.ponto_x;
      let difinity = inity - point.ponto_y;
      let difendx = endx - point.ponto_x;
      let difendy = endy - point.ponto_y;

      if (difinitx < 0)
        difinitx *= -1;
      if (difinity < 0)
        difinity *= -1;
      if (difendx < 0)
        difendx *= -1;
      if (difendy < 0)
        difendy *= -1;

      if (difinitx < 17 && difinity < 17 && !flag_init) {
        this.initx = point.ponto_x;
        this.inity = point.ponto_y;
        flag_init = true;
      }
      if (difendx < 17 && difendy < 17 && !flag_end) {
        this.endx = point.ponto_x;
        this.endy = point.ponto_y;
        flag_end = true;
      }
      // console.log(difinitx, difinity);
    })
    //console.log(initx, inity, endx, endy);
    //console.log(this.initx, this.inity);
  }
}