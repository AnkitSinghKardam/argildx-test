const navbar = document.getElementById('navbar')

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;
  if (scroll > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled")
  }
};

window.addEventListener('scroll', onScroll);

document.querySelector(".toggle").addEventListener("click", function() {
    document.querySelectorAll("nav > div:last-child a").forEach((el) => {
        el.classList.toggle("show");
    });
});