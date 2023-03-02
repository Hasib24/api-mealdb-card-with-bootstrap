const loadmeal = (food_name) => {
  let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${food_name}`;
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const card_container = document.getElementById("card_container");
const inp_search = document.getElementById("inp_search");

const btn_search = document.getElementById("btn_search");

const displayMeals = (meals) => {
  card_container.innerHTML = "";
  meals.map((meal) => {
    // console.log(meal)
    const card = document.createElement("div");
    card.innerHTML = `<div class="col">
    <div class="card h-100">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">
          ${meal.strInstructions}
      </div>
    </div>
  </div>`;

    card_container.appendChild(card);
  });
};
inp_search.addEventListener('keyup',(e)=>{
  let search_text = inp_search.value;
  console.log(search_text);

  loadmeal(search_text);
})
btn_search.addEventListener("click", (e) => {
  e.preventDefault();
  let search_text = inp_search.value;
  console.log(search_text);

  loadmeal(search_text);
});
