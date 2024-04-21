console.log("booted in @cypher");

const spam = async () => {
    let mainEl = document.querySelector("#main");
    let sndiv = mainEl.querySelector('[aria-label="Send"]');
    if (!sndiv) return;
    let num = window.prompt("Enter number of messages to send");
    num = parseInt(num);
    if (isNaN(num)) return;
    for (let i = 0; i < num; i++) {
        sndiv.click();
    }
};

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
    if (request.propagator === "SPAM") {
        spam();
    }
    return true;
});
