const words = ["Web Developer", "New Software Developer", "HCMUTE Student"];
let i = 0, j = 0, currentWord = "", isDeleting = false;
const el = document.querySelector(".typing");

function type() {
  currentWord = words[i];
  el.textContent = currentWord.slice(0, j);
  j += isDeleting ? -1 : 1;

  if (!isDeleting && j === currentWord.length)
    return setTimeout(() => isDeleting = true, 1000), setTimeout(type, 200);
  if (isDeleting && j === 0)
    return isDeleting = false, i = (i + 1) % words.length, setTimeout(type, 200);
  setTimeout(type, isDeleting ? 50 : 100);
}
type();
