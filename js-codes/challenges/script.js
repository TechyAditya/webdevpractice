//Challenge 1: Your Age in Days

function delAge() {
    document.getElementById('ageInDays').remove();
}

function ageInDays() {
    var birthYear = prompt("Birth Year");
    var birthMonth = prompt("Birth Month");
    var birthDay = prompt("Birth Date");

    let totalDays = 0;
    const birthDate = new Date(birthYear, birthMonth, birthDay);
    const curDate = new Date();
    if (birthDate.getDate() < curDate.getDate()) {
        totalDays = 30 + birthDate.getDate() - curDate.getDate(); //Just approximate values
    }
    else {
        totalDays = birthDate.getDate() - curDate.getDate();
    }
    let totalYears = curDate.getFullYear() - birthDate.getFullYear();
    let totalMonths = 0;
    if (birthDate.getMonth() < curDate.getMonth()) {
        totalMonths = curDate.getMonth() - birthDate.getMonth();
    }
    else {
        totalMonths = 12 + curDate.getMonth() - birthDate.getMonth();
        totalYears -= 1;
    }
    totalDays += (totalYears * 365) + (totalMonths * 30) + totalDays;

    console.log(totalYears);
    console.log(totalMonths);
    console.log(totalDays);
    /*
    1. create element
    2. generate text using text node
    3. set current id attribute same as ageInDays function
    4. append generated text to h1 child
    5. append h1 child to the box by retrieving element using id method
    */
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + totalDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

//Challenge 2: Cheems generator

let request = new XMLHttpRequest();
request.open('GET', 'cheems.json')
request.responseType = 'json';
request.send();
var obj;
request.onload = function () {
    obj = request.response;
}


function generateCheems() {
    var cheemNo = Math.floor(Math.random() * obj.length);
    var image = document.createElement('img');
    var div = document.getElementById('cheems-box-gen');
    image.src = obj[cheemNo];
    div.appendChild(image);
}