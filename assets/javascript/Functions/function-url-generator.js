
import { games } from "../db.js";

games.forEach(element => {

    element.image = "./assets/" + element.image;

});

export {games}