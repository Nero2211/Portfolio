var slideIndex = [1,1,1];
var slideId = ["mySlidesAndroid", "mySlidesCSharp", "mySlidesUE"];
//var slideInfo = ["info", "info", "info", "info", "info", "info"];

    


function plusSlides(n, no){
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no){
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    
    if( n > x.length) {
       slideIndex[no] = 1
       }
    if(n < 1){
        slideIndex[no] = x.length
    }
    console.log(x);
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
        
    }
    
    x[slideIndex[no]-1].style.display = "block";
}


// MODAL

function closeModal(){
    var modalContainer = document.getElementById('modal-container');
    document.body.removeChild(modalContainer);
}

function slides(currentSection, currentProject, output) {
    var currentProjectImages = currentProject.images;
    var amountOfImages = currentProjectImages.length;
    
//    var windowWidth = window.innerWidth;
//  somw function that would calculate the width and return a switch with proper image

    for(var i=0; i < amountOfImages; i++ ){
        output +=
            '<div class="mySlides'+currentSection.slideshowClassname+' fade">' +
                '<div class="numberText">'+ currentProjectImages[i].title +'</div>' +
                '<div class="numberOfText">'+(i+1)+' image of '+amountOfImages+'</div>' +
                '<img src='+currentProjectImages[i].src+' style="width: 100%">' +
            '</div>';
    }
    
    return output;
}


function slideshowContainer(sectionId, currentSection, currentProject, output){
    
    output += 
        '<div class="slideshow-container">';
    output = slides(currentSection, currentProject, output);
    output += 
            '<a class="prev" onclick="plusSlides(-1, '+sectionId+')">&#10094;</a>' +
            '<a class="next" onclick="plusSlides(1, '+sectionId+')">&#10095;</a>'+
        '</div>';
    
    return output;
}

function projectInfo(currentProject, output){
    for(var i = 0; i< currentProject.info.length; i++){
        output += '<li>'+currentProject.info[i]+'</li>';
    }
    
    return output;
}


function generateModalContent(sectionId, projectId){
    var output = "";
    var currentSection = sections[sectionId];
    var currentProject = sections[sectionId].projects[projectId];
    
    output += '<button onclick="closeModal()" class="close-modal">X</button>';
    output += '<div class="modal-project-title">'+currentProject.title+'</div>';
    output = slideshowContainer(sectionId, currentSection, currentProject, output);
    output += '<ul class="modal-project-info">';
    output = projectInfo(currentProject, output);
    output += '</ul>';
    
    var modal = document.createElement('div');
    var modalContainer = document.getElementById("modal-container");
    modal.classList.add("modal");
    modal.innerHTML = output;
    

    modalContainer.appendChild(modal);
    
    switch(sectionId){
        case 0: showSlides(1,0); break;
        case 1: showSlides(1,1); break;
        case 2: showSlides(1,2); break;
    }
}