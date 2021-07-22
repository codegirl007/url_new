let showURL = document.querySelector('#showURL');
let firstSpan = document.querySelector("#first");
let secondSpan = document.querySelector("#second");
let thirdSpan = document.querySelector("#third");
let selects_container = document.querySelector('#selects_container');
let selected;
let select1 = document.createElement('select');
let select2 = document.createElement('select');
let select3 = document.createElement('select');

function handleSelect(select, file, span){
 
    fetch(file)
    .then(response => response.text())
    .then(text => {
        const arr = text.replace('\r', '').split('\n');
        arr.forEach(item => {                
            const option = document.createElement('option');
            option.setAttribute('value', item);
            option.innerText = item;       
            select.appendChild(option);                                   
        });
       
        selects_container.appendChild(select);

        const choose = () => {
                selected = select.options[select.selectedIndex].text;  
                span.innerHTML = selected;
                showURL.href = showURL.innerText;
            }

        window.addEventListener('load', choose);    
        select.addEventListener('change', choose);    
    })
}

handleSelect(select1, 'src/env.txt', firstSpan);
handleSelect(select2, 'src/codebooks.txt', secondSpan);
handleSelect(select3, 'src/systemId.txt', thirdSpan);


