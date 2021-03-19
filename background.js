// "*://*/*";

// chrome.tabs.onActivated.addListener((tab) => {
//     chrome.tabs.get(tab.tabId, (current_tab_info) => {
//         if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
//             chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
//             chrome.tabs.executeScript(
//                 null,
//                 {
//                     file: "./script.js",
//                 },
//                 () => console.log("i injected")
//             );
//         }
//     });
// });

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//     // if (
//     //     /^https:\/\/www\.google/.test(tabId) &&
//     //     changeInfo.status == "complete"
//     // ) {
//     if (changeInfo.status == "complete") {
//         chrome.tabs.insertCSS(null, { file: "./mystyles.css" });
//         chrome.tabs.executeScript(
//             null,
//             {
//                 file: "./script.js",
//             },
//             () => console.log("i injected")
//         );
//     }
// });

// chrome.storage.onChanged.addListener(function (changes, namespace) {
//     for (var key in changes) {
//         var storageChange = changes[key];
//         console.log(
//             'Storage key "%s" in namespace "%s" changed. ' +
//                 'Old value was "%s", new value is "%s".',
//             key,
//             namespace,
//             storageChange.oldValue,
//             storageChange.newValue
//         );
//     }
// });
