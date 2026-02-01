const burger = document.querySelector(".header__nav--burger");
const navList = document.querySelector(".nav__list");

burger.addEventListener("click", () => {
  if (navList.classList.contains("show")) {
    navList.classList.remove("show");
  } else {
    navList.classList.add("show");
  }
});

const scroll_button = document.querySelector('.scroll_to_top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600){
        scroll_button.classList.remove('hidden');
    }else{
        scroll_button.classList.add('hidden');
    }
  
});



scroll_button.addEventListener('click',(event)=>{
    event.preventDefault()
    window.scrollTo(top)
})

const slide_buttons = document.querySelectorAll('.slide-buttons > button')

document.querySelector('.slide-buttons').addEventListener('click', (event)=>{
    slide_buttons.forEach((el)=>{
        el.classList.remove('selected')
    })
    event.target.classList.add('selected')
})

