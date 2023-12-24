"use strict";

const title = document.querySelector(".head");
const title3 = document.querySelector(".t1");

const food = async function () {
  let Response = await fetch(
    "https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886"
  );

  let data1 = await Response.json();

  let { recipe } = data1.data;

  const markup = `     <ul class="list1">
  <li>cooking time:${recipe.cooking_time}</li>
  <li>publisher:${recipe.publisher}</li>
  <li>serving:${recipe.servings}</li>
</ul>
 

  `;
  title.insertAdjacentHTML("afterend", markup);
  const markup1 = ` <div class="grid1">
    <p>Quantity:${recipe.ingredients[0].quantity} , Unit:${recipe.ingredients[0].unit} , Description:${recipe.ingredients[0].description}</p>
    <p>Quantity:${recipe.ingredients[1].quantity} , Unit:${recipe.ingredients[1].unit} , Description:${recipe.ingredients[1].description}</p>
    <p>Quantity:${recipe.ingredients[2].quantity} , Unit:${recipe.ingredients[2].unit} , Description:${recipe.ingredients[2].description}</p>
    <p>Quantity:${recipe.ingredients[3].quantity} , Unit:${recipe.ingredients[3].unit} , Description:${recipe.ingredients[3].description}</p>
    <p>Quantity:${recipe.ingredients[4].quantity} , Unit:${recipe.ingredients[4].unit} , Description:${recipe.ingredients[4].description}</p>
    <p>Quantity:${recipe.ingredients[5].quantity} , Unit:${recipe.ingredients[5].unit} , Description:${recipe.ingredients[5].description}</p>
  </div>`;

  title3.insertAdjacentHTML("afterend", markup1);
};
food();
const hugep = document.querySelector(".bigp");
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  hugep.classList.toggle("hide");
});
