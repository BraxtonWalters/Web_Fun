
function likeIncreaser(elemID) {
    // init a var to hold the INT val parsed from the element ID innertext 
    let numLikes = parseInt(document.getElementById(elemID).innerText);
    console.log(numLikes);
    // increment the numlikes val 
    numLikes++;
    // resetting the innerText with the new num val using the element ID provided as a param 
    document.getElementById(elemID).innerText = `${numLikes} like(s)`;
}
