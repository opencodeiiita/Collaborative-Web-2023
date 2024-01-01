document.addEventListener("DOMContentLoaded", function () {
  let columns = Math.floor(document.body.clientWidth / 50);
  let rows = Math.floor(document.body.clientHeight / 50);

  const wrapper = document.getElementById("tiles");

  const createTile = (index) => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    return tile;
  };

  const createTiles = (quantity) => {
    Array.from(Array(quantity)).map((tile, index) => {
      wrapper.appendChild(createTile(index));
    });
  };
  const createGrid = () => {
    wrapper.innerHTML = "";
    columns = Math.floor(screen.width / 50);
    rows = Math.floor(screen.height / 50);
    wrapper.style.setProperty("--columns", columns);
    wrapper.style.setProperty("--rows", rows);
    createTiles(columns * rows);
  };
  createGrid();
  window.onresize = () => createGrid();
});

//add a interval after which a random tile is selected and a class is added to it to change its color
setInterval(() => {
  const tiles = document.querySelectorAll(".tile");
  const randomTile = tiles[Math.floor(Math.random() * tiles.length)];
  randomTile.classList.add("tile-active");
  setTimeout(() => {
    randomTile.classList.remove("tile-active");
  }, 2000);
}, 500);
