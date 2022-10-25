
import  Game  from "./Classes/Game.js";

const spiderMan = new Game('img/01.webp', 'Marvel\'s Spiderman Miles Morale', 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.' );

const ratchetClank = new Game('img/02.webp', 'Ratchet & Clank: Rift Apart', 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.');

const fortnite = new Game('img/03.webp', 'Fortnite', "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.");

const stray = new Game('img/04.webp', 'Stray', 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city');

const avengers = new Game('img/05.webp', "Marvel's Avengers", 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.');

const games = [spiderMan, ratchetClank, fortnite, stray, avengers];

export {games}