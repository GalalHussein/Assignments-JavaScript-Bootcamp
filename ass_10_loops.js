

let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i<= end; i+= start) {
    if (i !== exclude) console.log(i);
}

    let str = 10;
    let en = 0;
    let stop = 3;

    for (let i = str; i>= stop; i--) {
        if (i < 10)
            console.log(String(i).padStart(2, '0'));
    }



let st = 1;
let ed = 6;
let breaker = 2;

for (let i = st; i <= ed; i++) {
    console.log (i);
    console.log('-- '+ breaker);
    console.log('-- '+(ed - breaker));
}


let index = 10;
let jump = 2;

for (;;) {
    console.log (index);
    index -= jump;
    if (index < jump * jump) break;
}



let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = 1;

for (let i = 0; i < friends.length; i++) {
    if (friends[i].startsWith(letter.toUpperCase())) continue;
    console.log(counter++ + ' =>', friends[i]);
}

let srt = 0;
let swappedName = "elZerO";
let newstr = "";

for (let i = srt; i < swappedName.length; i++) {
    if (swappedName[i] === swappedName[i].toUpperCase()) {
        newstr += swappedName[i].toLowerCase();
    } else {
        newstr += swappedName[i].toUpperCase();
    }
}

console.log(newstr);


