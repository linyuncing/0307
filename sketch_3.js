function setup() { //設定函數，初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight); 
    //設定顏色模式為HSB，色相範圍為0-360，飽和度和亮度範圍為0-100
    colorMode(HSB, 360, 100, 100);
    //畫布的背景顏色為HSB(270, 60, 90)
    background(270, 60, 90);
  }
  
  function draw() { //畫圖函數，畫圖的地方
    //計算方形和圓形的大小，範圍從100到500
    let size = map(mouseX, 0, windowWidth, 100, 500);
  
    //畫布的背景顏色為HSB(270, 40, 100)
    background(270, 40, 100);
  
    //設定畫方框的顏色為HSB(300, 40, 95)
    fill(300, 40, 95);
    //設定畫方框邊框的顏色為HSB(80, 70, 120)
    stroke(80, 70, 120);
    //設定畫方框邊框的寬度為10
    strokeWeight(10);
    rectMode(CENTER); //設定方框的中心點為基準
  
    //畫一整排的方框和圓形
    let spacing = size + 20; //設定間距
    for (let x = spacing / 2; x < windowWidth; x += spacing) {
      for (let y = spacing / 2; y < windowHeight; y += spacing) {
        rect(x, y, size, size); //畫方框
  
        //設定畫園的顏色為HSB(180, 100, 100)
        fill(180, 100, 100);
        //設定畫園邊框的顏色為HSB(200, 100, 95)
        stroke(200, 100, 95);
        ellipse(x, y, size, size); //畫圓形
      }
    }
  }
  
  //當視窗大小改變時，重新設定畫布寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }