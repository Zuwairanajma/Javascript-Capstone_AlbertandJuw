import popupComment from './display-popup-comment';
import count from './items-count';
import newLike from './new-like';

async function fetchLikesData(apikey, likeid) {
  try {
    apikey = 'tnE2k6P5BdZ2HCTjbd0V';
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes?`);
    const data = await response.json();
    return data.find((element) => element.item_id === likeid);
  } catch (error) {
    console.error('Error fetching likes data:', error);
    return null;
  }
}

function createLikeCountElement(likeData) {
  const likeCount = document.createElement('span');
  likeCount.innerHTML = `likes:${likeData.likes}`;
  return likeCount;
}

function handleLikeClick(like, likeData, likeCount, likeid) {
  like.addEventListener('click', async () => {
    if (likeData) {
      likeData.likes += 1;
      likeCount.innerHTML = `likes:${likeData.likes}`;
    }
    await newLike(likeid);
  });
}

function createMealElement(mealData, popupCallback) {
  const list = document.createElement('div');
  list.className = 'meal';

  const div = document.createElement('div');
  div.className = 'div-img';
  list.appendChild(div);

  const descrpt1 = document.createElement('img');
  descrpt1.src = mealData.strMealThumb;
  div.appendChild(descrpt1);

  const div2 = document.createElement('div');
  div2.className = 'div-like';
  list.appendChild(div2);

  const p = document.createElement('p');
  p.textContent = mealData.strMeal;
  div2.appendChild(p);

  const div3 = document.createElement('div');
  div3.className = 'div-heart';
  div2.appendChild(div3);

  const like = document.createElement('i');
  like.className = 'fa-solid fa-heart';
  const likeid = mealData.idMeal;
  div3.appendChild(like);

  const button = document.createElement('button');
  button.id = likeid;
  button.innerHTML = 'Comment';
  list.appendChild(button);

  button.addEventListener('click', () => {
    popupCallback(likeid);
  });

  return { list, like, div3 };
}

async function renderMeals(apikey) {
  try {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
    const data = await response.json();

    const header = document.querySelector('.header');
    const random = document.querySelector('.menu-random');
    const listShow = document.querySelector('.list-home');
    listShow.before(header);
    listShow.before(random);

    data.meals.forEach(async (mealData) => {
      const { list, like, div3 } = createMealElement(mealData, popupComment);
      listShow.append(list);

      const likeData = await fetchLikesData(apikey, mealData.idMeal);
      if (likeData) {
        const likeCount = createLikeCountElement(likeData);
        div3.appendChild(likeCount);

        handleLikeClick(like, likeData, likeCount, mealData.idMeal);
      }
    });

    count();
  } catch (error) {
    console.error('Error rendering meals:', error);
  }
}
export default renderMeals;
