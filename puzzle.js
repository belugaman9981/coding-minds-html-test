const c = document.getElementById('puzzle').getContext('2d');
const size = 3;
let tiles = [1,2,3,4,5,6,7,8,0]; 

function shuffle() {
    for (let i = 0; i < 100; i++) {
        let z = tiles.indexOf(0);
        let m = [z-1, z+1, z-3, z+3].filter(n => n >= 0 && n < 9 && Math.abs((z%3)-(n%3)) + Math.abs(Math.floor(z/3)-Math.floor(n/3)) == 1);
        let s = m[Math.floor(Math.random()*m.length)];
        [tiles[z], tiles[s]] = [tiles[s], tiles[z]];
    }
}
shuffle();

document.getElementById('puzzle').addEventListener('click', e => {
    let rect = e.target.getBoundingClientRect();
    let x = Math.floor((e.clientX - rect.left) / 100);
    let y = Math.floor((e.clientY - rect.top) / 100);
    let i = y * 3 + x;
    let z = tiles.indexOf(0);
    if (Math.abs((i%3)-(z%3)) + Math.abs(Math.floor(i/3)-Math.floor(z/3)) == 1) {
        [tiles[i], tiles[z]] = [tiles[z], tiles[i]];
    }
    draw();
});

function draw() {
    c.fillStyle = 'white'; c.fillRect(0, 0, 300, 300);
    c.fillStyle = 'black'; c.font = '40px sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    for (let i = 0; i < 9; i++) {
        let x = (i % 3) * 100, y = Math.floor(i / 3) * 100;
        c.strokeRect(x, y, 100, 100);
        if (tiles[i]) c.fillText(tiles[i], x + 50, y + 55);
    }
}
draw();
