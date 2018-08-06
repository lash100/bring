

window.onscroll = function() {myFunction()};

var menu = document.getElementById("myHeader");
var sticky = menu.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    menu.classList.add("sticky");
  } else {
    menu.classList.remove("sticky");
  }
}



  // burger
  var burgericon=document.getElementById("burger");
  var navigicon=document.getElementById("navigation");

  burgericon.addEventListener("click", function(){
  console.log("click");
  if(burgericon.classList.contains("active")){
  	burgericon.classList.remove("active");

  }else{
  	burgericon.classList.add("active");
  }
    if(navigicon.classList.contains("active")){
  	navigicon.classList.remove("active");

  }else{
  	navigicon.classList.add("active");
  }



  })