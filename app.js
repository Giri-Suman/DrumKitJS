
function playAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`);
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.add('playing');
    if (!audio) return; // stop playing
    audio.currentTime = 0;
    audio.play();
    console.log(key);
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
window.addEventListener('keydown', playAudio);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


