function playsound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return ;
    audio.currentTime= 0 ; 
    audio.play();
    key.classList.add('playing')};

function removetransition(e){

    if (e.propertyName !== 'transform') return ;

    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removetransition));

window.addEventListener('keydown' , playsound );

const clicky = document.getElementById("clicky");
// const clicky = document.querySelector(`.key[data-key="${onclick.keyCode}"]`);


function playMusic(d){
    const clicky2 = document.querySelector(`#clicky[data-key="${d.getAttribute('data-key')}"]`);
    clicky2.currentTime= 0 ;
    clicky2.play();
}

function doAnimation(d){
    const rec = document.querySelector(`.key[data-key="${d.getAttribute('data-key')}"]`);
    rec.classList.add('playing');
}
