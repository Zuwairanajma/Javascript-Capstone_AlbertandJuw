// async function handleLikes() {
//   const likeButtons = document.querySelectorAll('.fa-heart');

//   likeButtons.forEach(async (likeButton) => {
//     const showId = likeButton.getAttribute('data-show-id');

//     const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`);
//     const likesData = await response.json();

//     const likeCount = likesData.likes || 0;

//     const likesSpan = document.createElement('span');
//     likesSpan.className = 'likes-count';
//     likesSpan.textContent = `Likes: ${likeCount}`;

//     likeButton.addEventListener('click', async () => {
//       try {
//         const newLikes = likeCount + 1;
//         await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ likes: newLikes }),
//         });

//         likesSpan.textContent = `Likes: ${newLikes}`;
//       } catch (error) {
//         console.error(error);
//       }
//     });

//     likeButton.parentNode.appendChild(likesSpan);
//   });
// }

// export default handleLikes;

// async function handleLikes() {
//   const likeButtons = document.querySelectorAll('.fa-regular.fa-heart');

//   likeButtons.forEach(async (likeButton) => {
//     const showId = likeButton.getAttribute('data-show-id');

//     likeButton.addEventListener('click', async () => {
//       try {
//         const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`);
//         const likesData = await response.json();

//         const likeCount = likesData.likes || 0;

//         const newLikes = likeCount + 1;
//         await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rdx9bMsOMJrWpl8rmld3/likes/${showId}`, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ likes: newLikes }),
//         });

//         const likesSpan = document.createElement('span');
//         likesSpan.className = 'likes-count';
//         likesSpan.textContent = `Likes: ${newLikes}`;

//         // Update the existing likesSpan element with the updated count
//         likeButton.parentNode.appendChild(likesSpan);
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   });
// }

// export default handleLikes;
