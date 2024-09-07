window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  // Check if the page has been scrolled more than 50px (you can adjust this value)
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function confirmRedirect() {
  if (
    confirm(
      "Sorry currently form not acceptable.\nplease click OK Button you redirect to our WhatsApp."
    )
  ) {
    window.location.href = "https://wa.me/9111514114";
  }
}

function calculateExperience(startDate) {
  const start = new Date(startDate);
  const now = new Date();

  // Calculate the difference in months
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months };
}

function displayExperience() {
  const startDate = "2021-10-01"; // Start date: October 2021
  const experience = calculateExperience(startDate);

  // Display in the format "X years, Y months"
  document.getElementById(
    "experience"
  ).textContent = `${experience.years}.${experience.months}`;
}

displayExperience();

function myFunction(x) {
  x.classList.toggle("change");

  var nav = document.getElementById("nav");
  nav.classList.toggle("close");
}
