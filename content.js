

function encrypt(text, n = 1) {
    if (!text || n <= 0) return text;
    let arr = text.split('');
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        arr1 = arr.filter((_, index) => index % 2 === 1);
        arr2 = arr.filter((_, index) => index % 2 === 0);
        arr = arr1.concat(arr2);
    }
    return arr.join('');
}

function decrypt(encryptedText, n = 1) {
    if (!encryptedText || n <= 0) return encryptedText;
    let arr = encryptedText.split('');
    let arr1 = [];
    let arr2 = [];
    let middle = Math.floor(encryptedText.length / 2);
    for (let i = 0; i < n; i++) {
        arr1 = arr.slice(0, middle);
        arr2 = arr.slice(middle);
        arr = [];
        for (let j = 0; j < arr2.length; j++) {
            arr.push(arr2[j]);
            if (arr1[j]) arr.push(arr1[j]);
        }
    }
    return arr.join('');
}











console.log('content.js loaded');
// let arr=Array.from(document.getElementsByClassName("_11JPr selectable-text copyable-text"))
function begin() {

    let mainEl = null
    let boxno = 0

    function powersend() {
        return function () {
            let mainEl = document.querySelector('#main')
            let sndiv = mainEl.querySelector('[aria-label="Send"]')
            let textarea = mainEl.querySelector('div[contenteditable="true"]')
            let mess = 'xXx'
            if (textarea.textContent.slice(0, 2) == '@@') {

                mess = encrypt(textarea.textContent.slice(2))
                mess += '@@AA'
            }
            else {
                mess = encrypt(textarea.textContent)
            }
            textarea.focus()
            document.execCommand('selectAll', false, null)
            document.execCommand('insertText', false, '####')
            document.execCommand('selectAll', false, null)
            document.execCommand('insertText', false, mess)
            // textareaEl.dispatchEvent(new Event('change', { bubbles: true }))
            setTimeout(() => { sndiv.click() }, 200)
            setTimeout(manipulate, 500)
            // decriptionprotocol();
        }

    }

    function manipulate() {
        const predecrypt = (x) => {
            if (x.slice(0, 4) === '####') {
                if (x.slice(-4) === '@@AA') {
                    x = decrypt(x.slice(4, -4))
                    return `<a href="${x}">${x}</a>`
                }

                return decrypt(x.slice(4))
            }
            return x;
        }
        let mainel = document.querySelector('#main')
        if (mainel == mainEl) {
            console.log('mainEl is same')
            if (mainEl != null) {
                if (boxno !== mainEl.querySelectorAll('div[role="row"]').length) {
                    console.log('New messages')
                    decryptionprotocol();
                }
            }
        }
        else {
            mainEl = mainel;
            decryptionprotocol();
            sendbutt();
        }
        function decryptionprotocol() {
            const decryption = (x) => {
                x.innerHTML = predecrypt(x.textContent)

            }
            let messboxes = mainEl.querySelectorAll('div[role="row"]')
            boxno = messboxes.length

            messboxes.forEach(box => {
                let mess = box.querySelectorAll('span:not(:empty):not(:has(*))');
                let limess = box.querySelectorAll('span:not(:empty):has(a)');
                if (mess.length == 3) {
                    decryption(mess[0])
                }
                if (mess.length == 5) {
                    decryption(mess[1])
                    decryption(mess[2])
                }
                if (limess.length === 2) {
                    limess[1].firstElementChild.textContent = '@DARKLORD SECURED';
                    if (mess.length == 5) {
                        mess[0].parentElement.parentElement.parentElement.parentElement.remove();
                    }
                }

            }
            );
        }
        function sendbutt() {
            let sndiv = (mainEl.querySelector('[aria-label="Send"]') || mainEl.querySelector('[aria-label="Voice message"]')).parentElement
            let parent = sndiv.parentElement;
            let ndiv = document.createElement('div');
            parent.appendChild(ndiv);
            ndiv.className = sndiv.className;
            ndiv.innerHTML = sndiv.innerHTML;
            ndiv.firstElementChild.setAttribute('aria-label', 'powersend');
            ndiv.firstElementChild.setAttribute('id', 'powersend');
            ndiv.firstElementChild.onclick = powersend();
            ndiv.firstElementChild.firstElementChild.firstElementChild.innerHTML = `<title>powersend</title>
        <path fill="currentColor" d="M5,8 L19,8 L19,16 L12,16 L12,21 L12,16 L5,16 Z"></path>`
        }
    }


    function setup() {
        let convertab = document.querySelector('#side').querySelectorAll('div[role="listitem"]')
        convertab.forEach((conv) => {
            conv.addEventListener('click', manipulate);
            // conv.addEventListener('click', loged);
            // conv.addEventListener('click', powersend());
        })


    }
    setup();

    // setInterval(setup, 8000);
    // setInterval(manipulate, 20000);

    const observer = new MutationObserver((mutations) => {
        // mutations.forEach((mutation) => {
        //     if (mutation.addedNodes.length) {
        //         // setup();
        //         // console.log(mutation.addedNodes)
        //     }
        console.log('matupulation detected')
        // console.log(mutations)
    });

    observer.observe(document.querySelector('div[aria-label="Chat list"]'), {
        childList: true
        // subtree: true
    });
}


// document.addEventListener('DOMContentLoaded', begin);


function cheak() {
    if (document.querySelector('#side')) {
        begin();
        console.log('begining')
    }
    else {
        console.log('waiting for page to load')
        setTimeout(cheak, 2000);
    }
}

setTimeout(cheak, 15000);
console.log('end of content.js');