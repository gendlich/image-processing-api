const sharp = require('sharp');

var transformer = async function () {
    try {
        await sharp ('../assets/full/fjord.jpg')
            .resize(300, 300, {
                fit: 'contain',
            })
            .toFile('../assets/thumb/fjord300.jpg')
    } catch (error) {
        console.log(error);
    }
}

module.exports = transformer;