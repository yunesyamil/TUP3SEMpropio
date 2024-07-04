function toggleAudio() {
    var audio = document.getElementById('background-audio');
    var audioIcon = document.getElementById('audio-icon');

    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove('bi-play');
        audioIcon.classList.add('bi-pause');
    } else {
        audio.pause();
        audioIcon.classList.remove('bi-pause');
        audioIcon.classList.add('bi-play');
    }
}