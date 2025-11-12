// ждем загрузку все страницы и его содерж
document.addEventListener('DOMContentLoaded', function(){
    // переменные
    // в джс в переменные можно класть не только стандартные типы данных но и состояния
    // тегов из хтмл файла
    // находим все эелементы слайдера в хтмл
    const slidesContainer = document.querySelector('.slides'); // конт с слайдами
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    // создание переменной которая будет считать текущий слайд начиная с 0 
    let currentSlide = 0;
    const totalSlides = slides.length; // сколько всего слайдов есть в слайдере

    
});