// import popupComment from './display-popup-comment';
// import count from './items-count';
// import newLike from './new-like';

// async function fetchLikesData(apikey, likeid) {
//   try {
//     apiKey = 'tnE2k6P5BdZ2HCTjbd0V';
//     const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes?`);
//     const data = await response.json();
//     return data.find((element) => element.item_id === likeid);
//   } catch (error) {
//     console.error('Error fetching likes data:', error);
//     return null;
//   }
// }

// function createLikeCountElement(likeData) {
//   const likeCount = document.createElement('span');
//   likeCount.innerHTML = `likes:${likeData.likes}`;
//   return likeCount;
// }

// function handleLikeClick(like, likeData, likeCount, likeid) {
//   like.addEventListener('click', async () => {
//     if (likeData) {
//       likeData.likes += 1;
//       likeCount.innerHTML = `likes:${likeData.likes}`;
//     }
//     await newLike(likeid);
//   });
// }

// function createMealElement(mealData, popupCallback) {
//   const list = document.createElement('div');
//   list.className = 'meal';

//   const div = document.createElement('div');
//   div.className = 'div-img';
//   list.appendChild(div);

//   const descrpt1 = document.createElement('img');
//   descrpt1.src = mealData.strMealThumb;
//   div.appendChild(descrpt1);

//   const div2 = document.createElement('div');
//   div2.className = 'div-like';
//   list.appendChild(div2);

//   const p = document.createElement('p');
//   p.textContent = mealData.strMeal;
//   div2.appendChild(p);

//   const div3 = document.createElement('div');
//   div3.className = 'div-heart';
//   div2.appendChild(div3);

//   const like = document.createElement('i');
//   like.className = 'fa-solid fa-heart';
//   const likeid = mealData.idMeal;
//   div3.appendChild(like);

//   const button = document.createElement('button');
//   button.id = likeid;
//   button.innerHTML = 'Comment';
//   list.appendChild(button);

//   button.addEventListener('click', () => {
//     popupCallback(likeid);
//   });

//   return { list, like, div3 };
// }

// async function renderMeals(apikey) {
//   try {
//     const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s');
//     const data = await response.json();

//     const header = document.querySelector('.header');
//     const random = document.querySelector('.menu-random');
//     const listShow = document.querySelector('.list-home');
//     listShow.before(header);
//     listShow.before(random);

//     data.meals.forEach(async (mealData) => {
//       const { list, like, div3 } = createMealElement(mealData, popupComment);
//       listShow.append(list);

//       const likeData = await fetchLikesData(apikey, mealData.idMeal);
//       if (likeData) {
//         const likeCount = createLikeCountElement(likeData);
//         div3.appendChild(likeCount);

//         handleLikeClick(like, likeData, likeCount, mealData.idMeal);
//       }
//     });

//     count();
//   } catch (error) {
//     console.error('Error rendering meals:', error);
//   }
// }
// export default renderMeals;

import popupComment from './display-popup-comment';
import count from './items-count';
import newLike from './new-like';

function renderMeals() {
  fetch(
    'https://www.themealdb.com/api/json/v1/1/search.php?s',
  )
    .then((res) => res.json())
    .then((data) => {
      const lengthData = data.meals.length;
      const header = document.querySelector('.header');
      const random = document.querySelector('.menu-random');
      const listSection = document.querySelector('.list-home');
      listSection.before(header);
      listSection.before(random);
      // .replaceChildren();

      for (let i = 0; i < lengthData; i += 1) {
        const list = document.createElement('div');
        list.className = 'meal';

        const div = document.createElement('div');
        div.className = 'div-img';
        list.appendChild(div);

        const descrpt1 = document.createElement('img');
        descrpt1.src = `${data.meals[i].strMealThumb}`;
        div.appendChild(descrpt1);

        const div2 = document.createElement('div');
        div2.className = 'div-like';
        list.appendChild(div2);

        const p = document.createElement('p');
        p.textContent = `${data.meals[i].strMeal}`;
        div2.appendChild(p);

        const div3 = document.createElement('div');
        div3.className = 'div-heart';
        div2.appendChild(div3);

        const like = document.createElement('i');
        like.className = 'fa-solid fa-heart';
        const likeid = data.meals[i].idMeal;
        div3.appendChild(like);

        const button = document.createElement('button');
        button.id = likeid;
        button.innerHTML = 'Comment';
        list.appendChild(button);

        listSection.append(list);

        button.addEventListener('click', (e) => {
          const { id } = e.target;
          popupComment(id);
        });

        function renderlike() {
          // const apikey = 'tnE2k6P5BdZ2HCTjbd0V';
          const apikey = 'LHYarZybqm9V0G7OV772';
          fetch(
            `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apikey}/likes?`,
          )
            .then((response1) => response1.json())
            .then((data1) => {
              const likesData = data1;
              const likeData = likesData.find((element) => element.item_id === likeid);
              const likeCount = document.createElement('span');
              likeCount.innerHTML = `likes:${likeData.likes}`;
              div3.appendChild(likeCount);

              like.addEventListener('click', () => {
                if (likeData) {
                  likeData.likes += 1;
                  likeCount.innerHTML = `likes:${likeData.likes}`;
                }
                newLike(likeid);
              });
            });
        }
        renderlike();
      }
      count();
    });
}

export default renderMeals;

