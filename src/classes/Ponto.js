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
  // vertical, 
  // começar a linha no x,1 
  static DesenharVetor(obj,x,y){
    const {Forca, Direcao, Sentido} = obj;
    strokeWeight(2);
    // Direcao pode ser v 'vertical' ou h 'horizontal'
    // Sentido pode ser d 'direita/cima' ou e 'esquerda/baixo'
    if(Direcao == 'v')
    {
      if(Sentido == 'd'){
        line(x,y,x,y-50);
        line(x,y-50,x-5,y-45);
        line(x,y-50,x+5,y-45);
        text(`${Forca}kN`, x, y-75, 50, 50);
      }
      else if(Sentido =='e'){
        line(x,y,x,y+50);
        line(x,y+50,x-5,y+45);
        line(x,y+50,x+5,y+45);
        text(`${Forca}kN`, x, y+75, 50, 50);
      }
    }
    else if(Direcao == 'h'){
      if(Sentido == 'd'){
        line(x,y,x+50,y);
        line(x+50,y,x+45,y-5)
        line(x+50,y,x+45,y+5)
        text(`${Forca}kN`, x+75, y, 50, 50);
      }
      else if(Sentido == 'e'){
        line(x,y,x-50,y);
        line(x-50,y,x-45,y-5)
        line(x-50,y,x-45,y+5)
        text(`${Forca}kN`, x-75, y, 50, 50);
      }
    }
    //line(x,y,x,y-20);
  }
}