import displayCommentsList from './display-comments.js';

 const addNewComment = async (itemId, username, comment) => {
  const apiKey = 'LHYarZybqm9V0G7OV772';
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments/`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: itemId,
        username,
        comment,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error adding new comment');
    }

    const parent = document.querySelector('.comments-container-meal-popup');
    parent.innerHTML = '';

    displayCommentsList(itemId, parent);
  } catch (err) {
    console.error('Error adding new comment:', err);
  }
}

export default addNewComment;