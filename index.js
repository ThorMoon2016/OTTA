const jobBoxes = document.querySelectorAll('.premium-job-box');
const prevButton = document.querySelector('.slider-button.prev');
const nextButton = document.querySelector('.slider-button.next');
let currentIndex = 0;

function showJob(index) {
    jobBoxes.forEach((box, i) => {
        box.classList.toggle('active', i === index);
    });
    prevButton.disabled = (index === 0);
    nextButton.disabled = (index === jobBoxes.length - 1);
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showJob(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < jobBoxes.length - 1) {
        currentIndex++;
        showJob(currentIndex);
    }
});

// Show the first job by default
showJob(currentIndex);
