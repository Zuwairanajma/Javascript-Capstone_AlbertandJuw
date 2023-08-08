// index.js

import './style.css';
// import getData from './modules/displayList.js';

// getData();

import { displayShows } from "./modules/displayList.js";
import { handleLikes } from "./modules/displayLikes.js";

async function getData() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  displayShows(data);
  handleLikes();
}

getData();
