const emojis = ['😔', '😢', '🙁', '😞', '😩'];
const emojiElement = document.getElementById('emoji');

function changeEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emojiElement.textContent = emojis[randomIndex];
}

// Change emoji every 2 seconds
setInterval(changeEmoji, 2000);
