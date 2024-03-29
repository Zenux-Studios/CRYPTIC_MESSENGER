console.log('content.js loaded');
// let arr=Array.from(document.getElementsByClassName("_11JPr selectable-text copyable-text"))

let mainEl = null
let boxno = 0
function manipulate() {
    let mainel = document.querySelector('#main')
    if (mainel == mainEl) {
        console.log('mainEl is same')
        if(mainEl != null){
            if(boxno !== mainEl.querySelectorAll('div[role="row"]').length){
                console.log('New messages')
                decript();
            }
        }
    }
    else {
        mainEl = mainel;
        decriptionprotocol();
        sendbutt();
    }
    function decriptionprotocol() {
        function decript(x){
            x.textContent = 'lolypop'

        }
        let messboxes = mainEl.querySelectorAll('div[role="row"]')
        boxno = messboxes.length

        messboxes.forEach(box => {
            let mess = box.querySelectorAll('span:not(:empty):not(:has(*))');
            if(mess.length == 3){
                decript(mess[0])
            }
            if(mess.length == 5){
                console.log(mess)
                decript(mess[2])
                decript(mess[3])
            }
        });

        messboxes.forEach(box => {
            let mess = box.querySelectorAll('span:not(:empty):has(a)');
            if(mess.length == 0) return;
            mess[1].firstElementChild.textContent = 'linkedup'

        });
    }
    function sendbutt() {
        let sndiv=(mainEl.querySelector('[aria-label="Send"]')||mainEl.querySelector('[aria-label="Voice message"]')).parentElement
        let parent = sndiv.parentElement;
        let ndiv = document.createElement('div');
        parent.appendChild(ndiv);
        ndiv.className = sndiv.className;
        ndiv.innerHTML = sndiv.innerHTML;
        ndiv.firstElementChild.setAttribute('aria-label', 'powersend');
        ndiv.firstElementChild.setAttribute('id', 'powersend');
        ndix.firstElementChild.firstElementChild.firstElementChild.innerHTML = `<title>powersend</title>
        <path fill="currentColor" d="M5,8 L19,8 L19,16 L12,16 L12,21 L12,16 L5,16 Z
"></path>`

    }
}

setInterval(manipulate, 20000);
// if(mainEl != null)s
// break
// }

// let messboxes = document.querySelector('#main').querySelectorAll('div[role="row"]')
// messboxes[0].querySelector('span:not(:empty):not(:has(*))');
// messboxes[20].querySelectorAll('span:not(:empty):not(:has(*))')[0].textContent = 'lolypop';
// messboxes[20].querySelectorAll('span:not(:empty):has(a)')[0].textContent = 'lolypop';
