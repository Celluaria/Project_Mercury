const yes = document.getElementById("yes");
const no = document.getElementById("no");
const orBtn = document.getElementById("or");

const message = document.getElementById("message");
const naughty = document.getElementById("naughty");

const gate = document.getElementById("gate");
const home = document.getElementById("home");

const spaceScene = document.getElementById("spaceScene");
const homeHint = document.getElementById("homeHint");

const emojiKeyboard = document.getElementById("emojiKeyboard");
const emojiGrid = document.getElementById("emojiGrid");
const emojiAnimation = document.getElementById("emojiAnimation");
const videoPage = document.getElementById("videoPage");

let dodgeCount = 0;
let lockedNo = false;
let emojiKeyboardCreated = false;
let emojiProgress = 0;

function enterHome() {
    gate.style.display = "none";
    home.style.display = "flex";
}

yes.onclick = enterHome;

orBtn.onclick = () => {
    message.innerText = "Are you really sure...? 🥺";
};

const positions = [
    { left: "65%", top: "50%" },
    { left: "80%", top: "50%" },
    { left: "70%", top: "30%" },
    { left: "82%", top: "35%" },
    { left: "62%", top: "65%" },
    { left: "78%", top: "65%" },
    { left: "68%", top: "45%" },
    { left: "84%", top: "55%" },
    { left: "72%", top: "40%" },
    { left: "74%", top: "50%" }
];

function dodgeNo() {
    if (lockedNo) return;

    if (dodgeCount >= 9) {
        lockedNo = true;
        no.style.left = "74%";
        no.style.top = "50%";
        return;
    }

    dodgeCount++;

    const pos = positions[dodgeCount];

    no.style.left = pos.left;
    no.style.top = pos.top;
    no.style.transform = "translate(-50%, -50%)";
}

no.addEventListener("mouseenter", dodgeNo);

no.addEventListener("click", () => {
    if (!lockedNo) return;

    no.textContent = "YES";

    naughty.classList.remove("show");
    void naughty.offsetWidth;
    naughty.classList.add("show");

    setTimeout(enterHome, 1200);
});

spaceScene.addEventListener("click", () => {
    homeHint.innerText = "Curious people usually INSPECT things.";
    homeHint.classList.add("visible");
});

function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function createEmojiKeyboard() {
    if (emojiKeyboardCreated) return;

    emojiKeyboardCreated = true;

    const requiredEmojis = ["🐇", "❤️", "🐙"];

    const randomPool = [
        "☿", "☀", "🌙", "⭐", "✨",
        "🌌", "🪐", "🌍", "🌊", "🫧",
        "🌸", "🍓", "🍰", "🧸", "🎀",
        "💌", "🔐", "🗝️", "🦋", "🍀"
    ];

    const chosenRandoms = shuffleArray(randomPool).slice(0, 17);
    const allEmojis = shuffleArray([...requiredEmojis, ...chosenRandoms]);

    emojiGrid.innerHTML = "";

    allEmojis.forEach((emoji) => {
        const button = document.createElement("button");
        button.className = "emoji-key";
        button.textContent = emoji;

        button.addEventListener("click", () => {
            handleEmojiClick(emoji, button);
        });

        emojiGrid.appendChild(button);
    });
}

function showEmojiKeyboard() {
    createEmojiKeyboard();
    emojiKeyboard.style.display = "flex";
}

function handleEmojiClick(emoji, button) {
    const sequence = ["🐇", "❤️", "🐙"];

    if (emoji === sequence[emojiProgress]) {
        button.classList.add("correct");
        emojiProgress++;

        if (emojiProgress === sequence.length) {
            playEmojiAnimation();
        }

        return;
    }

    emojiProgress = 0;

    document.querySelectorAll(".emoji-key").forEach((key) => {
        key.classList.remove("correct");
    });
}

function playEmojiAnimation() {
    emojiKeyboard.style.display = "none";

    emojiAnimation.textContent = "🐇 ❤️ 🐙";
    emojiAnimation.classList.remove("play");
    void emojiAnimation.offsetWidth;
    emojiAnimation.classList.add("play");

    setTimeout(() => {
        openVideoPage();
    }, 1300);
}

function openVideoPage() {
    home.style.display = "none";
    videoPage.style.display = "block";

    const video = document.getElementById("mercuryTransmission");

    if (video) {
        video.play().catch(() => {});
    }
}

document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i")
    ) {
        showEmojiKeyboard();
    }
});

console.clear();

console.log(`
Hello Yako 🐙

I'm glad you found your way here.

Celluaria 🐇 was hoping you would.
`);

console.log(`
Celluaria 🐇 travelled a very long way.

And brought back a few curious things
for Yako 🐙.
`);

console.log(`

https://reurl.cc/aXgGkZ

`);

console.log(`
Maybe they mean nothing.

Maybe they mean something.

But Celluaria 🐇 wanted to share them with Yako 🐙.

`);
