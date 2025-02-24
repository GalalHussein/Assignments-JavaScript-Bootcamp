let add = document.querySelector(".classes-to-add"); 
let remove = document.querySelector(".classes-to-remove");  
let ele = document.querySelector(".classes-list");  

add.addEventListener("blur", function(e) {
   e.preventDefault();
   ele.classList.add(add.value); 
   abd(ele, add.value, "add");
});

remove.addEventListener("blur", function(e){
   e.preventDefault();
   ele.classList.remove(remove.value);
   abd(ele, add.value, "");
}); 


function abd (elem, value, op) {
   let classes = elem.classList;  
   if (op === "add") { 
      for (let i = 0; i < classes.length; i++)  {
         if (classes[i] === value) {
             let ch = document.createElement('div');
             ch.textContent = value;
             ch.style.cssText = `
             background-color: orange; width: 100px; margin: 10px; padding: 10px;
             float: left; border-radius: 4px;  
             `;
             ch.classList.add(value);
             ele.appendChild(ch);    
               
         }     
   } 
}  
else {
   for (let i = 0; i < classes.length; i++)  {
      if (classes[i] === value) {
         ele.removeChild();     
      }     
} 
}
}
