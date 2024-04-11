const dsec = ["DSEC", "SPENC", "DEC"];
const set = async () => {
    chrome.storage.local.get("set", (res) => {
        if (res.set) return;
        else
            dsec.forEach((ele) => {
                chrome.storage.local.set({ [ele]: false });
            });
    });

    console.log("byfrost set");
};

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.propagator) {
        console.log(message.propagator);
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
