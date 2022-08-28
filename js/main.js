// TYPING EFFECT

let i = 0;
const str = 'Let us show you how we unleash knowledge unlimited power';
const speed = 100;

function Typing() {
  if (i < str.length) {
    document.getElementById('hero').innerHTML += str.charAt(i);
    i++;
    setTimeout(Typing, speed);
  }
}

/* ICON RAIN */

function CreateIcon() {
  const box = document.createElement('img');
  box.setAttribute('src', '../icons/star.svg');
  box.style.position = 'absolute';
  box.style.left = Math.random() * 98 + '%';
  box.style.animationDuration = Math.random() * 2 + 3 + 's';
  document.getElementById('rainContainer').appendChild(box);

  setTimeout(() => {
    box.remove();
  }, 2000);
}
setInterval(CreateIcon, 70);

// NAV MENU

function OpenNav() {
  document.getElementById('myNav').style.width = '100%';
}

function CloseNav() {
  document.getElementById('myNav').style.width = '0%';
}
