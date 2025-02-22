let myform = document.querySelector("form");
let num = document.getElementsByClassName("num")[0];
let txt = document.getElementsByClassName("txt")[0]; 
let sub = document.querySelector("[type='submit']"); 
let op = document.querySelector("[name='container']"); 
let container = document.querySelector(".area"); 


window.onload = _ => {
    num.focus();  
} 

myform.addEventListener("submit", function(e) {
    e.preventDefault();
    let number = parseInt(num.value); let text = txt.value; let option = op.value; 
    console.log (number); 
    console.log (text); 
    console.log (option); 
    let myEle = document.createElement(option);
    myEle.textContent = text; 
    myEle.style.cssText = `
        width: 250px;
        background-color: hsl(202, 100.00%, 90.00%); 
        color: white;
        font-size: 15px;
        text-align: center;
        border: 1px solid rgb(250, 250, 250);
        padding: 10px;
        margin: 10px 0px;
        border-radius: 5px;
        
    `;
    if (number)
    container.appendChild(myEle);
    
    for (let i=0; i < number-1; i++) {
        let clone = myEle.cloneNode(true); 
        container.appendChild(clone);    
        console.log (myEle); 
    }
});