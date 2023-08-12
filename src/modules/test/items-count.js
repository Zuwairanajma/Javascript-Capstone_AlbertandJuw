const mealCounter = document.getElementById('meals');

export default function countMeals(meals) {
  if (mealCounter !== null) {
    mealCounter.innerHTML = `<p>Meals(${meals.length})</p>`;
  }
}