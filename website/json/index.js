//-------------------------------------
//   the design and the functionallity
//   of this website is copyright of
//   Odinn Hullekes @ Odinh.Design
//   E-mail   :  Info@Odinh.Design
//   Website  :  Odinh.design
//-----------------------------------


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
                7: { //TODO create "Interactive Design" page
                    title: "Contact Me",
                    href: "mailto:me@odinh.design?subject=Odinh%20Design%20subject%20of%20the%20mail"
                },
                1: { //TODO create "Personal Information" page
                    title: "<s>Personal Information</s>",
                    href: "#Personal-Information"
                },
                2: { //TODO create "Interactive Design" page
                    title: "<s>Interactive Desig</s>n",
                    href: "#Interactive-Design"
                },
                3: { //TODO create "Page Layout" page
                    title: "<s>Page Layout</s>",
                    href: "#Page-Layout"
                },
                4: { //TODO create "Graphic Design" page
                    title: "<s>Graphic Design</s>",
                    href: "#Graphic-Design"
                }
                
            },
            "attributes": {
                "onmouseover": 'menuOver(this)',
                "onmouseout": 'menuOut(this)',
                "class": "nav-item"
            }
        }
    };
