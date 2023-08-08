export function handleLikes() {
    const showContainers = document.querySelectorAll('.shows');
  
    showContainers.forEach((container) => {
      const div2 = document.createElement("div");
      div2.className = "div-like";
      container.appendChild(div2);
  
      const like = document.createElement("i");
      like.className = "fa-regular fa-heart";
      div2.appendChild(like);
  
      const likeCount = document.createElement("span");
      likeCount.className = "like-count";
      likeCount.textContent = "0"; // Initial like count
      div2.appendChild(likeCount);
  
      let currentLikes = 0;
  
      like.addEventListener("click", () => {
        currentLikes += 1;
        likeCount.textContent = currentLikes.toString();
      });
    });
  }
  