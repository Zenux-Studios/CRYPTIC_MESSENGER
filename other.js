console.log("@DARKLOD SECURED");

const verdiction = async (val) => {
    const state = await chrome.runtime.sendMessage({ propagator: val });
    console.log(state);
    return state[val];
};

console.log(verdiction("DSEC"), "@DARKLOD SECURED");




// if(document.execCommand("selectAll", false, null))
// document.execCommand("insertText", false, "####");
// let box = mainEl.querySelectorAll('div[role="row"]')[messboxes.length];
// boxno = messboxes.length
// mainEl.querySelectorAll('div[role="row"]');



let mainEl = document.querySelector("#main");
let messboxes = mainEl.querySelectorAll('div[role="row"]');

let box = messboxes[messboxes.length-1];

// let mess = box.querySelectorAll("span:not(:empty):not(:has(*))");
let limess = box.querySelectorAll("span:not(:empty):has(a)");


limess[1].childNodes[0].tagName;