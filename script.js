const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const buttons = document.getElementById("buttons");

// Create sound buttons
sounds.forEach(sound => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSongs();

        const audio = document.getElementById(sound);
        audio.play();
    });

    buttons.appendChild(btn);

    const audio = document.createElement("audio");
    audio.id = sound;
    audio.src = `sounds/${sound}.mp3`;

    document.body.appendChild(audio);
});

// Stop button
const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "stop";

stopBtn.addEventListener("click", stopSongs);

buttons.appendChild(stopBtn);

// Function to stop all sounds
function stopSongs() {
    sounds.forEach(sound => {
        const audio = document.getElementById(sound);
        audio.pause();
        audio.currentTime = 0;
    });
}//your JS code here. If required.
