feather.replace();
const playPauseAudio = document.querySelector(".playPauseAudio");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
window.onload = function() {
    
    if (document.getElementById("playAudio").paused) {
        play.style.display = "block";
        pause.style.display = "none";
    }else{
        play.style.display = "none";
        pause.style.display = "block";
    }
}


playPauseAudio.onclick = function() {
    const audio = document.getElementById("playAudio");
    if (audio.paused) {
        audio.play();
        pause.style.display = "block";
        play.style.display = "none";
    } else {
        audio.pause();
        play.style.display = "block";
        pause.style.display = "none";
    }
};

const copy_rek = document.querySelector(".rek");

// klipboar disini langsung hardcode
copy_rek.onclick = function() {
navigator.clipboard.writeText("6690601646");
alert("Nomor rekening berhasil disalin");
// console.log(navigator.clipboard.readText());
};

