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
function handleYesClick(){
    const btn = document.getElementById("playlistBtn");

    // Reveal button with glow
    btn.classList.remove("hidden");

    // Small delay for smoother animation trigger
    setTimeout(() => {
        btn.classList.add("playlist-visible");
    }, 50);

    // Change heading text for effect
    document.querySelector("h1").innerText =
        "You just made me the happiest person ❤️";
}
function openPlaylist(){
    window.open(
        "https://open.spotify.com/playlist/4rYSFLBQpDG7Eh5m7aqaXT?si=6LEqCEN7TYSq9eYa-f2X7Q",
        "_blank"
    );
}
