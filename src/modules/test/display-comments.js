function displayCommentsList(data, parent) {
  data.forEach((comment) => {
    const commentContainer = document.createElement('div');
    const title = document.createElement('h3');
    title.innerHTML = `Comments (${data.length || 0})`;
    commentContainer.appendChild(title);
    const commentRow = document.createElement('p');
    commentRow.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment} `;
    commentContainer.appendChild(commentRow);
    parent.appendChild(commentContainer);
  });
}

export default displayCommentsList;
