var slidesIndex =[1,1,1];
var slideId = ["workSlides", "planSlides"]
showSlides(1,0);
showSlides(1,1);

function plusSlides(n, no){
    showSlides(slidesIndex[no] += n, no);
}

function showSlides(n, no){
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if(n > x.length){
        slidesIndex[no] = 1
    }
    if(n < 1){
        slidesIndex[no] = x.length
    }
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slidesIndex[no]-1].style.display = "flex";
}