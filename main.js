const text = `<h1>#НАХУЙ_ОБЩЕСТВО!</h1> FUCK SOCIETY! FUCK SOCIETY!`;

let index = 0;
function writeText() {
  document.body.innerHTML = text.slice(0, index);
  index++;
  if (index > text.length - 1) {
    index = 0;
  }
}
setInterval(writeText, 200);
