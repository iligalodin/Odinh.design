//-------------------------------------
//   the design and the functionallity
//   of this website is copyright of
//   Odinn Hullekes @ Odinh.Design
//   E-mail   :  Info@Odinh.Design
//   Website  :  Odinh.design
//-----------------------------------


//----- global var declaration ---//
var index = index,
    intervalLength = 5000,
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

function addAtributes(element, object) {
    "use strict";
    var key;
    for (key in object) {
        if (object.hasOwnProperty(key)) {
            element.setAttribute(key, object[key]);
        }
    }
}
//-----  -----/

//----- these functions are for building the page dynamically, -----//
function buildMenu(json) {
    "use strict";
    //  function to build the menu and the lines underneath it
    var key,
        menu = index.menu,
        pages = menu.pages,
        nav = getID("menu"),
        navLink,
        navLine,
        navItem;

    for (key in pages) {
        if (pages.hasOwnProperty(key)) {
            //
            //  creates an <a> element and adds the link to it
            //  creates a <li> element and adds the title to it
            //  adds a whole array of attributes which i am lazy to actually type here myself
            //  creates an empty <li> item that will become the underline
            //  adds the class "nav-line" to the empty <li>
            //  adds the "nav-item" <li> to the menu element
            //  adds the "nav-line" <li> to the menu element
            //
            navLink = document.createElement("A");
            navLine = document.createElement("LI");
            navItem = document.createElement("LI");

            navLink.setAttribute("href", pages[key].href);
            addAtributes(navItem, menu.attributes);
            navLine.setAttribute("class", "nav-line");

            navLink.appendChild(document.createTextNode(pages[key].title));
            navItem.appendChild(navLink);
            nav.appendChild(navItem);
            nav.appendChild(navLine);
        }
    }
}


function buildCarousel() {
    "use strict";
    //  function to build the carousel and set it to change the displayed image each minute
    var carousel = getID("carousel"),
        images = index.carousel,
        key,
        counter = 1,
        reverse = false,
        interval,
        height,
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
            carouselItem = document.createElement("SECTION");
            carouselItem.setAttribute("class", "carousel-element");
            carouselImage = document.createElement("IMG");
            carouselImage.setAttribute("class", "carousel-image");
            carouselImage.setAttribute("src", images[key].src);
            carouselImage.setAttribute("alt", images[key].name);
            carouselItem.appendChild(carouselImage);
            carousel.appendChild(carouselItem);
        }

    }
    
    //TODO move the image changing into a separate function outside of the buildCarousel loop
    //  create a interval if there is more than one image in the image carousel
    interval = setInterval(function () {
        //  if noLoop is set to false or there is just one image clear the interval
        if (noLoop === true || Object.keys(images).length === 1) {
            clearInterval(interval);
            return;
        }

        //  if the interval reached the last image it toggles it to go reverse
        if (counter >= Object.keys(images).length - 1) {
            reverse = true;
        }

        //  and if the inerval did reverse and reached the first image to forward again
        if (counter === 0) {
            reverse = false;
        }

        //  some fancy smancy stuff to make sure it actually scrolls the next image revealing it 
        //  whole
        height = document.body.clientHeight;
        carousel.style.marginTop = "-" + (height * (counter)) + "px";

        //  stuff to make sure it checks if it needs to go forward or reverse
        if (reverse) {
            counter -= 1;
            return;
        }
        counter += 1;
    }, intervalLength);
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
    buildMenu();
    buildCarousel();
}
