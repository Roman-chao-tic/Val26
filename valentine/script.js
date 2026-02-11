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

    // Hide Yes/No buttons
    document.getElementById("buttonContainer").style.display = "none";

    // Change heading
    document.getElementById("mainHeading").innerText =
        "You just made me the happiest person ❤️";

    // Show glowing heart
    const heart = document.getElementById("heartGlow");
    heart.classList.remove("hidden");

    setTimeout(() => {
        heart.classList.add("heart-visible");
    }, 100);
}
