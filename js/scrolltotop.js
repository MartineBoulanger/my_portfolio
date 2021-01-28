"use strict"
let returnBtn = document.getElementById('return-btn');
window.onscroll = function() { scrollFunctie() };
function scrollFunctie(){
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
      returnBtn.style.display = "block";
  } else {
      returnBtn.style.display = "none";
  }
}
function goToTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}