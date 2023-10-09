import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../scripts/views/components/_app-bar';
import './views/components/_app-hero';
import './views/components/_resto-list'

const nav = document.querySelector('#nav');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if (scrollPos > 20) {
    nav.style.backgroundColor = '#C36A2D';
  }else {
    nav.style.backgroundColor = 'transparent';
  }
})

const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("open");
});