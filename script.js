const hearts = document.querySelectorAll(".heartBtn");
const check = document.querySelectorAll(".mark-as-read");
const deleteButtons = document.querySelectorAll(".cards .delete");

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    heart.classList.toggle("on");
  });
});

check.forEach((mark) => {
  mark.addEventListener("click",() => {
    mark.classList.toggle("checked");
    
  });
});

deleteButtons.forEach(item => {
  item.addEventListener("click", () => {
    const card = item.closest('.cards')
    card.parentNode.removeChild(card);
  })
})