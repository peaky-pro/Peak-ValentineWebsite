// Get elements from the page
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const bouquet = document.getElementById('response');
const backgroundMusic = document.getElementById('backgroundMusic');

// make the "No" button move when hovered
noButton.addEventListener('mouseover' , () => {
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});

// show the celebration gif, heartfelt message and play music when YES is clicked
yesButton.addEventListener('click', () => {
    response.style.display = 'block'; // show the respose section
    backgroundMusic.play(); // play the music
    
});

