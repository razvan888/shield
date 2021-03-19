console.log('it worked')

chrome.storage.local.get('enabled', data => {
    if (data.enabled) {
        console.log('extensia e activata')

        function injectie(status_image){
            const div = document.createElement("div");
            div.innerHTML = `
            ${status_image}
            <img  id="logo" src="https://i.ibb.co/DzrPRY5/shield-transparent.png"></img> 
        
            <span id="logo_hover"> <img src= "https://i.ibb.co/DzrPRY5/shield-transparent.png"> <h1>Verified By Shield</h1></img>
            </span>
        
            <span id="status_ok_hover"> <img src= "https://i.ibb.co/YQGBXRW/level3.png"> <h1> The news you are trying to reach comes from a reliable source </h1></img>
            </span>
        
            <span id="status_nok_hover"> <img src= "https://i.imgur.com/O4zRVXB.png>"> <h1> The news you are trying to reach does not seem to be trustworthy, be careful </h1></img>
            </span>

            <span id="status_medium_hover"> <img src= "https://i.ibb.co/zHqStsV/level2.png>"> <h1> The news you are trying to reach comes from a somehow trusted entity </h1></img>
            </span>
            `;
            nodes[i].appendChild(div);
            div.classList.add("shield");
            nodes[i].classList.add("the_parent");
        
            children = nodes[i].childNodes;
            for (var j = 0; j < children.length; j++) {
                    children[j].classList.add("the_children");
                }
        }
        
        var bune=['samsung.com','wikipedia.org','dw.com','orange.ro','vodafone.ro'];
        var proaste=['hotnews.ro','digiromania.ro'];
    
        var nodes = document.getElementsByClassName("yuRUbf");
        for (var i = 0; i < nodes.length; i++) {
            
            var children = nodes[i].childNodes;
            var link= children[0].href;
            console.log(link);
            var bun = false;
            var exista=false;
                for (var k=0; k<bune.length; k++){
                    if (link.includes(bune[k])){
                        bun=true;
                        exista=true;
                        break;
                    }
                } 
                for (var x=0; x<proaste.length; x++){
                    if(link.includes(proaste[x])){
                        bun=false;
                        exista=true;
                        break;
                    }
                }   
    
            if(!exista){
                console.log('nu se afla in nicio categorie');
                injectie('<img id="status_medium" src="https://i.ibb.co/zHqStsV/level2.png"></img>'); //poza 2
            } else if (bun){
                console.log('e bun');
                injectie('<img id="status_ok" src="https://i.ibb.co/YQGBXRW/level3.png"></img>'); // poza 3
            } else if (!bun){
                console.log('nu e bun');
                injectie('<img id="status_nok" src="https://i.imgur.com/O4zRVXB.png>"</img>'); //poza 0
            } 
        }
    } else {
        console.log('extensia e dezactivata')
    }
});






