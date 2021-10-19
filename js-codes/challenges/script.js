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

//Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
    var userChoice = yourChoice.id;
    var choices = ['rock', 'paper', 'scissors'];
    var botChoice = choices[Math.floor(Math.random() * 3)];
    console.log(userChoice + botChoice);
    results = decideWinner(userChoice, botChoice);
    message = finalMessage(results);
    alert(message['message']);
    rpsFrontEnd(userChoice, botChoice, message);
}

function decideWinner(uc, bc) {
    if (uc === bc)
        return 0.5;
    if (uc === 'rock') {
        if (bc === 'paper')
            return 0;
        if (bc === 'scissors')
            return 1;
    }
    if (uc === 'paper') {
        if (bc === 'rock')
            return 1;
        if (bc === 'scissors')
            return 0;
    }
    if (uc === 'scissors') {
        if (bc === 'paper')
            return 1;
        if (bc === 'rock')
            return 0;
    }
}

function finalMessage(results) {
    if (results === 0)
        return { 'message': "You lost!", 'color': 'red' };
    if (results === 1)
        return { 'message': "You won!", 'color': 'blue' };
    if (results === 0.5)
        return { 'message': "It's a draw!", 'color': 'gold' };
}

function rpsFrontEnd(userChoice, botChoice, message)
{
    var imgDB = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    
    //removing
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var messageDiv = document.createElement('div');
    var botDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imgDB[userChoice] + "' width='auto' height='150' style='box-shadow: 0px 0px 40px 5px rgba(0, 0, 255, 0.75)'>";
    messageDiv.innerHTML = "<h1 style='color: " + message['color'] + "; font-size: 60px; padding: 30px;' width='auto' height='150'>" + message['message'] +"</h1>";
    botDiv.innerHTML = "<img src='" + imgDB[botChoice] + "' width='auto' height='150' style='box-shadow: 0px 0px 40px 5px rgba(255, 0, 0, 0.75)'>";

    rpsDiv = document.getElementById('flex-box-rps-div');
    rpsDiv.appendChild(humanDiv);
    rpsDiv.appendChild(messageDiv);
    rpsDiv.appendChild(botDiv);
}