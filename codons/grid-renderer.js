function GridRenderer(canvas, grid = []) {
  const c = canvas.getContext('2d');
  let width, height;
  const instance = {
    scrollX: 0,
    scrollY: 0,
    cellSize: 50,

    resize(w = window.innerWidth, h = window.innerHeight) {
      canvas.width = width = w;
      canvas.height = height = h;
      c.imageSmoothingEnabled = false;
    },

    render() {
      const {scrollX, scrollY, cellSize, getCell} = instance;
      c.clearRect(0, 0, width, height);
      const startX = Math.floor(scrollX / cellSize);
      const stopX = Math.ceil((scrollX + width) / cellSize);
      const startY = Math.floor(scrollY / cellSize);
      const stopY = Math.ceil((scrollY + height) / cellSize);
      for (let x = startX; x < stopX; x++) {
        for (let y = startY; y < stopY; y++) {
          const cell = getCell(x, y);
          if (cell) {
            c.fillStyle = cell.getColour();
            c.fillRect(x * cellSize - scrollX, y * cellSize - scrollY, cellSize, cellSize);
          }
        }
      }
    },

    getCell(x, y) {
      return grid[x] && grid[x][y];
    },

    setCell(x, y, val) {
      if (!grid[x]) grid[x] = [];
      grid[x][y] = val;
      return val;
    }
  };
  return instance;
}
