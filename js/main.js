let Atouch = Array();
let ok = false;
let TouchLowerCase;
window.addEventListener("keydown", (e) =>{
        verif(e.key);
},
false);
const elements = document.querySelectorAll('div.key');
for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const childs = elements[i].childNodes;
    Atouch.push(childs[1].textContent.toLowerCase()); 
    element.addEventListener('click', (event) =>{
        const childs = elements[i].childNodes;
        TouchLowerCase = childs[1].textContent.toLowerCase()
        Atouch.push(childs[1].textContent.toLowerCase()); 
        verif(TouchLowerCase);
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
const verif = (pressedTouch) =>{
    for (let k = 0; k < Atouch.length; k++) {
        const sTouch = Atouch[k];
        if (pressedTouch === sTouch) {
            ok = true;
            sound(pressedTouch);
            return
        }
    }
}