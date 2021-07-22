let submit = document.querySelector('#submit');
let showURL = document.querySelector('#showURL');
let firstSpan = document.querySelector("#first");
let secondSpan = document.querySelector("#second");
let thirdSpan = document.querySelector("#third");

//first select
let select1 = document.createElement('select');
selects_container.appendChild(select1);

fetch('src/env.txt')
.then(response => response.text())
.then(text => {
    const arr = text.replace('\r', '').split('\n');
    arr.forEach(item => {                
        const option = document.createElement('option');
        option.setAttribute('value', item);
        option.innerText = item;       
        select1.appendChild(option);                                   
    });

    let selected = select1.options[select1.selectedIndex].text; 
    firstSpan.innerHTML = selected;
       const choose = () => {
        firstSpan.innerHTML = '';
            selected = select1.options[select1.selectedIndex].text;  
            firstSpan.innerHTML = selected;
        }
    select1.addEventListener('change', choose)    
})

//second select

let select2 = document.createElement('select');
selects_container.appendChild(select2);

fetch('src/codebooks.txt')
.then(response => response.text())
.then(text => {
    const arr = text.replace('\r', '').split('\n');
    arr.forEach(item => {                
        const option = document.createElement('option');
        option.setAttribute('value', item);
        option.innerText = item;       
        select2.appendChild(option);                                   
    });

    let selected = select2.options[select2.selectedIndex].text; 
    secondSpan.innerHTML = selected;
       const choose = () => {
        secondSpan.innerHTML = '';
            selected = select2.options[select2.selectedIndex].text;  
            secondSpan.innerHTML = selected;
        }
    select2.addEventListener('change', choose)    
})

//third select

let select3 = document.createElement('select');
selects_container.appendChild(select3);


fetch('src/systemId.txt')
.then(response => response.text())
.then(text => {
    const arr = text.replace('\r', '').split('\n');
    arr.forEach(item => {                
        const option = document.createElement('option');
        option.setAttribute('value', item);
        option.innerText = item;       
        select3.appendChild(option);                                   
    });

    let selected = select3.options[select3.selectedIndex].text; 
    thirdSpan.innerHTML = selected;
       const choose = () => {
        firstSpan.innerHTML = '';
            selected = select3.options[select3.selectedIndex].text;  
            thirdSpan.innerHTML = selected;
        }
    select3.addEventListener('change', choose)    
})



