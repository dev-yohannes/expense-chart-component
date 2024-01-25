const bars = document.querySelectorAll(".bar");
const moneySpan = document.querySelectorAll(".money-value");

moneySpan.forEach((money) => {
  money.classList.toggle("money-display");
});

bars.forEach((bar) => {
  bar.addEventListener("click", () => {
    moneySpan.forEach((money, e) => {
      money.classList.toggle("money-display");
      console.log(e.targe);
    });
  });
});
