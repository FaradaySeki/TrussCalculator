const span = document.getElementById("cords");
const trash = document.getElementById("trash");
const vector = document.getElementById("vector");
const reta = document.getElementById("bar");
const movel = document.getElementById("roller");
const fixo = document.getElementById("fixed");
const calcular = document.getElementById("calculate");
//const principal = document.getElementById('principal');

const modal = document.getElementById("myModal");
const formsContent = document.getElementById("formulario");
const spanC = document.getElementsByClassName("close")[0];
const spanA = document.getElementById("apply");
// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal
vector.onclick =  () => {
  modal.style.display = "block";
  flag_vetor = true;
  flag_inicio = false;
  flag_desenhou = true;
  let string = '';
  pontos.forEach(ponto => {
    string+= `<input type="radio" name="point"id="ponto${ponto.name}">Ponto ${ponto.name}<br> `
  })
  formsContent.innerHTML = string;
}

// When the user clicks on <span> (x), close the modal
spanC.onclick = function () {
  flag_vetor = false;
  flag_apply = true;
  pontos.forEach(ponto => {
    const radiob = document.getElementById(`ponto${ponto.name}`);
    formsContent.removeChild(radiob);
  })
  modal.style.display = "none";
}

spanA.onclick = function () {
const inputForca = document.getElementById("inputForca");
  flag_vetor = false;
  flag_apply = true;
  const horizontal = document.getElementById('Horizontal');
  const vertical = document.getElementById('Vertical');
  const direita = document.getElementById('Direita');
  const esquerda = document.getElementById('Esquerda');

  pontos.forEach(ponto => {
    const radiob = document.getElementById(`ponto${ponto.name}`);

    formsContent.removeChild(radiob);
    if(radiob.checked)
    {
        if(horizontal.checked){
            if(direita.checked){
                ponto.forcas.push({Forca : inputForca.value, Direcao: 'h',Sentido: 'd'})
            }
            else if(esquerda.checked){
                ponto.forcas.push({Forca : inputForca.value, Direcao: 'h',Sentido: 'e'})
            }
        }
        else if(vertical.checked)
        {
            if(direita.checked){
                ponto.forcas.push({Forca : inputForca.value, Direcao: 'v',Sentido: 'd'})
            }
            else if(esquerda.checked){
                ponto.forcas.push({Forca : inputForca.value, Direcao: 'v',Sentido: 'e'})
            }
        }
    }
  })
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    flag_apply = true;
    flag_vetor = false;
    pontos.forEach(ponto => {
      const radiob = document.getElementById(`ponto${ponto.name}`);
      formsContent.removeChild(radiob);
    })
    modal.style.display = "none";
  }
}

//vector.onclick = () => alert('clicou no vertozim !');
fixo.onclick = () => {
 // document.body.style.cursor = 'url("../src/images/Apoio_Fixo.png")';
 // document.body.style.cursor = 'url("./images/Apoio_Fixo.png")';
 // document.body.style.cursor = img2; 
  alert('funcionalidade não implementada');
}
reta.onclick = () => alert('funcionalidade não implementada');
movel.onclick = () => alert('funcionalidade não implementada');
calcular.onclick = () => alert('clicou no calcular ');


trash.onclick = () => {
  flag_desespero = false;
  cnv.clear();
  barras = [];
  componentesX = [];
  componentesY = [];
  pontos = [];
  flag_inicio = false;
  flag_pointFirstBar = false;
  desenharGrid(backcnv);
};
