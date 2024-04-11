const tobi = (n, l) => {
    // n = n.charCodeAt(0)
    let bin = "";
    while (n > 0) {
        bin = Math.floor(n % 2) + bin;
        n = Math.floor(n / 2);
    }
    for (let i = bin.length; i < l; i++) bin = "0" + bin;
    return bin;
};

const frobi = (bin) => {
    let n = 0;
    let len = bin.length;
    for (let i = len - 1; i >= 0; i--)
        n += bin.charAt(len - 1 - i) * Math.pow(2, i);
    return n;
};

const cypher = () => {
    let base = "";
    for (let i = 65; i <= 90; i++) base += String.fromCharCode(i);
    for (let i = 97; i <= 122; i++) base += String.fromCharCode(i);
    for (let i = 48; i <= 57; i++) base += String.fromCharCode(i);
    base += "+";
    base += "/";
    return base;
};

const encrypt = (str) => {
    let raw = "";
    let res = "";
    let code = cypher();

    // str.forEach((i) => {
    for (let i = 0; i < str.length; i++) raw += tobi(str.charCodeAt(i), 8);
    let len = raw.length;
    while (len % 6) {
        raw += "0";
        len++;
    }
    for (let i = 0; i < len; i += 6)
        res += code.charAt(frobi(raw.slice(i, i + 6)));
    return res;
};

const decrypt = (str) => {
    let raw = "";
    let res = "";
    let code = cypher();
    str = str.split("");
    str.forEach((i) => {
        raw += tobi(code.indexOf(i), 6);
    });
    let len = Math.floor(raw.length / 8) * 8;
    raw = raw.slice(0, len);
    for (let i = 0; i < len; i += 8)
        res += String.fromCharCode(frobi(raw.slice(i, i + 8)));
    return res;
};

const verdict = async (val) => {
    const state = await chrome.runtime.sendMessage({ propagator: val });
    return state[val];
};

