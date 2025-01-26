// Ass_1 :
document.write("<h2> Elzero </h2>");
document.querySelector("h2").style.color = "blue";
document.querySelector("h2").style.fontSize = "60px";
document.querySelector("h2").style.textAlign = "center";
document.querySelector("h2").style.fontFamily = "Arial";

// ass_2 :
console.log("%cElzero %cweb %cschool",
             "color: red",
             "color: green",
             "background: blue");

// ass_3 :
console.group("Group1");
 console.log("Message one");
 console.log("Message two");
   console.group("child Group");
    console.log("Message one");
    console.log("Message two");
    console.groupEnd();
    console.groupEnd();
console.group("Group 2");
   console.log("Message only");
   console.groupEnd();

// ass_4 :
console.table(["Elzero", "Ahmed", "Sameh", 'Aly']);


// ass_5 :
 // make a comment with two-way
// console.log("Iam In Console");
// document.write("Iam In Page");
/* console.log("Iam In Console");
 document.write("Iam In Page"); */
