function ConvertHumanIntoDogYears(years){
    let dogYears = years * 7
    return dogYears
}

let years = parseInt(prompt("Enter the human years"));
let result = ConvertHumanIntoDogYears(years);
alert(result)
