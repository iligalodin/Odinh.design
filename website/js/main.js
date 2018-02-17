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
    carousel,
    carouselLoop,
    carouselCounter = 1,
    reverse = false,
    carouselInterval = 8000,
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
function buildIndex() {
    "use strict";
    var page = index.menu.pages, images = index.carousel,
        key,
        navLink, navLine, navItem,
        carouselItem, carouselImage;

    // menu building
    for (key in page) { if (page.hasOwnProperty(key)) {
        navLink = createElement("A", {
            "href": page[key].href
        });
        navItem = createElement("LI", index.menu.attributes);
        navLine = createElement("LI", {
            "class": "nav-line"
        });

        navLink.innerHTML = page[key].title;

        nav.appendChild(navItem).appendChild(navLink);
        nav.appendChild(navLine);
    } }
    
    // image carousel building
    for (key in images) { if (images.hasOwnProperty(key)) {

        carouselItem = createElement("SECTION", {
            "class": "carousel-element"
        });
        carouselImage = createElement("IMG", {
            "class": "carousel-image",
            "src": images[key].src,
            "name": images[key].name
        });

        carousel.appendChild(carouselItem).appendChild(carouselImage);
    } }
}

function changeImage(setImage, setCounter) {
    "use strict";
    // TODO [x]move the image changing into a separate function outside of the buildCarousel loop
    // TODO tidy up the changeImage function
    // NOTE this fuction allows the user to change the image whenever
    var setimage = setImage || false,
        setcounter = setCounter || 0,
        images = index.carousel,
        height;
    
    height = document.body.clientHeight;
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

    carousel.style.marginTop = "-" + (height * (carouselCounter)) + "px";
    if (setimage) {
        carousel.style.marginTop = "-" + (height * (setcounter)) + "px";
        carouselCounter = setCounter;
        return;
    }
    //  stuff to make sure it checks if it needs to go forward or reverse
    if (reverse) {
        carouselCounter -= 1;
        return;
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
    buildIndex();
    //    buildCarousel();
    carouselLoop = setInterval(function () {
        changeImage();
    }, carouselInterval);
}
