import countMeals from './items-count.js';

describe('countMeals', () => {
  document.body.innerHTML = '<li id="meals"></li>';
  const mealCounter = document.getElementById('meals');

  afterEach(() => {
    mealCounter.innerHTML = '';
  });

  test('should display the correct number of meals', () => {
    const meals = [
      { idMeal: 52476, strMeal: 'mealName1', strMealThumb: 'image1' },
      { idMeal: 52478, strMeal: 'mealName2', strMealThumb: 'image2' },
      { idMeal: 52480, strMeal: 'mealName3', strMealThumb: 'image3' },
    ];
    mealCounter.innerHTML = `<p>Meals(${meals.length})</p>`;
    countMeals(meals);
    expect(mealCounter.innerHTML).toBe('<p>Meals(3)</p>');
  });
});