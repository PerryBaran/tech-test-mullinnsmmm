import axios from "axios";

function getImages (query) {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items; 
                
            const parsedImages = imageResults.filter((object) => object.data[0].media_type==="images");
            const images = parsedImages.map(images => images.links[0].href);

            return images

            })
        .catch((error) => {
            console.log(error);
        });
    }
};

export default getImages;