// let input = window.prompt('Enter range, Example:5-20').split('-');
// let n1 = parseInt(input[0]), n2 = parseInt(input[1]);
// let ele = document.createElement('p');

// document.body.appendChild(ele);

// while (n1 <= n2) {
//     let cloned = ele.cloneNode(false);
//     cloned.innerHTML = `${n1++}`;
//     ele.before(cloned);
// }

document.body.style.height = "90vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
let pop = document.createElement("div");
pop.style.cssText = `
    width: 300px; height: 100px; background-color: #eee; 
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`;

let close = document.createElement("button");
close.innerHTML = "x";
close.style.cssText = `
    background-color: red;   
    outline: none;
    border: none;
    color: white; 
    font-family: arial;
    top: -4px; 
    padding: 2px 6px;
    right: -4px;
    border-radius: 50%;
    position: absolute; 
`;

close.addEventListener('click', ()=>{
    pop.style.display = 'none';
}
);

let text = document.createTextNode("Hello world!"); 

pop.appendChild(close);
pop.appendChild(text);
// document.body.appendChild(pop);
setTimeout(   ()=>{
        document.body.appendChild(pop);
    }
,5000);
