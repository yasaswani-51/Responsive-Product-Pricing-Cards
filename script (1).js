const monthlyBtn = document.getElementById("monthly");
const yearlyBtn = document.getElementById("yearly");
const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {
  prices.forEach((price) => {
    price.textContent = price.dataset[period];
  });

  units.forEach((unit) => {
    unit.textContent = period === "monthly" ? "per month" : "per year";
  });

  [[monthlyBtn, "monthly"], [yearlyBtn, "yearly"]].forEach(([btn, name]) => {
    const isActive = name === period;
    btn.setAttribute("aria-pressed", String(isActive));
    btn.classList.toggle("active", isActive);
  });
}

monthlyBtn.addEventListener("click", () => setPeriod("monthly"));
yearlyBtn.addEventListener("click", () => setPeriod("yearly"));

setPeriod("monthly");
