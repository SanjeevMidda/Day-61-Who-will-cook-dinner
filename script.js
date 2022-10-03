let result = document.querySelector('.result');

document.querySelector('h3').addEventListener('click', person);

let names = ["Mugu", "Gugu", "Chinshi"];

function person(){
    let outcome = document.querySelector('.result');

    let random = Math.floor(Math.random()*names.length);

    let person = names[random];
    console.log(person);

    document.querySelector('.result').innerHTML = person;
}