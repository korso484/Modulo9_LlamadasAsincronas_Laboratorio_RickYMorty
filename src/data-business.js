import axios from "axios";

function getEpisodes() {
    return axios
        .get("https://rickandmortyapi.com/api/episode/")
        .then((response) => {
            const myPromise = new Promise((resolve) => {
                resolve(response.data);
            });
            return myPromise;
        });
}

function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character/")
        .then((response) => {

            return response.data;
        })

}

export { getCharacters, getEpisodes };