import "./styles.css";
import * as DataBusiness from "./data-business.js";
import * as Utils from "./utils.js";


DataBusiness.getCharacters().then((characters) => {
    const rows = [];
    for (var i = 0; i < characters.results.length; i++) {
        let character = characters.results[i];
        const row = Utils.createCharacterRow(character);
        row.onclick = function () {
            Utils.showCharacter(character);
        };
        rows.push(row);
    }

    for (let row of rows) {
        document.getElementById("root").append(row);
    };
});

DataBusiness.getEpisodes().then((episodes) => {
    const rows = [];

    for (var i = 0; i < episodes.results.length; i++) {
        let episode = episodes.results[i];
        const row = Utils.createEpisodeRow(episode);
        row.onclick = function () {
            console.log(episode.id);
            Utils.showEpisode(episode);
        };
        rows.push(row);
    }

    for (let row of rows) {
        document.getElementById("episode").append(row);
    };
});