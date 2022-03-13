import sharp from 'sharp';

const configurarTamanho = async function (
  imageName: string,
  width: any,
  height: any
) {
  try {
    await sharp(`../assets/full/${imageName}.jpg`)
      .resize(parseInt(width), parseInt(height), {
        fit: 'contain'
      })
      .toFile(`../assets/thumb/${imageName}-${width}-${height}.jpg`);
  } catch (error) {
    console.log(error);
  }
};

configurarTamanho('santamonica', 300, 300)

export default configurarTamanho;