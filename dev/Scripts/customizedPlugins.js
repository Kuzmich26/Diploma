
var first = document.getElementById("firstImpr");
var second = document.getElementById("contact");
alert(first);
function contactMe(){

  first.classList.add("blur");
  second.classList.remove("hidden");

};
function dismiss(){
    first.classList.remove("blur")
    second.classList.add("hidden");
  }
