class Ponto {
  constructor(x, y, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    Ponto.DesenharPonto(x, y, name);
  }
  static DesenharPonto(x, y, name) {
    circle(x, y, 7);

    textSize(20);
    textLeading(60);
    textStyle(ITALIC);
    fill(255, 165, 0);
    text(name, x, y, 500, 500);
  }
}