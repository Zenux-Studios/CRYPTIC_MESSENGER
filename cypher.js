// document.childNodes[1].childNodes[1].













console.log('booted in @cypher');
const script = document.createElement('script');
script.type = 'module';
script.src = chrome.runtime.getURL('content.js');
document.body.appendChild(script);



