var nav = document.getElementById("navbar");
var menu = document.getElementById("menu");
var menuitems = document.getElementsByClassName("menuitems");
var close = document.getElementById("closebtn");

var navbarHeight = "50px";
var navbarActiveHeight = "320px";

//default to measure if/else from
nav.style.height = navbarHeight;

close.addEventListener("click", function(){
  var menuIcon = close.children;
  for (i = 0; i < menuIcon.length; i++){
  menuIcon[i].classList.toggle("active");
  }   
});

function calculateActiveNavHeight(){
    var height = 0;
    var linkElements = Array.prototype.slice.call( document.getElementsByClassName('menuitems') )
    if(linkElements){
        height = linkElements[0].offsetParent.scrollHeight
        return height + "px";
    } else return "300px";
}


function navToggle() {	
	//to close
	if (nav.style.height <= navbarActiveHeight) {
        nav.style.height = navbarHeight;
        menu.classList.remove("active")
       
        document.body.style.backgroundColor = "rgba(0,0,0,0.0)";
	} 
	//to open
	else if (nav.style.height <= navbarHeight) {
	    nav.style.height = calculateActiveNavHeight();
    	menu.classList.add("active");
    	document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
	}

};
