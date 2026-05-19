const yes = document.getElementById("yes");
const no = document.getElementById("no");
const orBtn = document.getElementById("or");

const message = document.getElementById("message");
const naughty = document.getElementById("naughty");

const gate = document.getElementById("gate");
const home = document.getElementById("home");

const spaceScene = document.getElementById("spaceScene");
const homeHint = document.getElementById("homeHint");

let dodgeCount = 0;
let lockedNo = false;

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

console.clear();

console.log(`
Hello Yako 🐙

You are curious.

That makes me happy.

Celluaria 🐇 was hoping
you would look here.
`);

console.log(`
Celluaria 🐇 travelled a very long way.

Across cities.
Across countries.
Across oceans.

And brought back a few curious things
for Yako 🐙.
`);

console.log(`
///stony.jeeps.powerboats

///flumes.plasmas.absorbs

///redeems.alloy.meanders
`);

console.log(`
Maybe they mean nothing.

Maybe they mean something.

But Celluaria 🐇 wanted to share them with Yako 🐙.
`);
