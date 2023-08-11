async function displayCommentsList(id) {
  const apiKey = 'LHYarZybqm9V0G7OV772';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments?item_id=${id}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error fetching comments');
    }

    const data = await response.json();

    const parent = document.querySelector('.comments-container-meal-popup');
    parent.innerHTML = '';

    const title = document.createElement('h3');
    title.className = 'meal-popup-comments-title';
    title.textContent = `Comments (${data.length || 0})`;
    parent.appendChild(title);

    data.forEach((comment) => {
      const commentRow = document.createElement('p');
      commentRow.className = 'meal-popup-comments-row';
      commentRow.textContent = `${comment.creation_date} ${comment.username}: ${comment.comment}`;
      parent.appendChild(commentRow);
    });
  } catch (err) {
    console.error('Error fetching and displaying comments:', err);
  }
}

export default displayCommentsList;
