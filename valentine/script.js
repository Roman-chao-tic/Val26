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

    // Change No button text
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase Yes button size gradually
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleYesClick() {

    // Hide Yes / No buttons
    const buttonContainer = document.getElementById("buttonContainer");
    buttonContainer.style.display = "none";

    // Change heading text
    const heading = document.getElementById("mainHeading");
    heading.innerText = "You just made me the happiest person ❤️";

    // Reveal playlist button with glow
    const btn = document.getElementById("playlistBtn");
    btn.classList.remove("hidden");

    // Trigger glow animation smoothly
    setTimeout(() => {
        btn.classList.add("playlist-visible");
    }, 100);
}

function openPlaylist(){
    window.open(
        "https://open.spotify.com/playlist/4rYSFLBQpDG7Eh5m7aqaXT?si=6LEqCEN7TYSq9eYa-f2X7Q",
        "_blank"
    );
}
