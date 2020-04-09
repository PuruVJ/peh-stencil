const domColor = require("dominant-color");

const images = [9, 1, 2, 3, 6, 7, 8, 10, 4, 5, 9].map((x) => ({
  num: x,
  path: `./src/assets/gallery/${x}-large.jpg`,
}));

const colors = images.forEach((url) => {
  console.log(url.path);
  domColor(url.path, { format: "hex" }, (e, color) => {
    console.log(color);
  });
});

console.log(colors);
