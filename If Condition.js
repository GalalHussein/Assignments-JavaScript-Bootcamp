// Ass_1:
let num = 109;
if (num < 10) console.log("00" + num);
else if (num > 10 && num < 100) console.log("0" + num);
else if (num >= 100) console.log(num);

// Ass_2:
let num1 = 9, str1 = '9', str2 = '20';
if (num1 == str1)
    console.log("{num1} Is The Same Value As {str}");
if (num1 == str1 && num1 !== str2)
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
if (num1 != str2 && num1 !== str2)
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
if (str1 != str2 && (typeof str1).toString() ===  (typeof str2).toString())
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");

// Ass_3:
let _num1 = 10;
let _num2 = 30;
let _num3 = "30";
if (_num3 > _num1 && typeof _num3 != typeof _num2) {
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number");
     console.log((_num3 == _num2 ? "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number":''))
     console.log((_num3 !== _num1 ? "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}":''));
}

