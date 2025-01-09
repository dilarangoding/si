const dropdownButton = document.getElementById("dropdownButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdown = dropdownButton.parentElement;

let isMenuOpen = false;

dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  isMenuOpen = !isMenuOpen;
  dropdownMenu.classList.toggle("show");
  dropdownButton.querySelector("svg").style.transform = isMenuOpen
    ? "rotate(180deg)"
    : "";
});

dropdown.addEventListener("mouseenter", () => {
  isMenuOpen = true;
  dropdownMenu.classList.add("show");
  dropdownButton.querySelector("svg").style.transform = "rotate(180deg)";
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    isMenuOpen = false;
    dropdownMenu.classList.remove("show");
    dropdownButton.querySelector("svg").style.transform = "";
  }
});

dropdownMenu.querySelectorAll("a").forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    isMenuOpen = false;
    dropdownMenu.classList.remove("show");
    dropdownButton.querySelector("svg").style.transform = "";
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const videoButton = document.querySelector(".video-play-button");
if (videoButton) {
  videoButton.addEventListener("click", () => {
    console.log("Video play clicked");
  });
}

document.querySelectorAll(".mainHeader").forEach((header) => {
  header.addEventListener("click", () => {
    const currentSection = header.parentElement;
    const wasActive = currentSection.classList.contains("active");

    document.querySelectorAll(".section").forEach((section) => {
      section.classList.remove("active");
    });

    if (!wasActive) {
      currentSection.classList.add("active");
    }
  });
});

function openModal(card) {
  const name = card.getAttribute("data-name");
  const id = card.getAttribute("data-id");
  const email = card.getAttribute("data-email");
  const img = card.getAttribute("data-img");

  document.getElementById("modal-name").textContent = name;
  document.getElementById("modal-id").textContent = `ID: ${id}`;
  document.getElementById("modal-email").textContent = `Email: ${email}`;
  document.getElementById("modal-avatar").src = img;

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const currentValue = Math.floor(progress * (end - start) + start);
    obj.innerHTML = currentValue.toLocaleString();
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const counters = document.querySelectorAll(".counter");
let animated = false;

function startCounters() {
  if (!animated) {
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute("data-val"));
      animateValue(counter, 0, target, 2000);
    });
    animated = true;
  }
}

function handleScroll() {
  if (!animated && counters.length > 0 && isInViewport(counters[0])) {
    startCounters();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);

window.addEventListener("load", handleScroll);
