let project = document.getElementsByClassName("project");
let slideIndex = 1;

showProject(slideIndex);

function showProject(num) {

    if (num > project.length) {
        slideIndex = 1;
    }

    if (num < 1) {
        slideIndex = project.length;
    }

    for (let i = 0; i < project.length; i++) {
        project[i].style.display = "none";
    }
    project[slideIndex - 1].style.display = "flex";
}

function navigateProject(num) {
    showProject((slideIndex += num));
}


var video = $('.card--recipe').hover(hoverVideo, hideVideo);

function hoverVideo(e) {
    $('video', this).get(0).play();
    $('.card--recipe').addClass('is--playing');
}

function hideVideo(e) {
    $('video', this).get(0).pause();
    $('.card--recipe').removeClass('is--playing');
}

let currentIndex = 0;
const cards = document.querySelectorAll('.card--recipe');
const nextButton = document.querySelector('.next-button');
const prevButton = document.querySelector('.prev-button');

function updateCardVisibility() {
    cards.forEach((card, index) => {
        card.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCardVisibility();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCardVisibility();
});

updateCardVisibility(); // Initialize the first card as visible