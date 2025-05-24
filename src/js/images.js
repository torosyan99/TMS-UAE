const requireIcons = require.context('../assets/icons', true, /\.(svg)$/);
const icons = {};
requireIcons.keys().forEach((fileName) => {
  const key = fileName.replace('./', '').replace('.svg', '');
  icons[key] = requireIcons(fileName);
});

const requirePhotos = require.context('../assets/images', true, /\.(png|jpe?g|webp)$/);

const photos = {};
requirePhotos.keys().forEach((fileName) => {
  const key = fileName.replace('./', '').replace(/\.(png|jpe?g|webp)$/, '');
  photos[key] = requirePhotos(fileName);
});

