const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listItems = ingredients.map((ingredient) => {
  const list = document.createElement("li");
  list.textContent = ingredient;
  list.classList.add("item");
  return list;
});
const list = document.querySelector("#ingredients");
list.append(...listItems);
console.log(listItems);
