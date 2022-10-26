
// import my array of objects generated dinamically
import { games } from "./Functions/urlgenerator.js";

// import function to generate slides
import { createSlides } from "./Functions/slides.js";

// import function to generate thumbnail
import { createThumbs } from "./Functions/thumbs.js";

// import function for adding class
import { classAdder } from "./Functions/helper/class-adder.js";

// import function for removing class
import { classRemover } from "./Functions/helper/class-remover.js";

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

// set image position equals zero
let imgPosition = 0;


// invoking function to generate slides
createSlides(games, slides, titleDescription);

// invoking function to generate thumbnails
createThumbs(games, thumbs);

// taking titles nodeList
const allTitles = document.querySelectorAll(".title_and_description h3");

// taking descriptions nodeList
const allDescriptions = document.querySelectorAll(".title_and_description p");

// taking images nodeList
const allImages = document.querySelectorAll(".slides img");

// taking overlays nodeList
const allOverlay = document.querySelectorAll(".single_thumb div");

// invoked functions for adding classes

classAdder(allTitles, imgPosition, "active");

classAdder(allDescriptions, imgPosition, "active");

classAdder(allImages, imgPosition, "active");

classAdder(allOverlay, imgPosition, "no_overlay");

// event listener for previous image

previous.addEventListener("click", function () {

    classRemover(allTitles, imgPosition, "active");

    classRemover(allDescriptions, imgPosition, "active");

    classRemover(allImages, imgPosition, "active");

    classRemover(allOverlay, imgPosition, "no_overlay");

    imgPosition--;

    if (imgPosition < 0) {

        imgPosition = games.length - 1;

        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");


    } else {

        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");

    }
})

// event listener for next image

next.addEventListener("click", function () {

    classRemover(allTitles, imgPosition, "active");

    classRemover(allDescriptions, imgPosition, "active");

    classRemover(allImages, imgPosition, "active");

    classRemover(allOverlay, imgPosition, "no_overlay");


    imgPosition++;

    if (imgPosition > games.length - 1) {

        imgPosition = 0;
        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");


    } else {

        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");
    }
})

// arrow function for next image

const nextImage = () => {

    classRemover(allTitles, imgPosition, "active");

    classRemover(allDescriptions, imgPosition, "active");

    classRemover(allImages, imgPosition, "active");

    classRemover(allOverlay, imgPosition, "no_overlay");

    imgPosition++;

    if (imgPosition > games.length - 1) {

        imgPosition = 0;
        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");

    } else {

        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");

    }

}

// arrow function for previous image

const previousImage = () => {

    classRemover(allTitles, imgPosition, "active");

    classRemover(allDescriptions, imgPosition, "active");

    classRemover(allImages, imgPosition, "active");

    classRemover(allOverlay, imgPosition, "no_overlay");

    imgPosition--;

    if (imgPosition < 0) {

        imgPosition = games.length - 1;
        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");


    } else {

        classAdder(allTitles, imgPosition, "active");

        classAdder(allDescriptions, imgPosition, "active");

        classAdder(allImages, imgPosition, "active");

        classAdder(allOverlay, imgPosition, "no_overlay");
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

    classRemover(allTitles, imgPosition, "active");

    classRemover(allDescriptions, imgPosition, "active");

    classRemover(allImages, imgPosition, "active");

    classRemover(allOverlay, imgPosition, "no_overlay");

    imgPosition = 0;

    classAdder(allTitles, imgPosition, "active");

    classAdder(allDescriptions, imgPosition, "active");

    classAdder(allImages, imgPosition, "active");

    classAdder(allOverlay, imgPosition, "no_overlay");

    forwardImages = setInterval(nextImage, 3000);
})

// event listener to stop auto-play

stopButton.addEventListener("click", function () {

    clearInterval(forwardImages);

    clearInterval(reverseImages);

})

// event listener for reverse auto-play

let reverseImages;

reverseButton.addEventListener("click", function () {

    clearInterval(forwardImages);

    reverseImages = setInterval(previousImage, 3000);
})
