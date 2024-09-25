// window element
window.addEventListener('load', () => {
    resize(); // Resizes the canvas once the window loads
    document.addEventListener('mousedown', startPainting);
    document.addEventListener('mouseup', stopPainting);
    document.addEventListener('mousemove', sketch);
    window.addEventListener('resize', resize);
  });
  
  // declare variables
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d'); // canvas for 2 dimensional operations
  let coord = { x: 0, y: 0 }; // Stores the initial position of the cursor
  let paint = false; // trigger drawing
  
  // Resizes the canvas to the available size of the window.
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  // Updates the coordinates of the cursor
  function getPosition(event) {
    coord.x = event.clientX - canvas.offsetLeft;
    coord.y = event.clientY - canvas.offsetTop;
  }
  
  // start and stop drawing
  function startPainting(event) {
    paint = true;
    getPosition(event);
  }
  
  function stopPainting() {
    paint = false;
  }
  
  // Fungsi untuk menggambar
  function sketch(event) {
    if (!paint) return;
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "green";
    ctx.moveTo(coord.x, coord.y);
    getPosition(event);
    ctx.lineTo(coord.x, coord.y);
    ctx.stroke();
  }