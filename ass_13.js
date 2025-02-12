function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
        let A = zName.split(' ');
        console.log ("Hello", A[0], A[1][0].toUpperCase(), '.');
    }
    function ageWithMessage(zAge) {
        console.log (`Your Age Is ${zAge}`);

    }
    function countryTwoLetters(zCountry) {
        console.log("You Live In", zCountry[0].toUpperCase() + zCountry[1].toUpperCase());

    }
    function fullDetails() {
        namePattern(zName);
        ageWithMessage (zAge);
        countryTwoLetters(zCountry);
    }
    return fullDetails();
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

let itsMe = _ =>  `Iam A Normal Function`;

console.log(itsMe()); // Iam A Normal Function


let urlCreate = (protocol, web, tld) => {
    return `${protocol}://www.${web}.${tld}`;
}

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org



function specialMix(...arr) {
    let sum = 0;
    for (let i = 0; i<arr.length; i++) {
        arr[i] = "0" + arr[i];
        sum +=  parseInt(arr[i]);
         // console.log(arr[i]);
    }
    if (sum === 0) sum = `All Is Strings`;
    console.log (sum);

}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings




