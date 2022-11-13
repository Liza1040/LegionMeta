'use strict';
console.log("hi")
import MainPage from './page/MainPage/MainPage.js';

const root = document.getElementById('root');
const mainPage = new MainPage(root);
mainPage.render("");
console.log("hi")