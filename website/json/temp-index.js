//---------------------------------------//
//   the design and the functionallity   //
//   of this website is copyright of     //
//   Odinn Hullekes @ Odinh.Design       //
//   E-mail   :  Info@Odinh.Design       //
//   Website  :  Odinh.design            //
//---------------------------------------//


var prefix = "images/carousel/",
    index = {
        "carousel": {
            //
            //   to add a new image add an object like this
            //  
            //  #letter#:{  
            //    name: "small description of the image",
            //    src: "location of the image"
            //  }
            //  
            //  make sure you add a comma the the second to last object
            //  also make sure there is no comma at the end of the last object
            //  
            a: {
                name: "Black Heart - Clothing Co.",
                src: prefix + "blackheart.jpg"
            },
            b: {
                name: "Consumer Basics - Art Project",
                src: prefix + "basic.jpg"
            },
            c: {
                name: "Black Heart - Clothing Co.",
                src: prefix + "blackheart.jpg"
            },
            d: {
                name: "Consumer Basics - Art Project",
                src: prefix + "basic.jpg"
            },
            e: {
                name: "Black Heart - Clothing Co.",
                src: prefix + "blackheart.jpg"
            },
            f: {
                name: "Consumer Basics - Art Project",
                src: prefix + "basic.jpg"
            }
        },
        "menu": {
            pages: {

                //
                //  to add a new link add an object like this
                //  
                //  #number#:{  
                //    title: "title of the page",
                //    href: "link to the page"
                //  }
                //  
                //  make sure you add a comma the the second to last object
                //  also make sure there is no comma at the end of the last object
                // 
                1: { //TODO create "Personal Information" page
                    title: "Personal Information",
                    href: "#Personal-Information"
                },
                2: { //TODO create "Interactive Design" page
                    title: "Interactive Design",
                    href: "#Interactive-Design"
                },
                3: { //TODO create "Page Layout" page
                    title: "Page Layout",
                    href: "#Page-Layout"
                },
                4: { //TODO create "Graphic Design" page
                    title: "Graphic Design",
                    href: "#Graphic-Design"
                },
                5: { //TODO create "Other Project" page
                    title: "Other Projects",
                    href: "#Other-Projects"
                }
            },
            "attributes": {
                "onmouseover": 'menuOver(this)',
                "onmouseout": 'menuOut(this)',
                "class": "nav-item"
            }
        }
    };
