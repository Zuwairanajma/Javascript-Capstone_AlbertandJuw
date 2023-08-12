const mealCounter = document.getElementById('meals');

const countMeals = (meals) => {
  if (mealCounter !== null) {
    mealCounter.innerHTML = `<p>Meals(${meals.length})</p>`;
  }
};

export default countMeals;
