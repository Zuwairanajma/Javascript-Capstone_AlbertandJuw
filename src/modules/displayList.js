// async function displayShows(data) {
//   const showList = document.querySelector('.show-home');

//   for (let i = 0; i < 15; i += 1) {
//     const showData = data[i] && data[i].show ? data[i].show : null;

//     const list = document.createElement('div');
//     list.className = 'shows';

//     const div = document.createElement('div');
//     div.className = 'div-img';
//     list.appendChild(div);

//     const img = document.createElement('img');
//     img.src = showData ? showData.image.medium : ''; // No default image
//     div.appendChild(img);

//     if (showData && showData.name) {
//       const title = document.createElement('h3');
//       title.textContent = showData.name;
//       list.appendChild(title);

//       showList.appendChild(list);
//     }
//   }
// }
// export default displayShows;