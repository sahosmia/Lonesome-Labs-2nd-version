// ==============================================================

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion-item");

  accordionItems.forEach((item) => {
    const button = item.querySelector(".accordion-button");
    const collapse = item.querySelector(".accordion-collapse");
    const icon = item.querySelector(".accordion-button i");

    button.addEventListener("click", function () {
      // Close all accordion items
      accordionItems.forEach((innerItem) => {
        if (innerItem !== item) {
          innerItem.classList.remove("open");
          innerItem
            .querySelector(".accordion-collapse")
            .classList.remove("show");
          innerItem
            .querySelector(".accordion-button i")
            .classList.replace("fa-chevron-up", "fa-chevron-down");
        }
      });

      // Toggle the clicked item
      item.classList.toggle("open");
      collapse.classList.toggle("show");
      icon.classList.toggle("fa-chevron-down");
      icon.classList.toggle("fa-chevron-up");
    });
  });
});

// ================================

function hideAllSections() {
  document.getElementById("section1").classList.add("hidden");
  document.getElementById("section2").classList.add("hidden");
  document.getElementById("section3").classList.add("hidden");
  document.getElementById("section4").classList.add("hidden");

  document.getElementById("button1").classList.remove("bg-main");
  document.getElementById("button1").classList.remove("text-white");
  document.getElementById("button1").classList.add("text-main");

  document.getElementById("button2").classList.remove("bg-main");
  document.getElementById("button2").classList.remove("text-white");

  document.getElementById("button3").classList.remove("bg-main");
  document.getElementById("button3").classList.remove("text-white");

  document.getElementById("button4").classList.remove("bg-main");
  document.getElementById("button4").classList.remove("text-white");
}

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");
const button4 = document.getElementById("button4");

if (button1) {
  button1.addEventListener("click", function () {
    hideAllSections();
    document.getElementById("section1").classList.remove("hidden");
    document.getElementById("button1").classList.add("bg-main");
    document.getElementById("button1").classList.add("text-white");
  });
}

if (button2) {
  document.getElementById("button2").addEventListener("click", function () {
    hideAllSections();
    document.getElementById("section2").classList.remove("hidden");
    document.getElementById("button2").classList.add("bg-main");
    document.getElementById("button2").classList.add("text-white");
  });
}
if (button3) {
  document.getElementById("button3").addEventListener("click", function () {
    hideAllSections();
    document.getElementById("section3").classList.remove("hidden");
    document.getElementById("button3").classList.add("bg-main");
    document.getElementById("button3").classList.add("text-white");
  });
}
if (button4) {
  document.getElementById("button4").addEventListener("click", function () {
    hideAllSections();
    document.getElementById("section4").classList.remove("hidden");
    document.getElementById("button4").classList.add("bg-main");
    document.getElementById("button4").classList.add("text-white");
  });
}
// =====================
const navLinks = document.querySelector(".nav-links");
function onToggleMenu(e) {
  navLinks.classList.toggle("top-[9%]");
}

// ======


