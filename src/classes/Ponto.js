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