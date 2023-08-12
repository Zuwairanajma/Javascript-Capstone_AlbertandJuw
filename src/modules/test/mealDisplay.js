export const mockDiv = document.createElement('div');

async function renderlike() {
  const response1 = await Promise.resolve([
    { item_id: 5877, likes: 2 },
    { item_id: 5878, likes: 3 },
    { item_id: 5879, likes: 3 },
    { item_id: 5880, likes: 4 },
  ]);

  const likesData = response1;
  const likeData = likesData.find((element) => element.item_id);
  const likeCount = document.createElement('span');
  const div3 = document.createElement('div');
  likeCount.innerHTML = `likes:${likeData.likes}`;
  div3.appendChild(likeCount);

  const like = document.querySelector('.fa-solid');

  like.addEventListener('click', () => {
    if (likeData) {
      likeData.likes += 1;
      likeCount.innerHTML = `likes:${likeData.likes}`;
    }
  });
}

export default renderlike;
