const data = {
  daily: {
    work: { current: "5hrs", previous: "Last Day - 7hrs" },
    play: { current: "2hrs", previous: "Last Day - 3hrs" },
    study: { current: "1hr", previous: "Last Day - 2hrs" },
    exercise: { current: "1hr", previous: "Last Day - 1hr" },
    social: { current: "1hr", previous: "Last Day - 2hrs" },
    "self-care": { current: "0hrs", previous: "Last Day - 1hr" },
  },
  weekly: {
    work: { current: "32hrs", previous: "Last Week - 36hrs" },
    play: { current: "10hrs", previous: "Last Week - 8hrs" },
    study: { current: "4hrs", previous: "Last Week - 7hrs" },
    exercise: { current: "4hrs", previous: "Last Week - 5hrs" },
    social: { current: "5hrs", previous: "Last Week - 10hrs" },
    "self-care": { current: "2hrs", previous: "Last Week - 2hrs" },
  },
  monthly: {
    work: { current: "120hrs", previous: "Last Month - 140hrs" },
    play: { current: "40hrs", previous: "Last Month - 50hrs" },
    study: { current: "20hrs", previous: "Last Month - 30hrs" },
    exercise: { current: "16hrs", previous: "Last Month - 20hrs" },
    social: { current: "18hrs", previous: "Last Month - 25hrs" },
    "self-care": { current: "10hrs", previous: "Last Month - 12hrs" },
  },
};

document.querySelectorAll(".time-filter button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".time-filter .active").classList.remove("active");
    button.classList.add("active");

    const period = button.dataset.period;

    document.querySelectorAll(".card").forEach((card) => {
      const category = card.classList[1];
      card.querySelector(".hours").textContent = data[period][category].current;
      card.querySelector(".previous").textContent = data[period][category].previous;
    });
  });
});
