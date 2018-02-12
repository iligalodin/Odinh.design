//-------------------------------------
//   the design and the functionallity
//   of this website is copyright of
//   Odinn Hullekes @ Odinh.Design
//   E-mail   :  Info@Odinh.Design
//   Website  :  Odinh.design
//-----------------------------------

//----- global var declaration ---//
var index = index,
    nav,
    pages = index.menu.pages,
    carousel,
    carouselImages = index.carousel,
    carouselLoop,
    carouselCounter = 1,
    reverse = false,
    carouselInterval = 4000,
    noLoop = false; //  <- trigger to stop all loops (which is a total of one at this moment)
//----- -----//

//----- these functions are general purpoise functions -----//
function getID(x) {
    "use strict";
    //  function to reduce the typing i need to do which i totally ruin by typing all these coments 
    //  :)
    //  basicallt changes document.getElementById("foo") to getID("foo")
    return document.getElementById(x);
}
// CHANGES made the addAttributes function obsolete and replaced it with a better function: createElement
// CHANGES made a createElement function to declutter the code used in the buildCarousel and buildMenu functions
function createElement(type, object) {
    "use strict";
    var element, key;
    element = document.createElement(type);
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            element.setAttribute(key, object[key]);
        }
    }
    return element;
}
//-----  -----/

//----- these functions are for building the page dynamically, -----//
function buildMenu() {
    "use strict";
    //  function to build the menu and the lines underneath it
    var key,
        page = pages,
        navLink,
        navLine,
        navItem;

    for (key in page) {
        if (page.hasOwnProperty(key)) {
            //
            //  creates an <a> element and adds the link to it
            //  creates a <li> element and adds the title to it
            //  creates an empty <li> item that is the underline
            navLink = createElement("A", {
                "href": page[key].href
            });
            navLine = createElement("LI", {
                "class": "nav-line"
            });
            navItem = createElement("LI", index.menu.attributes);
            navLink.innerHTML = page[key].title;
            navItem.appendChild(navLink);
            nav.appendChild(navItem);
            nav.appendChild(navLine);
        }
    }
}

function buildCarousel() {
    "use strict";
    //  function to build the carousel and set it to change the displayed image each minute
    var key,
        images = carouselImages,
        carouselItem,
        carouselImage;

    for (key in images) {
        if (images.hasOwnProperty(key)) {
            //
            //  create a <section> element with the class "carousel-element"
            //  also create an <img> element and add the class "carousel-image"
            //  set the source of the element to index.carousel object that the loop is on
            //  set the source to the name of the element to index.carousel the loop is on
            //  then put the img element into the section element
            //  then put the section element into the carousel element
            //  and start all over again untill the loop went through all the images in the 
            //  index.carousel object
            //
            // TODO create a universal BUILD function for creating elements within elements
            carouselItem = createElement("SECTION", {
                "class": "carousel-element"
            });
            carouselImage = createElement("IMG", {
                "class": "carousel-image",
                "src": images[key].src,
                "name": images[key].name
            });
            carouselItem.appendChild(carouselImage);
            carousel.appendChild(carouselItem);
        }

    }
   // CHANGES moved the image changing loop outside of the buildCarousel loop
}

function changeImage(setImage, setCounter) {
    "use strict";
    // TODO [x]move the image changing into a separate function outside of the buildCarousel loop
    // TODO tidy up the changeImage function
    // NOTE this fuction allows the user to change the image whenever
    var setimage = setImage || false,
        setcounter = setCounter || 0,
        images = carouselImages,
        height;
    //  if noLoop is set to false or there is just one image clear the interval
    if (noLoop === true || Object.keys(images).length === 1) {
        clearInterval(carouselLoop);
        return;
    }
    if (carouselCounter >= Object.keys(images).length - 1) {
        reverse = true;
    }
    if (carouselCounter === 0) {
        reverse = false;
    }
    //  some fancy smancy stuff to make sure it actually scrolls the next image revealing it 
    //  whole
    height = document.body.clientHeight;
    carousel.style.marginTop = "-" + (height * (carouselCounter)) + "px";
    if (setImage) {
        carousel.style.marginTop = "-" + (height * (setcounter)) + "px";
        return;
    }
    //  stuff to make sure it checks if it needs to go forward or reverse
    if (reverse) {
        carouselCounter -= 1;
        return "reverse";
    }
    carouselCounter += 1;
    return;
}
//-----  -----//

//----- no special purpoise functions -----//
//  functions so that the lines under the menu items grow or shrink if the menu items are hovered
//  over
function menuOver(x) {
    "use strict";
    x.nextElementSibling.style.width = '100%';
}

function menuOut(x) {
    "use strict";
    x.nextElementSibling.style.width = '120px';
}
//-----  -----//

//---- IMPORTANT FUNCTIONS ----//
function initialize() {
    "use strict";
     //  the function that makes sure that the page builds
    //  this gets called when the body is loaded
    nav = getID("menu");
    carousel = getID("carousel");
    buildMenu();
    buildCarousel();
    carouselLoop = setInterval(function () {changeImage(); }, carouselInterval);
}

