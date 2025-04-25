function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); 
    //畫布的背景顏色為9b5de5(9b為十六進位的值，翻成十進位為155，5d為十六進位的值，翻成十進位為93，e5為十六進位的值，翻成十進位為229)
    background(155, 93, 229);
  }
  
  function draw() { //畫圖函數，畫圖的地方
  
    //畫布的背景顏色為9b5de5(9b為十六進位的值，翻成十進位為155，5d為十六進位的值，翻成十進位為93，e5為十六進位的值，翻成十進位為229)
    background(155, 93, 229);
    //設定畫園的顏色為f15bb5(f1為十六進位的值，翻成十進位為241，5b為十六進位的值，翻成十進位為91，b5為十六進位的值，翻成十進位為181)
    fill(241, 91, 181);
    //設定畫園邊框的顏色為fee440(fe為十六進位的值，翻成十進位為254，e4為十六進位的值，翻成十進位為228，40為十六進位的值，翻成十進位為64)
    stroke(254, 228, 64);
    //設定畫園邊框的寬度為10
    strokeWeight(10);
    //在視窗的中間畫一個塗，園的寬高為200
    //ellipse(windowWidth / 2, windowHeight / 2, 200, 200);
    //依照上面的園顏色與邊框顏色，從視窗的最左邊，產生連續的園，到視窗的最右邊
    for (let i = 0; i < windowWidth; i += 200) {
      ellipse(i, windowHeight / 2, 200, 200);
    }
  }
  //當視窗大小改變時，重新設定畫布寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }