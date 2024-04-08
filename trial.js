function sendMessage(message) {
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if (!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  document.execCommand('forwardDelete', false, null)

  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}



  <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>


messboxes.forEach(box => {
  let mess = box.querySelectorAll('span:not(:empty):not(:has(*))');
  console.log(mess)
})

let clbox = document.querySelector('div[aria-label="Chat list"]')
clbox.addEventListener('onchange',()=>{console.log('scroll recorded')})

document.querySelectorAll("#app")



let x;
let y;
let z;
let k;

messboxes.forEach(box => {
  let mess = box.querySelectorAll('span:not(:empty):not(:has(*))');
  let limess = box.querySelectorAll('span:not(:empty):has(a)');
  if (limess.length === 2) {
    console.log(mess)
    if (mess.length == 5) x=mess
    if (mess.length == 4) y=mess
    if (mess.length == 3) z=mess
    if (mess.length == 2) k=mess
  }  
}
);


mess[0].parentElement.parentElement.parentElement.parentElement.remove();



let arc = document.querySelector('#side').querySelector('button[aria-label="Archived "]').onclick = powersend(decryptionprotocol);



let mainEl = document.querySelector('#main')
mainEl.querySelector('div[tabindex="-1"]').addEventListener('Wheel', ()=>{console.log('scroll recorded')});



style="transform: translateY(0px);"

document.querySelectorAll('div[style="transform: translateY(0px);"]')


// document.dispatchEvent(new Event('change', { bubbles: true }))
// textarea.dispatchEvent(new Event('change', { bubbles: true }))
// textarea.dispatchEvent(new Event('Backspace', { bubbles: true }))
textarea.dispatchEvent(x)

"M5,8 L19,8 L19,16 L12,16 L12,21 L12,16 L5,16 Z"


<div class="_aju5 _aju3" aria-label="Quoted message"><span class="x17y5562 _aju7"></span><div class="_aju8" dir="ltr"><div class="_ajua"><div class="_ahxj xkgnp4b" role=""><span dir="auto" aria-label="" class="_ao3e" style="min-height: 0px;">You</span></div><div class="_ak3v _ak3u" dir="ltr"><span dir="auto" aria-label="" class="quoted-mention _ao3e" style="min-height: 0px;">saerthg
####ICAgIHNhZXJ0aGc</span></div></div></div><div class="_agto _agtm"><div class="_agtn"></div></div></div>