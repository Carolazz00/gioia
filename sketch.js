let grafiche = [];

/** @type {Font} */
let font;

// 角度
let angle1 = 0;
let angle2 = 0;
// 速度
let speed1 = 0.01; // 速度1
let speed2 = 0.03; // 速度2

function preload() {
  grafiche = [
    // 1
    {
      posizione: {
        riga: 1,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/1-03.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-02.svg"),
        angolo: 1,
        
      },
      sopra: {
        svg: loadSVG("./assets/1-01.svg"),
        angolo: 2,
       
      },
    },
    {
      posizione: {
        riga: 1,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/1-06.svg"),
        angolo: -1,
      
      },
      centro: {
        svg: loadSVG("./assets/1-05.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-04.svg"),
        angolo: 2,
      },
    },
     {
      posizione: {
        riga: 1,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/1-09.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-08.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-07.svg"),
        angolo: 2,
      },

      //2
    },
     {
      posizione: {
        riga: 2,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/1-12.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-11.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-10.svg"),
        angolo: 2,
      },
      
    },
    {
      posizione: {
        riga: 2,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/1-09.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-08.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-07.svg"),
        angolo: 2,
      },
    },
    {
      posizione: {
        riga: 2,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/1-03.svg"),
        angolo: -1,
       
      },
      centro: {
        svg: loadSVG("./assets/1-02.svg"),
        angolo: 1,
      
      },
      sopra: {
        svg: loadSVG("./assets/1-01.svg"),
        angolo: 2,
        
      },
    },

    //3
   {
      posizione: {
        riga: 3,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/1-09.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-08.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-07.svg"),
        angolo: 2,
      },
    },
    {
      posizione: {
        riga: 3,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/1-01.svg"),
        angolo: -1,
        
      },
      centro: {
        svg: loadSVG("./assets/1-02.svg"),
        angolo: 1,
        
      },
      sopra: {
        svg: loadSVG("./assets/1-03.svg"),
        angolo: 2,
       
      },
    },
      {
      posizione: {
        riga: 3,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/1-06.svg"),
        angolo: -1,
        
      },
      centro: {
        svg: loadSVG("./assets/1-05.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-04.svg"),
        angolo: 2,
      },
    },
    

    //4
     {
      posizione: {
        riga: 4,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/1-03.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-02.svg"),
        angolo: 1,
        
      },
      sopra: {
        svg: loadSVG("./assets/1-01.svg"),
        angolo: 2,
       
      },
    },
    {
      posizione: {
        riga: 4,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/1-06.svg"),
        angolo: -1,
      
      },
      centro: {
        svg: loadSVG("./assets/1-05.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-04.svg"),
        angolo: 2,
      },
    },
     {
      posizione: {
        riga: 4,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/1-09.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-08.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-07.svg"),
        angolo: 2,
      },
    },

    //5
    {
      posizione: {
        riga: 5,
        colonna: 2,
      },
      sotto: {
        svg: loadSVG("./assets/1-09.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-08.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-07.svg"),
        angolo: 2,
      },
    },
    {
      posizione: {
        riga: 5,
        colonna: 1,
      },
      sotto: {
        svg: loadSVG("./assets/1-03.svg"),
        angolo: -1,
       
      },
      centro: {
        svg: loadSVG("./assets/1-02.svg"),
        angolo: 1,
      
      },
      sopra: {
        svg: loadSVG("./assets/1-01.svg"),
        angolo: 2,
        
      },
    },
     {
      posizione: {
        riga: 5,
        colonna: 3,
      },
      sotto: {
        svg: loadSVG("./assets/1-12.svg"),
        angolo: -1,
      },
      centro: {
        svg: loadSVG("./assets/1-11.svg"),
        angolo: 1,
      },
      sopra: {
        svg: loadSVG("./assets/1-10.svg"),
        angolo: 2,
      },
      
    },
    
  ];

  font = loadFont("./fonts/EMOLAND REGULAR_0.TTF");
}

function setup() {
  createCanvas(400, 600, SVG);
  addDownloadButton();
  imageMode(CENTER);
}

function draw() {
  clear();
  background("white");

  angle1 += speed1;
  angle2 += speed2;

  // 先绘制图形（底层）
  for (let grafica of grafiche) {
    disegnaGrafica(grafica);
  }

  // 然后绘制文字（上层 + 透明）
  let lettereX = [
    (width * 2) / 6, // 0
    (width * 4) / 6, // 1
  ];
  let lettereY = [
    (height * 2) / 8, // 0
    (height * 4) / 8, // 1
    (height * 6) / 8, // 2
  ];

// 字体绘制（正片叠底）
blendMode(MULTIPLY); // 切换到正片叠底模式

textFont(font);
textSize(200);
let fontColor = color("#f4bc1f");
fontColor.setAlpha(190); // 设置透明度
fill(fontColor);
textAlign(CENTER, CENTER);

text("G", lettereX[0], lettereY[0]);
text("I", lettereX[1]-6, lettereY[0]);
text("O", lettereX[0], lettereY[1]);
text("I", lettereX[0], lettereY[2]);
text("A", lettereX[1] + 8, lettereY[2]);

blendMode(BLEND); // 恢复正常混合模式


}


//GRAFIC-X-Y
function disegnaGrafica(grafica) {
  let x = grafica.posizione.colonna * 100;
  let y = grafica.posizione.riga * 100;


  //ALL GRAFIC-SOTTO-CENTRO-SOPRA
  push();
  translate(x, y);
  rotate(angle1 * grafica.sotto.angolo);
  image(grafica.sotto.svg, 0, 0, 100, 100);
  pop();

  push();
  translate(x, y);
  rotate(angle1 * grafica.centro.angolo);
  image(grafica.centro.svg, 0, 0, 100, 100);
  pop();

   push();
  translate(x, y);
  rotate(angle1 * grafica.sopra.angolo);
  image(grafica.sopra.svg, 0, 0, 100, 100);
  pop();

  
}