const board = document.querySelector('#container');

const itemWidth = 100 / 16 + '%'; 

for (let i=1; i<=256; i++) {
    let cell = document.createElement('div');
    cell.setAttribute("style", `width: ${itemWidth}; height: ${itemWidth}; 
        background-color: beige; outline: solid 1px black; box-sizing: border-box;`);
    
    cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'red';
    });    

    board.appendChild(cell);
}
