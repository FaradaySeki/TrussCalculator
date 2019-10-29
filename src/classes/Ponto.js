class Ponto {
  constructor(x, y, name) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.forcas = [];
    this.vetor_ref = createVector(this.x, this.y / 2);
    Ponto.DesenharPonto(x, y, name);
  }
  static DesenharPonto(x, y, name) {
    circle(x, y, 8);
    textSize(20);
    textLeading(60);
    textStyle(ITALIC);
    strokeWeight(2);
    fill(255, 165, 0);
    text(name, x, y, 500, 500);
  }
}