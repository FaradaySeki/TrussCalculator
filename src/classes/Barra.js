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