

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

counter = friends.length;
let x = 1;
while (index < counter) {
    if (!(typeof friends[index] !== "string" || friends[index].startsWith('A')))
        console.log (x++ + ' => ' , friends[index]);
    index++;
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"