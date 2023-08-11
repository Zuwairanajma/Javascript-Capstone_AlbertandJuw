const count = () => {
  const box = document.getElementById('meal-data');

  const directChildren = box.children.length;
  const cat = document.getElementById('meals');
  cat.innerHTML = `Meals (${directChildren})`;
};

export default count;
