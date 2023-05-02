let btnRandom = document.querySelector('button');
let result = document.querySelector('h1');


let users = ['nah bro', 'no way fr', 'i mean yes','hell to the no','nope', 'balls','bro no way you ask that','ok','cringe', 'nah thats lame','No bitches?','Of course','HELL YES','I guess we never know','Maybe', 'yes', 'Its the same chance of you getting some bitches (0)', 'fuck no']

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;

    return result;
}

btnRandom.addEventListener('click', () => {
    let index = getRandomNumber(0, users.length-1);
    result.innerText = users[index];
});