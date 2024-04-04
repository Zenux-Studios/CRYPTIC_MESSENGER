// chrome.commands.onCommand.addListener(function(command) {});
chrome.commands.onCommand.addListener((command) => {
    console.log(`Command: ${command}`);
  });
  