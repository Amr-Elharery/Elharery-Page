let el = document.querySelector(".scroller");

window.addEventListener("scroll", () => {
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollTop = document.documentElement.scrollTop;
  el.style.width = `${(scrollTop / height) * 100}%`;
});



// --------Functions
function thank() {
  alert("Thanks for sending me");
}
function error() {
  alert("Error sending me..\nPlease try again");
}