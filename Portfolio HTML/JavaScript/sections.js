function showSlideshowModal(sectionId, clickedProjectId){
    var modalContainer = document.createElement('div');
    modalContainer.setAttribute("id", "modal-container");

    document.body.appendChild(modalContainer);
    generateModalContent(sectionId, clickedProjectId);
}

function projectInfo(currentProject, output){
    for(var i = 0; i< currentProject.info.length; i++){
        output += '<li>'+currentProject.info[i]+'</li>';
    }
    
    return output;
}

function generateProjects(sectionId, sectionProjects, output) {
    var amountOfProjects = sectionProjects.length;
   
    for(var i=0; i < amountOfProjects; i++){
        output += '<li id="'+sectionProjects[i].id+'" class="project">' +
                      '<div class="project_title">'+sectionProjects[i].title+'</div>' +
                      '<ul class="project_subtitle">';
        output = projectInfo(sectionProjects[i], output);
        output +=     '</ul>' +
                      '<button class="ViewProjectBtn" onclick="showSlideshowModal('+sectionId+', '+i+')"><span>View Project</span></button>'+
                  '</li>';
    }
    
    return output;
}

function generateSection(sectionId, output){
    var currentSection = sections[sectionId];
    var sectionProjects = sections[sectionId].projects;
    
    output +=
        '<div class="parralex" style="background-image: url('+currentSection.sectionBackground+')">'+
            '<div class="header-wrapper">'+
                '<h3 class="sectionTitle">'+currentSection.subTitle+'</h3>'+
                '<p class="sectionSubinformation">'+currentSection.subInformation+'</p>' +
            '</div>' +
            '<div class="projects_wrapper">'+
                '<ul class="projects">';
    output = generateProjects(sectionId, sectionProjects, output);
    output +=   '</ul>' +
            '</div>' +
        '</div>';
    
    return output;
}

function nav(output){
    output += '<nav id="navbar" class="navigation">'+
                '<span id="closebtn" onclick="navToggle()">'+
                  '<span class="line1"></span>'+
                  '<span class="line2"></span>'+
                  '<span class="line3"></span>'+
                '</span>'+
                '<ul id="menu" class="menulist">'+
                  '<li><a class="menuitems" href="aboutme.html">ABOUT ME</a></li>'+
                  '<li><a class="menuitems" href="myWork.html">WORK</a></li>'+
                  '<li><a class="menuitems" href="plan.html">PLAN</a></li>'+
                  '<li><a class="menuitems" >CONTACT ME</a></li>'+
                '</ul>'+
            '</nav>';
    
    return output;
}

function generateSections(){
    var output = '';
    
    output = nav(output);
    for(var sectionId = 0; sectionId < sections.length; sectionId++) {
        output = generateSection(sectionId, output);
    }
    
    var sectionsContainer = document.createElement('div');
    sectionsContainer.classList.add("sections-wrapper")
    sectionsContainer.innerHTML = output;
    document.body.appendChild(sectionsContainer);
}

generateSections();
