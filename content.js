
function tobi(n, l)
{
    // n = n.charCodeAt(0)
    let bin="";
    while(n>0)
    {
        bin=Math.floor(n%2)+bin;
        n=Math.floor(n/2);
    }
    for (let i=bin.length;i<l;i++)
         bin='0'+bin;
    return bin;
}

function frobi(bin){
    let n=0;
    let len=bin.length;
    for(let i=len-1;i>=0;i--)
        n+=(bin.charAt(len-1-i))*Math.pow(2,i);
    return n;

}

function cypher(){
    let base = "";
    for(let i=65;i<=90;i++)
        base+=String.fromCharCode(i);
    for(let i=97;i<=122;i++)
        base+=String.fromCharCode(i);
    for(let i=48;i<=57;i++)
        base+=String.fromCharCode(i);
    base+='+';
    base+='/';
    return base;
}

function encrypt(str){
    let raw = "";
    let res = "";
    let code = cypher();

    // str.forEach((i) => {
    for(let i=0;i<str.length;i++)   
        raw+=tobi(str.charCodeAt(i),8);
    let len = raw.length;
    while (len%6)
    {
        raw+='0';
        len++;
    }
    for(let i=0;i<len;i+=6)
        res+=code.charAt(frobi(raw.slice(i,i+6)));
    return res;
}

function decrypt(str){
    let raw = "";
    let res = "";
    let code = cypher();
    str = str.split("");
    str.forEach((i) => {
        raw+=tobi(code.indexOf(i),6);});
    let len = Math.floor(raw.length/8)*8;
    raw=raw.slice(0,len);
    for(let i=0;i<len;i+=8)
        res+=String.fromCharCode(frobi(raw.slice(i,i+8)));
    return res;
}



console.log('cypher loaded');
function begin() {

    function powersend(func,link=false) {
            let mainEl = document.querySelector('#main')
            let sndiv = mainEl.querySelector('[aria-label="Send"]')
            let textarea = mainEl.querySelector('div[contenteditable="true"]')
            let inp = textarea.textContent.trim()
            let mess = 'xXx'
            if (inp.startsWith('@@')) {
                inp=inp.slice(2)
                link = true 
            }
            
            mess = encrypt(inp)
            
            if (link)   mess += '@@AA'
            textarea.focus()
            document.execCommand('selectAll', false, null)
            document.execCommand('insertText', false, '####')
            document.execCommand('selectAll', false, null)
            document.execCommand('insertText', false, mess)
            // textareaEl.dispatchEvent(new Event('change', { bubbles: true }))
            setTimeout(() => { sndiv.click() }, 200)
            // setTimeout(manipulate, 500)
            setTimeout(func, 500)
    }
    
    
    function manipulate() {
        let boxno = 0
        const predecrypt = (x) => {
            if (x.startsWith('####')) {
                if (x.endsWith('@@AA')) {
                    x = decrypt(x.slice(4, -4))
                    return `<a href="${x}">${x}</a>`
                }

                return decrypt(x.slice(4))
            }
            return x;
        }
        let mainEl = document.querySelector('#main')      

        decryptionprotocol();
        sendbutt();
        mainEl.querySelector('div[tabindex="-1"]').addEventListener('wheel',(eve)=>
        {
            if (eve.deltaY<0)
                if (boxno !== mainEl.querySelectorAll('div[role="row"]').length) {
                    decryptionprotocol();
                }
            });


        let textarea = mainEl.querySelector('div[contenteditable="true"]')
        

        textarea.addEventListener('keydown', (event) => {
            if (event.ctrlKey && event.key === ' ') {
                event.preventDefault();
                powersend(decryptionprotocol);
            }
            if (event.shiftKey && event.key === ' ') {
                event.preventDefault();
                powersend(decryptionprotocol,true);
            }
        });
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
                    if (mess.length >2) {
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
            ndiv.firstElementChild.onclick = ()=>{powersend(decryptionprotocol)};
            ndiv.firstElementChild.firstElementChild.firstElementChild.innerHTML = `<title>powersend</title>
        <path fill="currentColor" d="M5,8 L19,8 L19,16 L12,16 L12,21 L12,16 L5,16 Z"></path>`
        }
    }


    function setup() {
        console.log('setingup')
        let convertab = document.querySelector('#side').querySelectorAll('div[role="listitem"]')
        convertab.forEach((conv) => {
            conv.addEventListener('click', manipulate);
        })


    }
    setup();


    // const observer = new MutationObserver((mutations) => {
    //     // mutations.forEach((mutation) => {
    //     //     if (mutation.addedNodes.length) {
    //     //         // setup();
    //     //         // console.log(mutation.addedNodes)
    //     //     }
    // });

    // observer.observe(document.querySelector('div[aria-label="Chat list"]'), {
    //     childList: true
    // });
}


// document.addEventListener('DOMContentLoaded', begin);


function cheak() {
    if (document.querySelector('#side')) {
        begin();
        console.log('manupulator ready')
    }
    else {
        console.log('waiting for protocols')
        setTimeout(cheak, 2000);
    }
}

setTimeout(cheak, 5000);
console.log('security on');