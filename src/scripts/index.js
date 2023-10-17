import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './views/components/_app-bar';
import './views/components/_app-hero';
import './views/components/_resto-list';
import './views/components/_resto-detail';
import './views/components/_resto-riview';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('.menu-button'),
  drawer: document.querySelector('#nav'),
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
