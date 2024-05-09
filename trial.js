let mainEl = document.querySelector("#main");
const decryptionprotocol = async () => {
    let messboxes = mainEl.querySelectorAll('div[role="row"]');

    messboxes.forEach((box) => {
        let mess = box.querySelectorAll("span:not(:empty):not(:has(*))");
        console.log(mess)
    });
};
