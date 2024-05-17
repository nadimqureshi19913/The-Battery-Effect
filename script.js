var onbtn = document.querySelector(".on-btn");
var offbtn = document.querySelector(".off-btn");
var on = document.querySelectorAll(".on");
var degrees = document.getElementsByClassName("degrees");
var off = document.querySelectorAll(".off");
var innerBox = document.getElementsByClassName("inner-box");
let innerBox2 = document.getElementsByClassName("inner-box-2");
var img = document.querySelectorAll(".img");
var overlay = document.getElementsByClassName("overlay");
var overlay2 = document.getElementsByClassName("overlay-2");
let squareBox5 = document.querySelector(".square-box5");

onbtn.addEventListener("click", function () {
  on[0].style.opacity = "1";
  off[0].style.opacity = "0";
  on[1].style.opacity = "1";
  off[1].style.opacity = "0";
  on[2].style.opacity = "1";
  off[2].style.opacity = "0";
  overlay[0].style.marginTop = "-70px";
  overlay2[0].style.marginTop = "-40px";
  img[0].style.transform = "rotate(180deg)";
  img[1].style.transform = "rotate(-360deg)";
  img[2].style.transform = "rotate(180deg)";
  onbtn.style.background = "green";
  offbtn.style.background = "";
  squareBox5.style.border = "1px solid rgba(0, 0, 50, 0.8);";
  squareBox5.style.opacity = "0.2";
  degrees[0].style.opacity = "1";
});

offbtn.addEventListener("click", function () {
  innerBox[0].style.background = "";
  innerBox2[0].style.background = "";
  on[0].style.opacity = "0";
  off[0].style.opacity = "1";
  on[1].style.opacity = "0";
  off[1].style.opacity = "1";
  on[2].style.opacity = "0";
  off[2].style.opacity = "1";
  overlay[0].style.marginTop = "190px";
  overlay2[0].style.marginTop = "130px";
  img[0].style.transform = "rotate(0deg)";
  img[1].style.transform = "rotate(0deg)";
  img[2].style.transform = "rotate(0deg)";
  offbtn.style.background = "red";
  onbtn.style.background = "";
  squareBox5.style.background = "";
  squareBox5.style.border = "2px solid rgba(0, 0, 50, 0.8);";
  squareBox5.style.opacity = "1";
  degrees[0].style.opacity = "0";
});