var allowDocument = document.querySelector(".allow");
setInterval(() => {
  allowDocument.classList.toggle("red1");
}, 500);
var allowDocument1 = document.querySelector(".allow1");
setInterval(() => {
  allowDocument1.classList.toggle("red2");
}, 500);
var buttonElement = document.querySelector("button");
function clickButton() {
  alert("Cảm ơn bạn đã gửi câu hỏi");
}
var iElement = document.querySelector("i");
var menuElement = document.querySelector("i>ul");
var d = 1;
iElement.ontouchstart = function () {
  menuElement.style.display = "block";
};
iElement.ontouchend = function () {
  setInterval(function () {
    menuElement.style.display = "none";
  }, 10000);
};
