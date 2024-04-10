let obstacle = {
  image: new Image(),
  top: 10,
  left: 100,
  size: 100,
};

obstacle.image.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPQgTC_C8NChZgrJbr_tp63oEOAYiDWlvY0w&s";
const ctx = document.getElementById('gameCanvas').getContext('2d');

obstacle.image.onload = () => {
  ctx.drawImage(obstacle.image, obstacle.left, obstacle.top, obstacle.size, obstacle.size);
};

// Cập nhật vị trí của id "score" khi cuộn trang
window.addEventListener('scroll', function() {
  let scoreDiv = document.getElementById('score');
  // Kiểm tra nếu trang được cuộn xuống ít nhất 10px thì cập nhật vị trí của div
  if (window.pageYOffset >= 10) {
    scoreDiv.style.top = window.pageYOffset + 'px';
  } else {
    scoreDiv.style.top = '10px'; // Nếu không, giữ vị trí top là 10px
  }
});
