(() =>{
    const drumpkit = {
        init(){
             this.Atouch = Array();
            body = document.body;
            window.addEventListener("keydown", (e) =>{
                    verif(e.key);
            },
            false);
            this.elements = document.querySelectorAll('div.key');
            for (let i = 0; i < this.elements.length; i++) {
                this.Atouch.push(this.elements[i].getAttribute('data-key')); 
                this.elements[i].addEventListener('click', (event) =>{
                    this.key = event.currentTarget.getAttribute('data-key')
                    verif(this.key);
                });
            }
            sound = (key)=>{
                this.AudioFile = document.querySelector(`audio[data-key="${key}"]`);
                DivTouch=document.querySelector(`div[data-key="${key}"]`);
                DivTouch.classList.add('playing');
                body.classList.add(key);
                this.AudioFile.currentTime = 0
                this.AudioFile.play()
                DivTouch.addEventListener("transitionend", function() 
                    {
                        body.classList.remove(key);
                        DivTouch.classList.remove('playing');
                    });
            }
            const verif = (pressedTouch) =>{
                this.pressedTouch = pressedTouch
                    if ( this.Atouch.includes(this.pressedTouch)) {
                        sound(this.pressedTouch);
                        return
                    }
            }
        }
    }
    
    drumpkit.init();
})();