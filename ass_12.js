
function sayHello(name, gender = '') {
    if (gender.toUpperCase() === "MALE") gender = "Mr";
    else if (gender.toUpperCase() === "FEMALE") gender = "Miss";
    else gender = '';
    console.log (`Hello ${gender} ${name}!`);
}

sayHello("John", "MaLe");
sayHello("John", "FeMaLe");
sayHello("John");

function calc (a = undefined, b = undefined, op) {
    if (typeof a === "undefined" || typeof b === "undefined") {
        console.log ("Wrong input !");
        return;
    }
    if (op.trim() == '+') console.log (a + b);
    else if (op.trim() == '-') console.log (a - b);
    else if (op.trim() == '*') console.log (a * b);
}

calc(12, 2, '*  ');
calc(12, 2, ' +  ');
calc(12, 2, ' -  ');
calc( ' -  ');



function calc_age (age) {
    if (age < 10 || age > 100) {
        console.log("%cOut Of Range!", "color: red");
        return;
    }

    console.log (`Your age in monthly ${age * 12}`);
    console.log (`Your age in dayes ${age * 365}`);
    console.log (`Your age in Houres ${age * 365 * 24}`);

}

calc_age(19);


function select (st, en) {
    document.write(`<select>`);
     for (let i = st; i <= en; i++) {
         document.write(`<option value=${i}> ${i} </option>`);
     }
     document.write(`</select>`);
}

select(10, 20);


