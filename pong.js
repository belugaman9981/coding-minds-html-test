const c = document.getElementById('pong').getContext('2d');
let bx = 200, by = 100, bdx = 3, bdy = 2;
let py = 80, cy = 80;

document.addEventListener('keydown', e => {
    if (e.key == 'w') py -= 10;
    if (e.key == 's') py += 10;
});

function loop() {
    bx += bdx; by += bdy; 
    if (by < 0 || by > 190) bdy = -bdy;
    if (bx < 15 && by > py && by < py + 40) bdx = -bdx;
    if (bx > 385 && by > cy && by < cy + 40) bdx = -bdx;
    if (bx < 0 || bx > 400) { bx = 200; by = 100; }
    cy += by > cy + 20 ? 2 : -2;

    c.fillStyle = 'white'; c.fillRect(0, 0, 400, 200);
    c.fillStyle = 'black';
    c.fillRect(5, py, 10, 40);
    c.fillRect(385, cy, 10, 40);
    c.fillRect(bx, by, 8, 8);
    requestAnimationFrame(loop);
}
loop();
