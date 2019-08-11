const imagemin = require('imagemin');
const webp = require('imagemin-webp');

(async () => {
  const files = await imagemin(
    ['src/assets/gallery/*.jpg'],
    {
      destination: 'src/assets/gallery',
      plugins: [
        webp({ quality: 90 })
      ]
    }
  )
  console.log(files)
})();