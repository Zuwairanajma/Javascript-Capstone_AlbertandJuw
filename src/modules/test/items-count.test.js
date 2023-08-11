// count.test.js
import count from './items-count';

describe('count function', () => {
  // Create a mock HTML structure for testing
  document.body.innerHTML = `
    <div id="meal-data">
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </div>
    <div id="meals"></div>
  `;

  test('updates the meals count correctly', () => {
    count();

    const cat = document.getElementById('meals');
    expect(cat.innerHTML).toBe('Meals (3)');
  });
});
