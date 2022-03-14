import sharp from 'sharp';

const configurarTamanho = async function (
  imageName: string,
  width: number,
  height: number
) {
  try {
    await sharp(`./public/full/${imageName}.jpg`)
      .resize(width, height, {
        fit: 'contain'
      })
      .toFile(`./public/thumb/${imageName}-${width}-${height}.jpg`);
  } catch (error) {
    console.log('catch error');
    console.log(error);
  }
};

export default configurarTamanho;