console.log("cypher loaded");
const begin = async () => {
    const powersend = (func, link = false) => {
        let mainEl = document.querySelector("#main");
        let sndiv = mainEl.querySelector('[aria-label="Send"]');
        let textarea = mainEl.querySelector('div[contenteditable="true"]');
        let inp = textarea.textContent.trim();
        let mess;
        if (inp) {
            if (inp.startsWith("@@")) {
                inp = inp.slice(2);
                link = true;
            }
            let tab = document.querySelectorAll(
                'div[style="transform: translateY(0px);"]'
            );
            if (tab.length > 0) {
                if (tab.length === 1 && tab[0].innerHTML === null)
                    tab = tab[0].parentElement.remove;
                if (
                    tab[tab.length - 1].querySelector(
                        'div[aria-label="Quoted message"]'
                    ) === null
                )
                    link = true;
            }

            mess = encrypt(inp);

            if (link) mess += "@@AA";

            textarea.focus();
            document.execCommand("selectAll", false, null);
            document.execCommand("insertText", false, "####");
            document.execCommand("selectAll", false, null);
            document.execCommand("insertText", false, mess);
            // textareaEl.dispatchEvent(new Event('change', { bubbles: true }))
            setTimeout(() => {
                sndiv.click();
            }, 200);
            setTimeout(func, 500);
        }
    };

    const manipulate = async () => {
        let boxno = 0;
        const predecrypt = (x) => {
            if (x.startsWith("####")) {
                if (x.endsWith("@@AA")) {
                    x = decrypt(x.slice(4, -4));
                    return `<a dir="auto" href="${x}" title="${x}" target="_blank">${x}</a>`;
                }

                return decrypt(x.slice(4));
            }
            return x;
        };
        let mainEl = document.querySelector("#main");
        const decryptionprotocol = async () => {
            const dlsc = await verdict("DSEC");
            const deco = await verdict("DEC");

            const decryption = (x) => {
                x.innerHTML = predecrypt(x.textContent);
            };
            if (deco) {
                let messboxes = mainEl.querySelectorAll('div[role="row"]');
                boxno = messboxes.length;

                messboxes.forEach((box) => {
                    let mess = box.querySelectorAll(
                        "span:not(:empty):not(:has(*))"
                    );
                    let limess = box.querySelectorAll(
                        "span:not(:empty):has(a)"
                    );
                    if (mess.length == 3) {
                        decryption(mess[0]);
                    }
                    if (mess.length == 5) {
                        decryption(mess[1]);
                        decryption(mess[2]);
                    }
                    if (limess.length === 2 && dlsc) {
                        limess[1].firstElementChild.textContent =
                            "@DARKLORD SECURED";
                        if (mess.length > 2) {
                            mess[0].parentElement.parentElement.parentElement.parentElement.remove();
                        }
                    }
                });
            }
        };
        const sendbutt = () => {
            let sndiv = (
                mainEl.querySelector('[aria-label="Send"]') ||
                mainEl.querySelector('[aria-label="Voice message"]')
            ).parentElement;
            let parent = sndiv.parentElement;
            let ndiv = document.createElement("div");
            parent.appendChild(ndiv);
            ndiv.className = sndiv.className;
            ndiv.innerHTML = sndiv.innerHTML;
            ndiv.firstElementChild.setAttribute("aria-label", "powersend");
            ndiv.firstElementChild.setAttribute("id", "powersend");
            ndiv.firstElementChild.onclick = () => {
                powersend(decryptionprotocol);
            };
            ndiv.firstElementChild.firstElementChild.firstElementChild.innerHTML = `<title>powersend</title>
        <path fill="currentColor" d="
        M 12 1 C 7.5293 1 3.5 2.3438 3 4 L 3 13 C 3.5 15.041 6 23 12.5 23.5 C 19 23 22 15 22 12 L 22 4 C 22 2 17.4707 1 12 1 Z M 12.5 2 C 17.75 2 20.5
         3.4863 20.5 4 L 20.5 12.5 C 20.5 14.5684 18.334 20.2617 13.5 22.1484 L 13 19 L 12 19 L 11.5 22.1484 C 6.666 20.2617 4.5 14.5684 4.5 12.5 L 
         4.5 4 C 4.5 3.4863 7.25 2 12.5 2 Z M 8.5 5.5 C 7.502 5.5 6.4277 5.9395 5.5 7.5 C 6.4766 6.8203 7.3066 6.5 8 6.5 C 9.3438 6.5 10.0137 8.0742 
         10.2188 8.2813 C 10.5117 8.5742 10.9863 8.5742 11.2813 8.2813 C 11.5742 7.9883 11.5742 7.5137 11.2813 7.2188 C 11.0977 7.0371 10.2188 5.5 8.5 
         5.5 Z M 16.5 5.5 C 14.7813 5.5 13.9023 7.0371 13.7188 7.2188 C 13.4258 7.5137 13.4258 7.9883 13.7188 8.2813 C 14.0137 8.5742 14.4883 8.5742 
         14.7813 8.2813 C 14.9863 8.0742 15.6563 6.5 17 6.5 C 17.6934 6.5 18.5234 6.8203 19.5 7.5 C 18.5723 5.9395 17.498 5.5 16.5 5.5 Z M 8 8.5 C 
         7.1797 8.5 6.459 8.7969 6 9.25 C 6.459 9.7031 7.1797 10 8 10 C 8.8203 10 9.541 9.7031 10 9.25 C 9.541 8.7969 8.8203 8.5 8 8.5 Z M 17 8.5 C 
         16.1797 8.5 15.459 8.7969 15 9.25 C 15.459 9.7031 16.1797 10 17 10 C 17.8203 10 18.541 9.7031 19 9.25 C 18.541 8.7969 17.8203 8.5 17 8.5 Z M 
         5.5 13 L 8 17 L 11.5 17 L 12.5 16 L 13.5 17 L 17 17 L 19.5 13 L 16.5 15.5 L 14.5 15.5 L 13 14 L 12 14 L 10.5 15.5 L 8.5 15.5 Z">
         </path>`;
        };

        decryptionprotocol();
        if (mainEl.querySelector("#powersend") === null) sendbutt();
        mainEl
            .querySelector('div[tabindex="-1"]')
            .addEventListener("wheel", (eve) => {
                if (eve.deltaY < 0)
                    if (
                        boxno !==
                        mainEl.querySelectorAll('div[role="row"]').length
                    ) {
                        decryptionprotocol();
                    }
            });

        let textarea = mainEl.querySelector('div[contenteditable="true"]');

        textarea.addEventListener("keydown", (event) => {
            if (event.ctrlKey && event.key === " ") {
                event.preventDefault();
                powersend(decryptionprotocol);
            }
            if (event.shiftKey && event.key === " ") {
                event.preventDefault();
                powersend(decryptionprotocol, true);
            }
        });
    };

    const setup = () => {
        console.log("setingup");
        let convertab = document
            .querySelector("#side")
            .querySelectorAll('div[role="listitem"]');
        convertab.forEach((conv) => {
            conv.addEventListener("click", manipulate);
        });
    };
    setup();
    chrome.runtime.onMessage.addListener(
        async (request, sender, sendResponse) => {
            if (request.propagator === "MANP") {
                manipulate();
            }
            return true;
        }
    );
};

const cheak = () => {
    if (document.querySelector("#side")) {
        begin();
        console.log("manupulator ready");
    } else {
        console.log("waiting for protocols");
        setTimeout(cheak, 2000);
    }
};

setTimeout(cheak, 5000);
console.log("security on");
