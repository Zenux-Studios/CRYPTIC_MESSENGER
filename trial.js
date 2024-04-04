
let mes = document.getElementsByClassName("_3Uu1_")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild
console.log(mes.textContent)


function sendMessage(message) {
  const mainEl = document.querySelector('#main')
  const textareaEl = mainEl.querySelector('div[contenteditable="true"]')

  if (!textareaEl) {
    throw new Error('There is no opened conversation')
  }

  textareaEl.focus()
  document.execCommand('insertText', false, message)
  textareaEl.dispatchEvent(new Event('change', { bubbles: true }))

  setTimeout(() => {
    (mainEl.querySelector('[data-testid="send"]') || mainEl.querySelector('[data-icon="send"]')).click()
  }, 100)
}



  <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>



side

onchange

listitem

let convertab = document.querySelector('#side').querySelectorAll('div[role="listitem"]')

messboxes.forEach(box => {
  let mess = box.querySelectorAll('span:not(:empty):not(:has(*))');
  console.log(mess)
})

let clbox = document.querySelector('div[aria-label="Chat list"]')
clbox.addEventListener('onchange',()=>{console.log('scroll recorded')})

document.querySelectorAll("#app")
