
/**
 * 
 * @param {array} games array of obejcts
 * @param {element} slides DOM element
 * @param {element} titleDescription DOM element
 */

const createSlides = (games, slides, titleDescription) => {

    games.forEach(element => {

        const thisImage = document.createElement("img");

        thisImage.src = element.image;

        slides.appendChild(thisImage);

        const title = document.createElement("h3");

        const description = document.createElement("p");

        title.innerHTML = element.title;

        description.innerHTML = element.text;

        titleDescription.appendChild(title);

        titleDescription.appendChild(description);
    }) 

}

export {createSlides}