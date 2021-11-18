/*

let oDoc = document.querySelectorAll('.key');
let AudioFile
window.addEventListener("keydown", (e) =>{
    switch (e.code) {
        case 'KeyA':
            AudioFile = document.querySelector('audio[data-key="q"]')
            AudioFile.play()
            oDoc[0].classList.add('q');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[0].classList.remove('q');
            });
        break;
        case 'KeyS':
            AudioFile = document.querySelector('audio[data-key="s"]')
            AudioFile.play()
            oDoc[1].classList.add('s');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[1].classList.remove('s');
            });
        break;
        case 'KeyD':
            AudioFile = document.querySelector('audio[data-key="d"]')
            AudioFile.play()
            oDoc[2].classList.add('d');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[2].classList.remove('d');
            });
        break;
        case 'KeyF':
            AudioFile = document.querySelector('audio[data-key="f"]')
            AudioFile.play()
            oDoc[3].classList.add('f');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[3].classList.remove('f');
            });
        break;
        case 'KeyG':
            AudioFile = document.querySelector('audio[data-key="g"]')
            AudioFile.play()
            oDoc[4].classList.add('g');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[4].classList.remove('g');
            });
        break;
        case 'KeyH':
            AudioFile = document.querySelector('audio[data-key="h"]')
            AudioFile.play()
            oDoc[5].classList.add('h');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[5].classList.remove('h');
            });
        break;
        case 'KeyJ':
            AudioFile = document.querySelector('audio[data-key="j"]')
            AudioFile.play()
            oDoc[6].classList.add('j');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[6].classList.remove('j');
            });
        break;
        case 'KeyK':
            AudioFile = document.querySelector('audio[data-key="k"]')
            AudioFile.play()
            oDoc[7].classList.add('k');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[7].classList.remove('k');
            });
        break;
        case 'KeyL':
            AudioFile = document.querySelector('audio[data-key="l"]')
            AudioFile.play()
            oDoc[8].classList.add('l');
            AudioFile.addEventListener("ended", function() 
            {
                oDoc[8].classList.remove('l');
            });
        break;
    
        default:
            console.log('rientrouver');
        break;
    }
},
false);

*/




window.addEventListener("keydown", (e) =>{
    if (e.key === 'q'||e.key === 's' || e.key === 'd' || e.key === 'f' || e.key === 'g' || e.key === 'h' || e.key === 'j'|| e.key === 'k' || e.key === 'l') {
        sound(e.key);
    }
},
false);

let sound = (key)=>{
    const body = document.body;
    let AudioFile = document.querySelector(`audio[data-key="${key}"]`);
    const DivTouch = document.querySelectorAll(`div[data-key="${key}"]`);
    DivTouch[0].classList.add(key);
    body.classList.add(key);
    AudioFile.play();
    AudioFile.addEventListener("ended", function() 
    {
        DivTouch[0].classList.remove(key);
        
    });
    window.addEventListener("keyup", (e) =>{
        
        body.classList.remove(key);
    },
    false);
}