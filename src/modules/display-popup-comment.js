import { saveComment, handleSaveComment } from './display-comments.js';

const displayPopup = (meal, appId) => {
  const popupOverlay = document.querySelector('.popup-overlay');

  const popup = document.querySelector('.popup');
  popup.style.display = 'flex';
  popupOverlay.style.display = 'flex';
  popup.innerHTML = `
    <i class="fa fa-times close" aria-hidden="true"></i>
    <img class="popup-img" src="${meal.strMealThumb}" alt="">
    <h1 class="food-name">${meal.strMeal}</h1>
    <ul class="food-info">
    <li>Area : ${meal.strArea}</li>
    <li>Tags : ${meal.strTags}</li>
    </ul>
    <p class="comment-count"></p>
    <ul class="comment-list"></ul>
    <h3 class="add-comm">Add a comment</h3>
    <form>
    <input type="text" id="name" placeholder="Your name"></input>
    <textarea id="comment" placeholder="Your insights"></textarea>
    <button type="submit" class="form-btn">Comment</button>
    </form>
  `;
  const closeButton = popup.querySelector('.close');
  closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
  });
  const formBtn = document.querySelector('.form-btn');

  formBtn.addEventListener('click', async (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const commentInput = document.getElementById('comment');

    const itemId = meal.idMeal;
    await saveComment(appId, itemId, nameInput.value, commentInput.value);
    nameInput.value = '';
    commentInput.value = '';

    const { comments: updatedComments, commentCount } = await handleSaveComment(
      itemId, appId,
    );

    const commentList = popup.querySelector('.comment-list');
    commentList.innerHTML = '';

    if (updatedComments.length > 0) {
      updatedComments.forEach((comment) => {
        commentList.innerHTML += `<li> ${comment.creation_date}  ${comment.username}: ${comment.comment}</li>`;
      });
    } else {
      commentList.innerHTML = '<li>No comments yet.</li>';
    }

    const commentCountElement = popup.querySelector('.comment-count');
    commentCountElement.textContent = `Comments(${commentCount})`;
  });
};

export default displayPopup;
