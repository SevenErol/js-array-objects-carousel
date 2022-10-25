
class Game {

    /**
     * 
     * @param {string} image string of image URL
     * @param {string} title string for image title
     * @param {string} text string for image description
     */
    
    constructor (image, title, text) {

        this.image = image
        this.title = title
        this.text = text
    }
}

export {Game as default}