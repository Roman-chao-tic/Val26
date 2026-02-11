const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
function openPlaylist(){
    window.open(
        "https://open.spotify.com/playlist/4rYSFLBQpDG7Eh5m7aqaXT?si=6LEqCEN7TYSq9eYa-f2X7Q",
        "_blank"
    );
}
.hidden {
    display: none;
}

.playlist-button {
    margin-top: 20px;
    padding: 12px 24px;
    border: none;
    border-radius: 30px;
    background-color: #1DB954;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    opacity: 0;
    transition: opacity 0.6s ease, transform 0.6s ease;
}

/* Glow animation */
@keyframes glowPulse {
    0% {
        box-shadow: 0 0 5px #1DB954;
    }
    50% {
        box-shadow: 0 0 20px #1DB954, 0 0 40px #1DB954;
    }
    100% {
        box-shadow: 0 0 5px #1DB954;
    }
}

.playlist-visible {
    display: inline-block;
    opacity: 1;
    transform: scale(1.05);
    animation: glowPulse 2s infinite;
}
