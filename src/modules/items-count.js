// const count = () => {
//   const box = document.getElementById('list-home');

//   const directChildren = box.children.length;
//   const cat = document.getElementById('meals');
//   cat.innerHTML = `Meals(${directChildren + 1})`;
// };

// export default count;

const mealCounter = document.getElementById('meals');

export default function countMeals(meals) {
  if (mealCounter !== null) {
    mealCounter.innerHTML = `<p>Meals(${meals.length})</p>`;
  }
}
