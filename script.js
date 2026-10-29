const header = document.querySelector("#header");
const menuToggle = document.querySelector("#menuToggle");
const nav = document.querySelector("#nav");
const requestForm = document.querySelector("#requestForm");
const toast = document.querySelector("#toast");

const whatsappNumber = "996555123456";

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const phone = document.querySelector("#phone").value.trim();
  const workType = document.querySelector("#workType").value;

  if (!name || !phone || !workType) {
    return;
  }

  const message = [
    "Здравствуйте! Хочу получить расчёт стоимости.",
    "",
    `Имя: ${name}`,
    `Телефон: ${phone}`,
    `Тип работ: ${workType}`
  ].join("\n");

  const whatsappUrl =
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  toast.classList.add("show");

  // setTimeout(() => {
  //   window.open(whatsappUrl, "_blank");
  //   toast.classList.remove("show");
  //   requestForm.reset();
  // }, 700);
});
