const fetchData = require("./utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

const anotherFunction = async (url_api) => {
  try {
    const data = await fetchData(url_api);
    const personajeCount = data.info.count;

    const character = await fetchData(`${API}${data.results[0].id}`);
    const rickName = character.name;

    const origin = await fetchData(character.origin.url);
    const rickDimension = origin.dimension;

    console.log({ personajeCount, rickName, rickDimension });
  } catch (error) {
    console.error(error);
  }
};

console.log("Before");
anotherFunction(API);
console.log("After");
