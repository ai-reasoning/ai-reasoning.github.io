function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    menu.classList.toggle("hidden");
}

document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav");
    if (window.scrollY > 0) {
      navbar.classList.add("sticky", "top-0", "z-50", "shadow-md");
    } else {
      navbar.classList.remove("sticky", "top-0", "z-50", "shadow-md");
    }
});

function toggleAbstract(button, id) {
  const abstract = document.getElementById(id);
  if (abstract.classList.contains('line-clamp-5')) {
    abstract.classList.remove('line-clamp-5');
    button.textContent = 'Read less';
  } else {
    abstract.classList.add('line-clamp-5');
    button.textContent = 'Read more';
  }
}