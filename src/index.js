// index.js

import './style.css';
import { getData, handleLikes } from './modules/displayList.js';
// import handleLikes from './modules/displayLikes.js';

document.addEventListener('DOMContentLoaded', () => {
  getData();
  handleLikes();
});
