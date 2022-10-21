
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// function for generating URL 

function generateURL(objectList) {

    for (let i = 0; i < objectList.length; i++) {

        let stringImage = objectList[i].image;

        let imageURL = "./assets/" + stringImage;

        objectList[i].image = imageURL
    }

}

// invoking function to generate URL in my list

generateURL(images);

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

const createSlides = images => {

    for (let i = 0; i < images.length; i++) {

        const thisImage = document.createElement("img");

        thisImage.src = images[i].image;

        slides.appendChild(thisImage);

        const title = document.createElement("h3");

        const description = document.createElement("p");

        title.innerHTML = images[i].title;

        description.innerHTML = images[i].text;

        titleDescription.appendChild(title);

        titleDescription.appendChild(description);

    }

}

// function to create thumbnails

const createThumbs = images => {

    for (let i = 0; i < images.length; i++) {

        const singleThumb = document.createElement("div");

        const thumbImage = document.createElement("img");

        const overlay = document.createElement("div");

        singleThumb.classList.add("single_thumb");

        overlay.classList.add("overlay");

        thumbImage.src = images[i].image;

        thumbs.appendChild(singleThumb);

        singleThumb.appendChild(thumbImage);

        singleThumb.appendChild(overlay);

    }

}

// invoking function to generate slides
createSlides(images);

// invoking function to generate thumbnails
createThumbs(images);

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




