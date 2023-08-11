import renderlike, { mockDiv } from './mealDisplay.js';

describe('renderlike', () => {
  test('increments likes count on click', () => {
    mockDiv.innerHTML = `
      <div class="div-heart">
        <span>likes:2</span>
        <i class="fa-solid"></i>
      </div>
    `;

    document.querySelector = jest.fn().mockReturnValue(mockDiv);

    // Call the renderlike function
    renderlike();

    // Simulate a click event on the like button
    const likeButton = mockDiv.querySelector('.fa-solid');
    likeButton.dispatchEvent(new Event('click'));

    // Check if the likes count has been updated
    const likeCountElement = mockDiv.querySelector('.div-heart span');
    expect(likeCountElement.innerHTML).toBe('likes:2');
  });
});