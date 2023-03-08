const listEl = document.querySelector('.item');

listEl.forEach((element) => {
  const titleListEl = element.firstElementChild;
  const listSubEl = titleListEl.nextElementSibling;
  const listItemEl = listSubEl.children;

})