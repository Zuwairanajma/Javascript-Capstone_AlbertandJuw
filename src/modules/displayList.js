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
      const showData = data[i] && data[i].show ? data[i].show : null;

      if (showData && (showData.status === 'Running' || showData.status === 'Ended')) {
        const list = document.createElement('div');
        list.className = 'shows';

        const div = document.createElement('div');
        div.className = 'div-img';
        list.appendChild(div);

        const img = document.createElement('img');
        img.src = showData.image ? showData.image.medium : '';
        div.appendChild(img);

        const title = document.createElement('h3');
        title.textContent = showData.name || '';
        list.appendChild(title);

        const buttonsContainer = document.createElement('div');
        buttonsContainer.className = 'buttons-container';

        const commentsButton = document.createElement('button');
        commentsButton.textContent = 'Comments';
        buttonsContainer.appendChild(commentsButton);

        const reservationsButton = document.createElement('button');
        reservationsButton.textContent = 'Reservations';
        buttonsContainer.appendChild(reservationsButton);

        list.appendChild(buttonsContainer);

        if (Array.isArray(iApiDArray[i])) {
          const likesCount = iApiDArray[i][0].likes || 0;
          const likesSpan = document.createElement('span');
          likesSpan.className = 'likes-count';
          likesSpan.textContent = `Likes: ${likesCount}`;
          list.appendChild(likesSpan);
        }

        showList.appendChild(list);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export default getData;
