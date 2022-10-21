
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

generateURL(images);

const slides = document.querySelector(".slides");

const titleDescription = document.querySelector(".title_and_description");

const previous = document.querySelector(".previous");

const next = document.querySelector(".next");

const thumbs = document.querySelector(".thumbs");

let imgPosition = 0;

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

const allTitles = document.querySelectorAll(".title_and_description h3");

const allDescriptions = document.querySelectorAll(".title_and_description p");

const allImages = document.querySelectorAll(".slides img");

allImages[imgPosition].classList.add("active");

allTitles[imgPosition].classList.add("active");

allDescriptions[imgPosition].classList.add("active");


previous.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    allTitles[imgPosition].classList.remove("active");

    allDescriptions[imgPosition].classList.remove("active");

    allOverlay[imgPosition].classList.remove("no_overlay");

    imgPosition--;

    if (imgPosition < 0) {

        imgPosition = images.length - 1;
        allImages[imgPosition].classList.add("active");

        allTitles[imgPosition].classList.add("active");

        allDescriptions[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");


    } else {

        allImages[imgPosition].classList.add("active");

        allTitles[imgPosition].classList.add("active");

        allDescriptions[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");

    }
})

next.addEventListener("click", function () {

    allImages[imgPosition].classList.remove("active");

    allTitles[imgPosition].classList.remove("active");

    allDescriptions[imgPosition].classList.remove("active");

    allOverlay[imgPosition].classList.remove("no_overlay");

    imgPosition++;

    if (imgPosition > images.length - 1) {

        imgPosition = 0;
        allImages[imgPosition].classList.add("active");

        allTitles[imgPosition].classList.add("active");

        allDescriptions[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");


    } else {

        allImages[imgPosition].classList.add("active");

        allTitles[imgPosition].classList.add("active");

        allDescriptions[imgPosition].classList.add("active");

        allOverlay[imgPosition].classList.add("no_overlay");

    }
})

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

const allOverlay = document.querySelectorAll(".single_thumb div");



