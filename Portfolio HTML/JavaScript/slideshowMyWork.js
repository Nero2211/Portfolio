var slideIndex = [1,1,1,1,1];
var slideId = ["mySlidesAndroid", "mySlidesCSharp", "mySlidesHTML", "mySlidesPhotoshop", "mySlidesUE"];
//var slideInfo = ["info", "info", "info", "info", "info", "info"];

    showSlides(1,0);
    showSlides(1,1);
    showSlides(1,2);
    showSlides(1,3);
    showSlides(1,4);


function plusSlides(n, no){
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no){
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    var projectWrapperId = document.getElementById('1');
    console.log(projectWrapperId)
    //var y = document.getElementsByClassName(slideInfo[no]);
    if( n > x.length) {
       slideIndex[no] = 1
//        projectWrapperId.style = "display: none";
//        projectWrapperId.nextSibling.style = "display: block";
       }
    if(n < 1){
        slideIndex[no] = x.length
    }
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
        
    }
    
    
    x[slideIndex[no]-1].style.display = "block";
}