function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); 
    //畫布的背景顏色為9b5de5(9b為十六進位的值，翻成十進位為155，5d為十六進位的值，翻成十進位為93，e5為十六進位的值，翻成十進位為229)
    background(155, 93, 229);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //計算方形和圓形的大小，範圍從100到500
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    //畫布的背景顏色為9b5de5(9b為十六進位的值，翻成十進位為155，5d為十六進位的值，翻成十進位為93，e5為十六進位的值，翻成十進位為229)
    background(155, 93, 229);
  
    //設定畫方框的顏色為f15bb5(f1為十六進位的值，翻成十進位為241，5b為十六進位的值，翻成十進位為91，b5為十六進位的值，翻成十進位為181)
    fill(241, 91, 181);
    //設定畫方框邊框的顏色為fee440(fe為十六進位的值，翻成十進位為254，e4為十六進位的值，翻成十進位為228，40為十六進位的值，翻成十進位為64)
    stroke(254, 228, 64);
    //設定畫方框邊框的寬度為10
    strokeWeight(10);
    rectMode(CENTER); //設定方框的中心點為基準
  
    //畫一整排的方框和圓形
    let spacing = size + 20; //設定間距
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        rect(x, y, size, size); //畫方框
  
        //設定畫園的顏色為00bbf9(00為十六進位的值，翻成十進位為0，bb為十六進位的值，翻成十進位為187，f9為十六進位的值，翻成十進位為249)
        fill(0, 187, 249);
        //設定畫園邊框的顏色為00f5d4(00為十六進位的值，翻成十進位為0，f5為十六進位的值，翻成十進位為245，d4為十六進位的值，翻成十進位為212)
        stroke(0, 245, 212);
        ellipse(x, y, size, size); //畫圓形
      }
    }
  }
  
  //當視窗大小改變時，重新設定畫布寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }