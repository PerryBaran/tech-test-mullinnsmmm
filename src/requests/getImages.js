import axios from "axios";

function getImages (query) {
    if (!query) {
        return Promise.resolve([]);
    } else {
        return axios
        .get(`https://images-api.nasa.gov/search?q=${query}`)
        .then((response) => {
            const imageResults = response.data.collection.items; 
                

            })
        .catch((err) => {
            console.log(err);
        });
    }
};

export default getImages;