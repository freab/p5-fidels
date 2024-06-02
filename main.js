import p5 from "p5";
import Matter from "matter-js";

// Initialize p5.js sketch
new p5((p) => {
  let engine;
  let world;
  let ground;
  let polygons = [];
  let str_n = 0;

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);

    engine = Matter.Engine.create();
    world = engine.world;
    engine.world.gravity.scale = 0.002;

    let groundOptions = {
      isStatic: true
    };
    ground = Matter.Bodies.rectangle(
      p.width / 2,
      p.height - 10,
      p.width,
      20,
      groundOptions
    );
    Matter.World.add(world, ground);
  };

  p.draw = function () {
    p.background(20);

    if (p.frameCount % 15 === 0) mousePressed(p.width / 2, 50);

    Matter.Engine.update(engine);

    p.fill(170);
    p.noStroke();
    p.rectMode(p.CENTER);
    p.rect(ground.position.x, ground.position.y, p.width, 20);

    for (let i = polygons.length - 1; i >= 0; i--) {
      let polygon = polygons[i];

      p.push();
      p.translate(polygon.position.x, polygon.position.y);
      p.rotate(polygon.angle);
      p.textAlign(p.CENTER, p.CENTER);
      p.fill(polygon.color);
      p.noStroke();
      p.textFont("serif");
      p.textSize(polygon.radius * 2);
      p.text(polygon.string, 0, 0);
      p.pop();

      if (polygon.position.y > p.height + 100) {
        Matter.World.remove(world, polygon);
        polygons.splice(i, 1);
      }
    }
  };

  p.windowResized = function () {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
    Matter.Body.setPosition(ground, { x: p.width / 2, y: p.height - 10 });
    Matter.Body.setVertices(ground, [
      { x: p.width / 2 - p.width / 2, y: p.height - 10 - 10 },
      { x: p.width / 2 + p.width / 2, y: p.height - 10 - 10 },
      { x: p.width / 2 + p.width / 2, y: p.height - 10 + 10 },
      { x: p.width / 2 - p.width / 2, y: p.height - 10 + 10 }
    ]);
  };

  function mousePressed(x = p.mouseX, y = p.mouseY) {
    let sides = p.int(p.random(3, 8));
    let radius = p.random(20, 50);
    let angle = (p.random(p.TWO_PI) / 180) * (p.random() > 0.5 ? -1 : 1);
    let options = {
      restitution: 0.1
    };
    let polygon = Matter.Bodies.circle(x, y, radius, options);
    polygon.angle = angle;
    polygon.string = str[p.int(p.random(str.length))];
    polygon.radius = radius;
    polygon.color = p.color(p.random(255), p.random(255), p.random(255));
    polygon.rotationSpeed = p.random(-0.05, 0.05);

    Matter.World.add(world, polygon);
    polygons.push(polygon);
  }

  let str = [
    "ሀ",
    "ሁ",
    "ሂ",
    "ሃ",
    "ሄ",
    "ህ",
    "ሆ",
    "ለ",
    "ሉ",
    "ሊ",
    "ላ",
    "ሌ",
    "ል",
    "ሎ",
    "ሐ",
    "ሑ",
    "ሒ",
    "ሓ",
    "ሔ",
    "ሕ",
    "ሖ",
    "መ",
    "ሙ",
    "ሚ",
    "ማ",
    "ሜ",
    "ም",
    "ሞ",
    "ሠ",
    "ሡ",
    "ሢ",
    "ሣ",
    "ሤ",
    "ሥ",
    "ሦ",
    "ረ",
    "ሩ",
    "ሪ",
    "ራ",
    "ሬ",
    "ር",
    "ሮ",
    "ሰ",
    "ሱ",
    "ሲ",
    "ሳ",
    "ሴ",
    "ስ",
    "ሶ",
    "ሸ",
    "ሹ",
    "ሺ",
    "ሻ",
    "ሼ",
    "ሽ",
    "ሾ",
    "ቀ",
    "ቁ",
    "ቂ",
    "ቃ",
    "ቄ",
    "ቅ",
    "ቆ",
    "በ",
    "ቡ",
    "ቢ",
    "ባ",
    "ቤ",
    "ብ",
    "ቦ",
    "ተ",
    "ቱ",
    "ቲ",
    "ታ",
    "ቴ",
    "ት",
    "ቶ",
    "ቸ",
    "ቹ",
    "ቺ",
    "ቻ",
    "ቼ",
    "ች",
    "ቾ",
    "ኀ",
    "ኁ",
    "ኂ",
    "ኃ",
    "ኄ",
    "ኅ",
    "ኆ",
    "ኈ",
    "ኊ",
    "ኋ",
    "ኌ",
    "ኍ",
    "ነ",
    "ኑ",
    "ኒ",
    "ና",
    "ኔ",
    "ን",
    "ኖ",
    "ኘ",
    "ኙ",
    "ኚ",
    "ኛ",
    "ኜ",
    "ኝ",
    "ኞ",
    "አ",
    "ኡ",
    "ኢ",
    "ኣ",
    "ኤ",
    "እ",
    "ኦ",
    "ከ",
    "ኩ",
    "ኪ",
    "ካ",
    "ኬ",
    "ክ",
    "ኮ",
    "ኰ",
    "኱",
    "ኲ",
    "ኳ",
    "ኴ",
    "ኵ",
    "኶",
    "ኸ",
    "ኹ",
    "ኺ",
    "ኻ",
    "ኼ",
    "ኽ",
    "ኾ",
    "ወ",
    "ዉ",
    "ዊ",
    "ዋ",
    "ዌ",
    "ው",
    "ዎ",
    "ዐ",
    "ዑ",
    "ዒ",
    "ዓ",
    "ዔ",
    "ዕ",
    "ዖ",
    "ዘ",
    "ዙ",
    "ዚ",
    "ዛ",
    "ዜ",
    "ዝ",
    "ዞ",
    "ዠ",
    "ዡ",
    "ዢ",
    "ዣ",
    "ዤ",
    "ዥ",
    "ዦ",
    "የ",
    "ዩ",
    "ዪ",
    "ያ",
    "ዬ",
    "ይ",
    "ዮ",
    "ደ",
    "ዱ",
    "ዲ",
    "ዳ",
    "ዴ",
    "ድ",
    "ዶ",
    "ጀ",
    "ጁ",
    "ጂ",
    "ጃ",
    "ጄ",
    "ጅ",
    "ጆ",
    "ገ",
    "ጉ",
    "ጊ",
    "ጋ",
    "ጌ",
    "ግ",
    "ጎ",
    "ጠ",
    "ጡ",
    "ጢ",
    "ጣ",
    "ጤ",
    "ጥ",
    "ጦ",
    "ጰ",
    "ጱ",
    "ጲ",
    "ጳ",
    "ጴ",
    "ጵ",
    "ጶ",
    "ጸ",
    "ጹ",
    "ጺ",
    "ጻ",
    "ጼ",
    "ጽ",
    "ጾ",
    "ፀ",
    "ፁ",
    "ፂ",
    "ፃ",
    "ፄ",
    "ፅ",
    "ፆ",
    "ፈ",
    "ፉ",
    "ፊ",
    "ፋ",
    "ፌ",
    "ፍ",
    "ፎ",
    "ፐ",
    "ፑ",
    "ፒ",
    "ፓ",
    "ፔ",
    "ፕ",
    "ፖ",
    "፠",
    "፡",
    "።",
    "፣",
    "፤",
    "፥",
    "፦",
    "፧",
    "፨",
    "፩",
    "፪",
    "፫",
    "፬",
    "፭",
    "፮",
    "፯",
    "፰",
    "፱",
    "፲",
    "፳",
    "፴",
    "፵",
    "፶",
    "፷",
    "፸",
    "፹",
    "፺",
    "፻",
    "፼"
  ];
});
