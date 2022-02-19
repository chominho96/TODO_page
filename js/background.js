const images = ["0.jpg", "1.jpg", "2.jpeg"];

const body = document.querySelector("body");

const bgImage = `images/${images[Math.floor(Math.random() * images.length)]}`;

// document.body.appendChild(bgImage);

body.style.backgroundImage = `url('${bgImage}')`;
