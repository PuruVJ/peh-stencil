const imagemin = require("imagemin");
const IMMozJpeg = require("imagemin-mozjpeg");

(async () => {
  const files = await imagemin(["src/assets/gallery/*-large.jpg"], {
    destination: "src/assets/gallery-placeholder",
    plugins: [
      IMMozJpeg({
        quality: 5,
      }),
    ],
  });

  console.log(files);
})();
