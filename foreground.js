// chrome.storage.sync.get("loaded", function (obj) {
//     console.log("a fost obtinuta valoarea " + obj.loaded);
//     loaded = obj.loaded;
// });

// var loaded = false;
// chrome.storage.local.set({ value: loaded }, function () {
//     console.log("valoarea a fost salvata");
// });
// if (!loaded) {
//     loaded = true;
//     chrome.storage.local.set({ value: loaded }, function () {
//         console.log("valoarea a fost salvata");
//     });
//     var nodes = document.getElementsByClassName("yuRUbf");
//     for (var i = 0; i < nodes.length; i++) {
//         const div = document.createElement("div");
//         elem = `
//     <img id="first" src="https://i.ibb.co/DzrPRY5/shield-transparent.png"></img>
//     <img id="second" src="https://i.ibb.co/M1RQR4s/ok.png"></img>
//     <span> <img src= "https://i.ibb.co/DzrPRY5/shield-transparent.png"</span>
//     <h1>Verified By Shield</h1>
//     `;
//         div.innerHTML = elem;
//         nodes[i].appendChild(div);
//         div.classList.add("shield");
//         nodes[i].classList.add("the_parent");

//         var children = nodes[i].childNodes;
//         for (var j = 0; j < children.length; j++) {
//             children[j].classList.add("the_children");
//         }
//     }
// } else {
//     console.log("pagina a fost deja incarcata");
// }
