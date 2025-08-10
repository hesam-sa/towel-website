
const slides = document.getElementById("slides");
if (slides) {
  const images = slides.querySelectorAll("img");
  const total = images.length;

  let index = 0;
  let direction = 1;

  function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;
  }


  let sliderInterval = setInterval(() => {
    index += direction;

    if (index === total - 1) {
      direction = -1;
    } else if (index === 0) {
      direction = 1;
    }

    showSlide(index);
  }, 3000);


  document.getElementById("next").addEventListener("click", () => {
    clearInterval(sliderInterval);
    if (index < total - 1) {
      index++;
    } else {
      index = 0;
    }
    showSlide(index);
  });


  document.getElementById("prev").addEventListener("click", () => {
    clearInterval(sliderInterval);
    if (index > 0) {
      index--;
    } else {
      index = total - 1;
    }
    showSlide(index);

  });
}

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hide");
  } else {
    navbar.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

let count = 1;
const countElement = document.getElementById("count");

function increase() {
  count++;
  countElement.textContent = count;
}

function decrease() {
  if (count > 1) {
    count--;
    countElement.textContent = count;
  }
}

const acc = document.querySelectorAll(".accordion");

acc.forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});