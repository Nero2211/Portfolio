
var sections = [
    {
        subTitle: "android",
        subInformation: "info",
        sectionBackground: "Images/background2.jpg",
        initialSlideshowSide: "Left",
        initialInfoSide: "Right",
        projects: [
            {
                id: 1,
                title: "project 1",
                info: "qwerty",
                images: [
                    {
                        title: "project 1 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 1 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
            {
                id: 2,
                title: "project 2",
                info: "qwerty 2",
                images: [
                    {
                        title: "project 2 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 2 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
        ]
    },
    {
        subTitle: "c#",
        subInformation: "info",
        sectionBackground: "Images/background2.jpg",
        initialSlideshowSide: "Right",
        initialInfoSide: "Left",
        projects: [
            {
                id: 3,
                title: "project 1",
                info: "qwerty",
                images: [
                    {
                        title: "project 1 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 1 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
            {
                id: 4,
                title: "project 2",
                info: "qwerty 2",
                images: [
                    {
                        title: "project 2 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 2 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
        ]
    },
    {
        subTitle: "Unreal Engine",
        subInformation: "info",
        sectionBackground: "Images/background2.jpg",
        initialSlideshowSide: "Right",
        initialInfoSide: "Left",
        projects: [
            {
                id: 5,
                title: "project 1",
                info: "qwerty",
                images: [
                    {
                        title: "project 1 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 1 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
            {
                id: 6,
                title: "project 2",
                info: "qwerty 2",
                images: [
                    {
                        title: "project 2 image",
                        src: "Images/background1.jpg",
                        text: "background 1"
                    },
                    {
                        title: "project 2 image",
                        src: "Images/background2.jpg",
                        text: "background 2"
                    }
                ]
            },
        ]
    }
]


function slides(currentProject, output) {
    var currentProjectImages = currentProject.images;
    var amountOfImages = currentProjectImages.length;
    
    for(var i=0; i < amountOfImages; i++ ){
        output +=
            '<div class="mySlidesAndroid fade">' +
                '<div class="numberText">'+ currentProjectImages[i].title +'</div>' +
                '<img src='+currentProjectImages[i].src+' style="width: 100%">' +
                '<div class="text">'+ currentProjectImages[i].text +'</div>' +
            '</div>'
    }
    
    return output;
}


function slideshowContainer(currentProject, initialSlideshowSide, output){
    output += 
        '<div class="slideshow-container'+initialSlideshowSide+'">';
    output = slides(currentProject, output);
    output += 
            '<a class="prev" onclick="plusSlides(-1, 0)">&#10094;</a>' +
            '<a class="next" onclick="plusSlides(1, 0)">&#10095;</a>'+
        '</div>';
    return output;
}

function infoContainer(currentProject, initialInfoSide, output){
    output +=
        '<div class="infoContainer'+initialInfoSide+'">' +
            '<h3>'+currentProject.title+'</h3>'+
            '<p>'+currentProject.info+'</p>'+
        '</div>'
    return output;
}

/*
 * @param {string} initialSide - Capitalized initial side
 */
function generateProjects(sectionProjects, initialSlideshowSide, initialInfoSide, output) {
    var amountOfProjects = sectionProjects.length;
    
    function display(i){
        if(i === 0) return "display: block";
        else return "display: none";
    }
    
    for(var i=0; i < amountOfProjects; i++){
        output += '<div id="'+sectionProjects[i].id+'" class="projectWrapper" style="'+display(i)+'">';
            output = slideshowContainer(sectionProjects[i], initialSlideshowSide, output);
            output = infoContainer(sectionProjects[i], initialInfoSide, output); 
        output += '</div>';
    }
    
    return output;
}

function generateSection(i, output){
    var currentSection = sections[i];
    var sectionInitialSlideshowSide = currentSection.initialSlideshowSide;
    var sectionInitialInfoSide = currentSection.initialInfoSide;
    var sectionProjects = sections[i].projects;
    
    output +=
        '<div class="parralex" style="background-image: url('+currentSection.sectionBackground+')">'+
            '<div class="mainSlideshowContainer">'+
                '<h3 class="subTitle">'+currentSection.subTitle+'</h3>'+
                '<p class="subInformation">'+currentSection.subInformation+'</p>';
    output = generateProjects(sectionProjects, sectionInitialSlideshowSide, sectionInitialInfoSide, output);
    output +=
            '</div>' +
        '</div>';
    return output;
}

function generateSections(){
    var output = '';
    
    output = generateSection(0, output);
    output = generateSection(1, output);
    
    var sectionsContainer = document.createElement('div');
    sectionsContainer.innerHTML = output;
    document.body.appendChild(sectionsContainer);
}

generateSections();
