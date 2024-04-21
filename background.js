const placeHolderfalse = ["DSEC", "SPENC"];
const placeHoldetrue = ["DEC"];
const set = async () => {
    chrome.storage.local.get("set", (res) => {
        if (res.set) return;
        else {
            placeHolderfalse.forEach((ele) => {
                chrome.storage.local.set({ [ele]: false });
            });
            placeHoldetrue.forEach((ele) => {
                chrome.storage.local.set({ [ele]: true });
            });
            chrome.storage.local.set({ set: true });
            console.log("byfrost set");
        }
    });
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message.propagator, "message received");
    if (message.propagator) {
        console.log(chrome.storage.local.get(message.propagator));
        chrome.storage.local.get(message.propagator).then(sendResponse);
        return true;
    }
});

chrome.runtime.onInstalled.addListener(() => {
    set();
    console.log("byfrost installed");
});

// chrome.runtime.onStartup.addListener(() => {
//     set();
//     console.log("byfrost started");
// });
