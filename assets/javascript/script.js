

import { games } from "./function-url-generator.js";

// taking div to append title and description
const titleDescription = document.querySelector(".title_and_description");

// taking div to append slides
const slides = document.querySelector(".slides");

// taking div to append thumbnails
const thumbs = document.querySelector(".thumbs");

// taking button previous image
const previous = document.querySelector(".previous");

// taking button next image
const next = document.querySelector(".next");

let imgPosition = 0;

// function to create slides 

const createSlides = games => {

    for (let i = 0; i < games.length; i++) {

        const thisImage = document.createElement("img");

        thisImage.src = games[i].image;

        slides.appendChild(thisImage);

        const title = document.createElement("h3");

        const description = document.createElement("p");

        title.innerHTML = games[i].title;

        description.innerHTML = games[i].text;

        titleDescription.appendChild(title);

        titleDescription.appendChild(description);

    }

}

// function to create thumbnails

const createThumbs = games => {

    for (let i = 0; i < games.length; i++) {

        const singleThumb = document.createElement("div");

        const thumbImage = document.createElement("img");

        const overlay = document.createElement("div");

        singleThumb.classList.add("single_thumb");

        overlay.classList.add("overlay");

        thumbImage.src = games[i].image;

        thumbs.appendChild(singleThumb);

        singleThumb.appendChild(thumbImage);

        singleThumb.appendChild(overlay);

    }

}

// invoking function to generate slides
createSlides(games);

// invoking function to generate thumbnails
createThumbs(games);

// taking titles nodeList
const allTitles = document.querySelectorAll(".title_and_description h3");

// taking decsriptions nodeList
const allDescriptions = document.querySelectorAll(".title_and_description p");

// taking images nodeList
const allImages = document.querySelectorAll(".slides img");

// taking overlays nodeList
const allOverlay = document.querySelectorAll(".single_thumb div");

// function for adding class active
const activeAdder = (nodeList, position) => {

    nodeList[position].classList.add("active");

}

// function for removing class active
const activeRemover = (nodeList, position) => {

    nodeList[position].classList.remove("active");

}

// function for adding class no_overlay
const noOverlayAdder = (nodeList, position) => {

    nodeList[position].classList.add("no_overlay");

}

// function for removing class no_overlay
const noOverlayRemover = (nodeList, position) => {

    nodeList[position].classList.remove("no_overlay");

}

// invoked functions for adding classes

activeAdder(allTitles, imgPosition);

activeAdder(allDescriptions, imgPosition);

activeAdder(allImages, imgPosition);

noOverlayAdder(allOverlay, imgPosition);

// event listener for previous image

previous.addEventListener("click", function () {

    activeRemover(allTitles, imgPosition);

    activeRemover(allDescriptions, imgPosition);

    activeRemover(allImages, imgPosition);

    noOverlayRemover(allOverlay, imgPosition);

    imgPosition--;

    if (imgPosition < 0) {

        imgPosition = images.length - 1;

        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);


    } else {

        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);

    }
})

// event listener for next image

next.addEventListener("click", function () {

    activeRemover(allTitles, imgPosition);

    activeRemover(allDescriptions, imgPosition);

    activeRemover(allImages, imgPosition);

    noOverlayRemover(allOverlay, imgPosition);


    imgPosition++;

    if (imgPosition > images.length - 1) {

        imgPosition = 0;
        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);


    } else {

        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);

    }
})

// arrow function for next image

const nextImage = () => {

    activeRemover(allTitles, imgPosition);

    activeRemover(allDescriptions, imgPosition);

    activeRemover(allImages, imgPosition);

    noOverlayRemover(allOverlay, imgPosition);


    imgPosition++;

    if (imgPosition > games.length - 1) {

        imgPosition = 0;
        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);


    } else {

        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);

    }

}

// arrow function for previous image

const previousImage = () => {

    activeRemover(allTitles, imgPosition);

    activeRemover(allDescriptions, imgPosition);

    activeRemover(allImages, imgPosition);

    noOverlayRemover(allOverlay, imgPosition);


    imgPosition--;

    if (imgPosition < 0 ) {

        imgPosition = games.length - 1;
        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);


    } else {

        activeAdder(allTitles, imgPosition);

        activeAdder(allDescriptions, imgPosition);

        activeAdder(allImages, imgPosition);

        noOverlayAdder(allOverlay, imgPosition);

    }

}

// interval for scrolling images forward every tot seconds
let forwardImages = setInterval(nextImage, 3000);

// taking start auto-play button
const startButton = document.querySelector(".start");

// taking stop auto-play button
const stopButton = document.querySelector(".stop");

// takin reverse auto-play button
const reverseButton = document.querySelector(".reverse");

// event listener to start auto-play
startButton.addEventListener("click", function () {

    clearInterval(forwardImages);

    clearInterval(reverseImages);

    activeRemover(allTitles, imgPosition);

    activeRemover(allDescriptions, imgPosition);

    activeRemover(allImages, imgPosition);

    noOverlayRemover(allOverlay, imgPosition);

    imgPosition = 0;

    activeAdder(allTitles, imgPosition);

    activeAdder(allDescriptions, imgPosition);

    activeAdder(allImages, imgPosition);

    noOverlayAdder(allOverlay, imgPosition);

    forwardImages = setInterval(nextImage, 3000) ;
})

// event listener to stop auto-play

stopButton.addEventListener("click", function () {

    clearInterval(forwardImages);

    clearInterval(reverseImages);

})

// event listener for reverse auto-play

let reverseImages;

reverseButton.addEventListener("click", function (){

    clearInterval(forwardImages);

    reverseImages = setInterval(previousImage, 3000);
})
