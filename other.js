console.log("@DARKLOD SECURED");

const verdict = async (val) => {
    const state = await chrome.runtime.sendMessage({ propagator: val });
    confirm.log(state);
    return state[val];
};

console.log(verdict("DSEC"), "@DARKLOD SECURED");
