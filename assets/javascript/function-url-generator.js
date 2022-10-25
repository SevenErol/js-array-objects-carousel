
import { games } from "./db.js";

games.forEach((element, index, array) => {

    array[index].image = "./assets/" + element.image;

});

export {games}
