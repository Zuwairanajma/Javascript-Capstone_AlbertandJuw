async function getData() {
  const response = await fetch('https://api.tvmaze.com/search/shows?q=girls');
  const data = await response.json();
  const showList = document.querySelector('.show-home');

  for (let i = 0; i < 15; i += 1) {
    let showData = null; // Declare the variable in a higher scope

    if (data[i] && data[i].show) {
      showData = data[i].show; // Assign the value if condition is met

      const list = document.createElement('div');
      list.className = 'shows';

      const div = document.createElement('div');
      div.className = 'div-img';
      list.appendChild(div);

      const img = document.createElement('img');
      img.src = showData ? showData.image.medium : '';
      div.appendChild(img);

      // Create and add title
      const title = document.createElement('h3');
      title.textContent = showData ? showData.name : '';
      list.appendChild(title);

      showList.appendChild(list);

      // Create a container div for buttons
      const buttonsContainer = document.createElement('div');
      buttonsContainer.className = 'buttons-container';

      // Create "Comments" button
      const commentsButton = document.createElement('button');
      commentsButton.textContent = 'Comments';
      buttonsContainer.appendChild(commentsButton);

      // Create "Reservations" button
      const reservationsButton = document.createElement('button');
      reservationsButton.textContent = 'Reservations';
      buttonsContainer.appendChild(reservationsButton);

      // Append the buttons container to the list
      list.appendChild(buttonsContainer);
    }
  }
}

export default getData;
