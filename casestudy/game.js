const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let hero = {
  image: new Image(),
  top: 250,
  left: 10,
  size: 90,
  speed: 20 // Tốc độ di chuyển của nhân vật
};

hero.image.src = 'https://png.pngtree.com/png-clipart/20230916/original/pngtree-funny-cartoon-character-running-sticker-clipart-vector-png-image_12255691.png';

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(hero.image, hero.left, hero.top, hero.size, hero.size);
}

function update() {
  // Kiểm tra nếu nhân vật đã vượt qua giữa màn hình
  if (hero.left + hero.size / 2 > canvas.width / 2) {
    // Tính toán vị trí mới của màn hình dựa trên vị trí của nhân vật
    let newCanvasLeft = hero.left - canvas.width / 2 + hero.size / 2;
    // Kiểm tra xem vị trí mới có nằm trong giới hạn của màn hình không
    if (newCanvasLeft < 0) {
      newCanvasLeft = 0;
    } else if (newCanvasLeft > canvas.width) {
      newCanvasLeft = canvas.width;
    }
    // Di chuyển màn hình theo vị trí mới
    window.scrollTo(newCanvasLeft, 0);
  }
  // Di chuyển nhân vật
  if (hero.left < canvas.width - hero.size) {
    hero.left += hero.speed;
  }
}

function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

gameLoop();
