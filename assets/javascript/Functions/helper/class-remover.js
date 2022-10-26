
/**
 * 
 * @param {array} nodeList nodeList from DOM
 * @param {number} position number for position of an element
 * @param {string} className string for class name
 */

 const classRemover = (nodeList, position, className) => {

    nodeList[position].classList.remove(className);

}

export {classRemover};