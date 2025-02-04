
let day = "      Sunday";

day = day.trim();
day = day[0].toUpperCase() + day.slice(1);
console.log (day);

switch (day) {
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("%cNo Appointments Available\n", "color: blue");
        break;
    case "Monday":
    case "Thursday":
        console.log("%cFrom 10:00 AM To 5:00 PM\n", "color: green");
        break;
    case "Tuesday":
        console.log("%cFrom 10:00 AM To 6:00 PM\n", "color: green");
        break
    case "Wednesday":
        console.log("%cWednesday\n", "color: green");
        break;
    default: console.log("%cIts Not A Valid Day\n","color: red");
}
