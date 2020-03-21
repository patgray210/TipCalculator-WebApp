function draw() {
    var canvas = document.getElementById('myCanvas');
    if (canvas.getContext) {
      var box = canvas.getContext('2d');

      box.fillStyle = 'rgb(255, 255, 0)';
      box.fillRect(10, 10, 50, 50);

      box.fillStyle = 'rgba(0, 0, 200, 0.5)';
      box.fillRect(30, 30, 50, 50);
    }
}
draw();