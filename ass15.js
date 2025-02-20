// let elem = document.getElementById("elzero");
// console.log(elem); 
// elem = document.getElementsByClassName("element");
// console.log(elem); 
// elem = document.getElementsByTagName("div"); 
// console.log(elem); 
// elem = document.getElementsByTagNameNS("div")[0]; 
// console.log(elem); 
// elem.document.querySelector("div"); 
// console.log(elem); 
// elem.document.querySelector("#elzero");
// console.log(elem);  

// let ele = document.getElementsByTagName ("img"); 
// console.log (ele); 

// for (let i = 0; i < ele.length; i++) {
//     ele[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     ele[i].alt = "Elzero Logo";
// }

let ele = document.getElementById("punds");
let res = document.getElementsByClassName("result")[0]; 
ele.oninput = (ev) => {
    console.log(ele.value); 
    res.textContent = `${(ele.value * 15.6).toFixed(2)}` 
    console.log (res);
}

// let x = document.getElementsByClassName("one")[0];
// let y = document.getElementsByClassName("two")[0];
// console.log(x);
// console.log(y);

// let temp = x.textContent; 
// x.textContent = y.textContent;
// y.textContent = temp; 

// temp = x.title;
// x.title = y.title;
// y.title = temp;

// let im = document.getElementsByTagName("img");

// for (let i = 0; i < im.length; i++) {
//     if (im[i].hasAttribute("alt"))
//       im[i].alt = "Old"; 
//     else im[i].setAttribute("alt", "Elzero"); 
// } 

let numberInput = document.querySelector("[type='number']");
let textInput = document.querySelector("[type='text']");
let select = document.querySelector("select"); 
let createBtn = document.querySelector("[value='Create']"); 
let resultBox = document.querySelector(".results"); 

createBtn.onclick = (event) => {
    event.preventDefault();
    resultBox.innerHTML = "";
    
    for (let i = 0; i < numberInput.value; i++) { 
        let element = document.createElement(select.value.toLowerCase()); 
        element.setAttribute("title", "Element"); 
        element.setAttribute("id", `ID-${i+1}`); 
        element.appendChild(document.createTextNode(textInput.value)); 
        resultBox.appendChild(element);  
    }
};
 