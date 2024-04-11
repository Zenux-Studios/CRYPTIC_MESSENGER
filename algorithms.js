// import { encrypt, decrypt } from 'content.js'
function encrypt(text, n = 1) {
    if (!text || n <= 0) return text;
    let arr = text.split("");
    let arr1 = [];
    let arr2 = [];
    for (let i = 0; i < n; i++) {
        arr1 = arr.filter((_, index) => index % 2 === 1);
        arr2 = arr.filter((_, index) => index % 2 === 0);
        arr = arr1.concat(arr2);
    }
    return arr.join("");
}

function decrypt(encryptedText, n = 1) {
    if (!encryptedText || n <= 0) return encryptedText;
    let arr = encryptedText.split("");
    let arr1 = [];
    let arr2 = [];
    let middle = Math.floor(encryptedText.length / 2);
    for (let i = 0; i < n; i++) {
        arr1 = arr.slice(0, middle);
        arr2 = arr.slice(middle);
        arr = [];
        for (let j = 0; j < arr2.length; j++) {
            arr.push(arr2[j]);
            if (arr1[j]) arr.push(arr1[j]);
        }
    }
    return arr.join("");
}

let text = "This Is A test!";
let n = 1;
let encryptedText = encrypt(text, n);
let decryptedText = decrypt(encryptedText, n);
console.log(encryptedText); // "hsi  etTi sats!"
console.log(decryptedText); // "This is a test!"
