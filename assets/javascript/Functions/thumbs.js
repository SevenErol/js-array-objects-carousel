
/**
 * 
 * @param {array} games array of obejcts
 * @param {element} thumbs DOM element
 */


const createThumbs = (games, thumbs) => {

    games.forEach(element => {

        const singleThumb = document.createElement("div");

        const thumbImage = document.createElement("img");

        const overlay = document.createElement("div");

        singleThumb.classList.add("single_thumb");

        overlay.classList.add("overlay");

        thumbImage.src = element.image;

        thumbs.appendChild(singleThumb);

        singleThumb.appendChild(thumbImage);

        singleThumb.appendChild(overlay);

    })

};

export {createThumbs};
