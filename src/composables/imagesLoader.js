// imageLoader.js
import imagePaths from '@/assets/imagePaths.json'; // Adjust the path as necessary

const imageLoader = {
    getImage(imageName) {
        const imagePath = imagePaths.images[imageName];

        if (imagePath) {
            // Dynamically require the image from its path
            return require(`${imagePath}`);
        } else {
            console.error(`Image not found: ${imageName}`);
            // Optionally return a default image or null
            return null;
        }
    }
};

export default imageLoader;
