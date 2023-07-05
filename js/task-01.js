const itemsList = document.querySelectorAll(".item");
console.log(`Number of categories: $(itemsList.length)`);

itemsList.forEach((item) => {
  console.log(`Categories: $(item.firstElementChild?.textContent)`);
  console.log(`Elements: $(item.lastElementChild?.children.length)`);
});