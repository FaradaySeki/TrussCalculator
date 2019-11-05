const span = document.getElementById("cords");
const trash = document.getElementById("trash");
const vector = document.getElementById("vector");
//const reta = document.getElementById("bar");
//const movel = document.getElementById("roller");
//const fixo = document.getElementById("fixed");
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
  //const direita = document.getElementById('Direita');
  //const esquerda = document.getElementById('Esquerda');

  pontos.forEach(ponto => {
    const radiob = document.getElementById(`ponto${ponto.name}`);

    formsContent.removeChild(radiob);
    if(radiob.checked)
    {
      let f = Number(inputForca.value)
        if(horizontal.checked){
            if(f>0){
              ponto.forcas.push({Forca : f, Direcao: 'h',Sentido: 'd'})
            }
            else {
              ponto.forcas.push({Forca : f, Direcao: 'h',Sentido: 'e'})
            }

        }
        else if(vertical.checked)
        {
            if(f>0){
                ponto.forcas.push({Forca : f, Direcao: 'v',Sentido: 'd'})
            }
            else{
                ponto.forcas.push({Forca : f, Direcao: 'v',Sentido: 'e'})
            }
        }
    }
  })
  loadBarsandPoints();
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
//fixo.onclick = () => {
 // document.body.style.cursor = 'url("../src/images/Apoio_Fixo.png")';
 // document.body.style.cursor = 'url("./images/Apoio_Fixo.png")';
 // document.body.style.cursor = img2; 
  //alert('funcionalidade não implementada');
//}
//reta.onclick = () => alert('funcionalidade não implementada');
//movel.onclick = () => alert('funcionalidade não implementada');
calcular.onclick = () => {
  const n = barras.length + 3 
  //console.log(barras.length + 3, pontos.length *2);
  if(n != pontos.length*2)
    alert('Não é possível resolver por métodos lineares');
  else if(!flag_calculou)
    {
      pontos.forEach(ponto =>{
       let barsAtPoints = barras.map(bar => {
          if((bar.initx == ponto.x && bar.inity == ponto.y) ||(bar.endx == ponto.x && bar.endy == ponto.y) )
            return bar;
        })

       // console.log(`barras no ponto ${ponto.name}`);
        //console.log(barsAtPoints);
        let eqx = [0,0,0]
        let eqy = [0,0,0]

        let eqx2 = [0,0,0];
        let eqy2 = [0,0,0];

        if(ponto.x == 282 && ponto.y == 312){
          /*if(ponto.forcas.length>1){
            let sum = 0;
            ponto.forcas.forEach(f => {
              if(f.Forca != 'Vy' && f.Direcao == 'v')
                sum += f.Forca;
            })
            eqy = [`${sum} Vy`,0,0]
            eqy2 = [sum,0,0];
          }
          else{*/
            eqy = ['Vy',0,0]
            eqy2 = [1,0,0];        
       }
        else if(ponto.x == 654 && ponto.y == 312){
         /* if(ponto.forcas.length>2){
            let sumV = 0;
            let sumH = 0;
            ponto.forcas.forEach(f => {
              
              if(f.Forca != 'Vx' && f.Direcao == 'v')
                sumV += f.Forca;
              else if(f.Forca != 'Hx' && f.Direcao == 'h')
                sumH += f.Forca;
            })
            //sumH > 0 ? eqx = [0,0,`${sumH} Hx`] : eqx = [0,0,`Hx`] 
            eqx = [0,0,`${sumH} Hx`]
            eqx2 = [0,0,sumH];
            eqy = [0,`${sumV} Vx`,0]
            eqy2 = [0,sumV,0];
          }*/
          
            eqy = [0,'Vx',0]
            eqx = [0,0,'Hx']
            eqy2 = [0,1,0];
            eqx2 = [0,0,1];
         

        }

        let somax = 0;
        let somay = 0;
        ponto.forcas.forEach(forca => {
          if(forca.Direcao == 'v' && (forca.Forca != 'Vy'&&forca.Forca != 'Vx'&&forca.Forca != 'Hx')){
            somay+= forca.Forca;
          }
          else if(forca.Direcao == 'h'&& (forca.Forca != 'Vy'&&forca.Forca != 'Vx'&&forca.Forca != 'Hx')){
            somax+= forca.Forca
          }
        })
        colum.push(somax*-1);
        colum.push(somay*-1);

  //      console.log(eqx);
//        console.log(eqy);

        //console.log(barsAtPoints);

        barsAtPoints.forEach(bar=>{
          if(bar)
          {
            let angle = bar.retornaAngulo(ponto);
            if(angle<0)
              angle*=-1     

            let resultx = Math.sin(angle).toFixed(3);
            let resulty = Math.cos(angle).toFixed(3);

            const nome = bar.retornaNome();
            
            //console.log(nome);
            eqx.push(`${nome} ${resultx}`);
            eqx2.push(Number(resultx));
            eqy.push(`${nome} ${resulty}`);
            eqy2.push(Number(resulty));
          }
          else{
            eqx.push(0);
            eqy.push(0);
            eqx2.push(0);
            eqy2.push(0);
          }
        })
        //iguala zero
    //    eqx.push(0);
      //  eqy.push(0);
        //eqx2.push(0);
       // eqy2.push(0);

        eqs.push(eqx);
        eqs.push(eqy);
        eqs_f.push(eqx2);
        eqs_f.push(eqy2);
      })
      // apartir daqui esta tudo organizado no vetor eqs
      // pendente formatar

     // let equations = $M(eqs_f)
      

     // const eqns = equations.toRightTriangular();

      flag_calculou = true;
      //console.log(eqns);
     // console.log(colum);
      const results = math.lusolve(eqs_f,colum);
      //const results = math.lusolve([[1,1,1],[0,2,5],[2,5,-1]],[6,-4,27])
      console.log(results);
     // console.log(eqns.e);
    }
}


trash.onclick = () => {
  flag_pmovel = false;
  flag_pfixo = false;
  flag_desespero = false;
  flag_calculou = false;
  cnv.clear();
  colum = [];
  barras = [];
  eqs= [];
  eqs_f = [];
  componentesX = [];
  componentesY = [];
  pontos = [];
  flag_inicio = false;
  flag_pointFirstBar = false;
  desenharGrid(backcnv);
};
