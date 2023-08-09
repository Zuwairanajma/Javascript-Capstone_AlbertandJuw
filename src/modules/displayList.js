// async function getData() {
//   const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
//   const data = await response.json();
//   const showList = document.querySelector('.show-home');

//   try {
//     for (let i = 0; i < 15; i += 1) {
//       const showData = data[i] && data[i].show ? data[i].show : null;

//       if (showData && (showData.status === 'Running' || showData.status === 'Ended')) {
//         const list = document.createElement('div');
//         list.className = 'shows';

//         const div = document.createElement('div');
//         div.className = 'div-img';
//         list.appendChild(div);

//         const img = document.createElement('img');
//         img.src = showData.image ? showData.image.medium : '';
//         div.appendChild(img);

//         const title = document.createElement('h3');
//         title.textContent = showData.name || '';
//         list.appendChild(title);

//         const buttonsContainer = document.createElement('div');
//         buttonsContainer.className = 'buttons-container';

//         const likeButton = document.createElement('i');
//         likeButton.className = 'fa-regular fa-heart';
//         likeButton.setAttribute('data-show-id', showData.id);
//         // likeButton.textContent = 'Like';
//         buttonsContainer.appendChild(likeButton);

//         const likesSpan = document.createElement('span');
//         likesSpan.className = 'likes-count';
//         likesSpan.textContent = '0';
//         buttonsContainer.appendChild(likesSpan);

//         const commentsButton = document.createElement('button');
//         commentsButton.textContent = 'Comments';
//         buttonsContainer.appendChild(commentsButton);

//         list.appendChild(buttonsContainer);
//         showList.appendChild(list);
//       }
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// export default getData;

export async function getData() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  const showList = document.querySelector('.show-home');

  try {
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

        const likeButton = document.createElement('i');
        likeButton.className = 'fa-regular fa-heart';
        likeButton.setAttribute('data-show-id', showData.id);
        buttonsContainer.appendChild(likeButton);

        const likesSpan = document.createElement('span');
        likesSpan.className = 'likes-count';
        likesSpan.textContent = '0';
        buttonsContainer.appendChild(likesSpan);

        const commentsButton = document.createElement('button');
        commentsButton.textContent = 'Comments';
        buttonsContainer.appendChild(commentsButton);

        list.appendChild(buttonsContainer);
        showList.appendChild(list);
      }
    }
  } catch (error) {
    console.error(error);
  }
}
// export default getData;

export async function handleLikes() {
  const likeButtons = document.querySelectorAll('.fa-regular.fa-heart');

  likeButtons.forEach(async (likeButton) => {
    const showId = likeButton.getAttribute('data-show-id');

    likeButton.addEventListener('click', async () => {
      try {
        const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`);
        const likesData = await response.json();

        const likeCount = likesData.likes || 0;

        const newLikes = likeCount + 1;
        await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likes: newLikes }),
          
        });

        const likesSpan = document.createElement('span');
        likesSpan.className = 'likes-count';
        likesSpan.textContent = `Likes: ${newLikes}`;

        // Update the existing likesSpan element with the updated count
        likeButton.parentNode.appendChild(likesSpan);
      } catch (error) {
        console.error(error);
      }
    });
  });
}

getData();
handleLikes();
