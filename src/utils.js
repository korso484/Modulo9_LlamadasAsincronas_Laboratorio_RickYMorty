const createCharacterRow = (character) => {
    const element = document.createElement("div");
    const avatar = createAvatar(character);
    element.appendChild(avatar);
    const link = createRowText(character);
    element.appendChild(link);
    element.className = "character-row";
    return element;
};

const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character["image"];
    return element;
};

const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character["name"]);
    return element;
};

const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 350;
    element.src = character["image"];
    return element;
};

const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
};

const createEpisodeRowText = (episode) => {
    const element = document.createElement("span");
    element.append(episode.id + " ");
    element.append(episode.name);
    return element;
};

const createEpisodeRow = (episode) => {
    const element = document.createElement("div");
    const link = createEpisodeRowText(episode);
    element.appendChild(link);
    element.className = "episode-row";
    return element;
};

const showCharacter = (character) => {

    const characterDetail = document.getElementById("character-detail");
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(
        createParagraph("Species: " + character.species)
    );
    characterDetail.appendChild(
        createParagraph("Status: " + character.status)
    );
};

const showEpisode = (episode) => {

    const episodeDetail = document.getElementById("episode-detail");
    episodeDetail.innerHTML = "";
    episodeDetail.appendChild(createParagraph("Title: " + episode.name));
    episodeDetail.appendChild(createParagraph("Season: " + episode.episode));
    episodeDetail.appendChild(createParagraph("Air Date: " + episode.air_date));
};



export { createCharacterRow, createEpisodeRow, showCharacter, showEpisode };
