let p1 = document.querySelector('.img1');
let p2 = document.querySelector('.img2');

p1.setAttribute('src', getRandImg());
p2.setAttribute('src', getRandImg());

let title = document.querySelector('.container h1');
checkWin();



function getRandImg() {
    let rand = Math.floor(Math.random() * 6 + 1);

    return './images/dice' + rand.toString() + '.png';
}

function checkWin() {
    let a = p1.getAttribute('src');
    let b = p2.getAttribute('src');

    title.innerHTML = a.slice(a.length - 5)[0] > b.slice(b.length - 5)[0] ? "Player 1 Wins" : "Player 2 Wins";
}