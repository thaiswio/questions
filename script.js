const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Mim aguarde.";
  gif.src =
    "https://i.pinimg.com/originals/c8/8a/c7/c88ac78ed012b6b98b634297c58c8c8f.gif";
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

const btnYes = document.getElementById('btnYes');
const btnNo = document.getElementById('btnNo');

btnYes.addEventListener('click', () => {
  btnYes.style.display = 'none';
  btnNo.style.display = 'none';
});

btnNo.addEventListener('click', () => {
  const width = window.innerWidth - btnNo.offsetWidth;
  const height = window.innerHeight - btnNo.offsetHeight;
  const newLeft = Math.floor(Math.random() * width);
  const newTop = Math.floor(Math.random() * height);

  btnNo.style.left = newLeft + 'px';
  btnNo.style.top = newTop + 'px';
});

btnNo.addEventListener('mousemove', () => {
  btnNo.style.cursor = 'not-allowed';
});

btnNo.addEventListener('mouseout', () => {
  btnNo.style.cursor = 'default';
});
