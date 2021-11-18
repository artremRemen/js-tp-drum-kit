window.addEventListener("keydown", (e) =>{
    if (e.key === 'q'||e.key === 's' || e.key === 'd' || e.key === 'f' || e.key === 'g' || e.key === 'h' || e.key === 'j'|| e.key === 'k' || e.key === 'l') {
        sound(e.key);
    }
},
false);
const elements = document.querySelectorAll('div.key');
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    element.addEventListener('click', (event) =>{
        const childs = elements[i].childNodes;
        const letter = childs[1].textContent.toLowerCase();
        sound(letter);
    });
}
let sound = (key)=>{
    const body = document.body;
    const AudioFile = document.querySelector(`audio[data-key="${key}"]`);
    const DivTouch = document.querySelectorAll(`div[data-key="${key}"]`);
    DivTouch[0].classList.add(key);
    DivTouch[0].classList.add('playing');
    body.classList.add(key);
    AudioFile.currentTime = 0
    AudioFile.play()
    AudioFile.addEventListener("ended", function() 
        {
            DivTouch[0].classList.remove(key);
        });
    setTimeout( () =>{
        body.classList.remove(key);
        DivTouch[0].classList.remove('playing');
    }, 500)
}