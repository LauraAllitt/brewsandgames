const menu_item = document.querySelectorAll('.sidebar .menu .menu-item .menu-link');

window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
document.querySelector(".hamburger-menu").addEventListener("click touch", () => {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll-btn").addEventListener ("click touch", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

document.querySelector(".button").addEventListener ("click touch", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
});

menu_item.forEach(item => {
    item.addEventListener("click touch" , () => {
        document.querySelector(".container").classList.toggle('change');
        document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
        document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
    });
});