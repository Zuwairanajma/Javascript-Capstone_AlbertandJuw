import likesListener from './likes.js';
import displayPopup from './display-popup-comment.js';
import { handleSaveComment } from './display-comments.js';

const mealList = document.getElementById('list-home');

export default function renderRecipes(recipe, appId) {
  const li = document.createElement('li');
  li.classList.add('card');

  const img = document.createElement('img');
  img.classList.add('meal-img');
  img.src = recipe.strMealThumb;
  img.alt = 'Image of food';

  const h4 = document.createElement('h4');
  h4.innerHTML = `<h4>${recipe.strMeal}</h4>
                <span><button class='likesBtn'><i class="fa-solid fa-heart"></i></button></span>`;
  h4.classList.add('meal-h4');

  const likesValue = document.createElement('div');
  likesValue.classList.add('likes-value');
  likesValue.textContent = `${recipe.likes} likes`;

  const commentBtn = document.createElement('button');
  commentBtn.innerHTML = 'Comments';
  commentBtn.type = 'submit';
  commentBtn.id = 'modalComments';
  commentBtn.classList.add('comment-btn');

  li.append(img, h4, likesValue, commentBtn);
  mealList.append(li);

  likesListener(recipe, appId);

  commentBtn.addEventListener('click', async () => {
    const idApp = 'LHYarZybqm9V0G7OV772';
    const popup = document.querySelector('.popup');
    displayPopup(recipe, idApp);
    const { comments: updatedComments, commentCount } = await handleSaveComment(
      recipe.idMeal, idApp,
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
}