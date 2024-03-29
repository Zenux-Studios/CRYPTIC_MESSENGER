
let mes = document.getElementsByClassName("_3Uu1_")[0].firstElementChild.firstElementChild.firstElementChild.firstElementChild
console.log(mes.textContent)





// Find the text input field using its attributes or unique identifiers
const inputField = document.querySelector('[role="textbox"]');

// Check if the input field was found
if (inputField) {
  // Focus on the input field
  inputField.focus();

  // Programmatically set the value of the input field
  inputField.value = "Text entered programmatically";

  // Dispatch an "input" event to trigger any associated listeners
  inputField.dispatchEvent(new Event('input', { bubbles: true }));
} else {
  console.error("Text input field not found.");
}





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

document.querySelectorAll('._ak1t._ak1u');
Voice message

aria - label="Send" data - testid="send" data - icon="send"

aria - label="Voice message" data - testid="send" data - icon="ppt"

a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(a.length)

let sndiv=(mainEl.querySelector('[aria-label="Send"]')||mainEl.querySelector('[aria-label="Voice message"]')).parentElement



let button = document.createElement('button');
button.className = 'xfect85 x100vrsf x1vqgdyp x78zum5 xl56j7k x6s0dn4';
button.setAttribute('aria-label', 'Voice message');
button.setAttribute('data-tab', '11');
button.innerHTML = '<span data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg></span>';
sndiv.appendChild(button);

button.innerHTML = '<span data-icon="ptt" class=""><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg></span>';


sndiv.createElement('button')


  < button class="xfect85 x100vrsf x1vqgdyp x78zum5 xl56j7k x6s0dn4" aria - label="Voice message" data - tab="11" >
    <span data-icon="ptt" class="">
      <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24">
      <title>ptt</title>
      <path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z">
      </path>
    </svg>
    </span>
        </button >



<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" class="" version="1.1" x="0px" y="0px" enable-background="new 0 0 24 24"><title>send</title><path fill="currentColor" d="M1.101,21.757L23.8,12.028L1.101,2.3l0.011,7.912l13.623,1.816L1.112,13.845 L1.101,21.757z"></path></svg>



https://www.svgrepo.com/show/527599/archive-up-minimlistic.svg