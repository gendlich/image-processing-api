import sharp from 'sharp';

const configurarTamanho = async function (
  imageName: string,
  width: number,
  height: number
) : Promise<void> {
  try {
    await sharp(`./public/full/${imageName}.jpg`)
      .resize(width, height, {
        fit: 'contain'
      })
      .toFile(`./public/thumb/${imageName}-${width}-${height}.jpg`);
  } catch (error) {
    console.log(error);
  }

};

export default configurarTamanho;
