const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const todayImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${todayImage}`;

bgImage.width = 600;

document.body.appendChild(bgImage);