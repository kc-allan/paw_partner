const root = './src/assets/images';

export const images = {
  logo: new URL(`${root}/logo.png`, import.meta.url).href,
  cover: new URL(`${root}/landing-page-cover.jpg`, import.meta.url).href,
};

console.log(images.logo);