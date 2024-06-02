import p5 from "p5";

new p5((p) => {
  let customFont;

  p.preload = function () {
    // Replace with a known good font file
    customFont = p.loadFont("AnotherFont.otf");
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textFont(customFont);
    p.textSize(48);
    p.fill(255);
    p.textAlign(p.CENTER, p.CENTER);
  };

  p.draw = function () {
    p.background(0);
    p.text("Test Text", p.width / 2, p.height / 2);
  };
});
