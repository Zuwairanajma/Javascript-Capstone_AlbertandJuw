// function handleLikes() {
//   const showContainers = document.querySelectorAll('.shows');

//   showContainers.forEach((container) => {
//     const div2 = document.createElement('div');
//     div2.className = 'div-like';
//     container.appendChild(div2);

//     const like = document.createElement('i');
//     like.className = 'fa-regular fa-heart';
//     div2.appendChild(like);

//     const likeCount = document.createElement('span');
//     likeCount.className = 'like-count';
//     likeCount.textContent = '0'; // Initial like count
//     div2.appendChild(likeCount);

//     let currentLikes = 0;

//     like.addEventListener('click', () => {
//       currentLikes += 1;
//       likeCount.textContent = currentLikes.toString();
//     });
//   });
// }

async function getData() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  const showList = document.querySelector('.show-home');
  const fetchPromises = [];

  for (let i = 0; i < 15; i += 1) {
    if (data[i] && data[i].show && data[i].show.id) {
      fetchPromises.push(fetch(`https://api.tvmaze.com/lookup/shows?thetvdb=81189/${data[i].show.id}`));
    }
  }

  try {
    const iApiResponses = await Promise.all(fetchPromises);
    const iApiDArray = await Promise.all(iApiResponses.map((response) => response.json()));

    for (let i = 0; i < 15; i += 1) {
      let showData = null;

      if (data[i] && data[i].show) {
        showData = data[i].show;
      }

      const list = document.createElement('div');
      list.className = 'shows';

      const div = document.createElement('div');
      div.className = 'div-img';
      list.appendChild(div);

      const img = document.createElement('img');
      img.src = showData ? showData.image.medium : '';
      div.appendChild(img);

      const title = document.createElement('h3');
      title.textContent = showData ? showData.name : '';
      list.appendChild(title);

      if (Array.isArray(iApiDArray[i])) {
        const likesCount = iApiDArray[i][0].likes || 0;
        const likesSpan = document.createElement('span');
        likesSpan.className = 'likes-count';
        likesSpan.textContent = `Likes: ${likesCount}`;
        list.appendChild(likesSpan);
      }

      showList.appendChild(list);
    }
  } catch (error) {
    console.error(error);
  }
}

export default getData;
