function setup() { //設定函數，初始值的地方
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight); 
  //設定顏色模式為HSB，色相範圍為0-360，飽和度和亮度範圍為0-100
  colorMode(HSB, 360, 100, 100);
  //畫布的背景顏色為HSB(0, 0, 100)，即白色
  background(0, 0, 100);
}

function draw() { //畫圖函數，畫圖的地方
  //計算色相和亮度
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  //設定畫圓的顏色為HSB(hue, 100, brightness)
  fill(hue, 100, brightness);
  //設定畫圓邊框的顏色為HSB(0, 0, 0)，即黑色
  stroke(0); //黑色
  //設定畫圓邊框的寬度為2
  strokeWeight(2);

  //在滑鼠位置畫一個圓，寬高為200px
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗大小改變時，重新設定畫布寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //重新設定背景顏色
  background(0, 0, 100);
}