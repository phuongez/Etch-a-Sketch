const gameWindow = document.querySelector('#window');
const board = document.querySelector('#container');

const button = document.createElement('button');
button.textContent = "Set number";
button.setAttribute("style", "background-color: WhiteSmoke; color: black; padding: 10px; width: 100px; border-radius: 10px; border: 0px; margin-top: 100px");

gameWindow.insertBefore(button,board)

button.addEventListener('click', () =>{
    board.replaceChildren();
    let cellNumber = prompt("How many column? (max 100)");
    createBoard(cellNumber);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const itemWidth = 100 / 16 + '%'; 

function createBoard(cellNumber) {
    const itemWidth = 100 / cellNumber + '%';
    for (let i=1; i<= cellNumber*cellNumber; i++) {
        let cell = document.createElement('div');
        cell.setAttribute("style", `width: ${itemWidth}; height: ${itemWidth}; 
            background-color: WhiteSmoke; outline: solid 1px lightgrey; box-sizing: border-box;`);
        
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = getRandomColor();
        });    
    
        board.appendChild(cell);
    }
}

for (let i=1; i<=256; i++) {
    let cell = document.createElement('div');
    cell.setAttribute("style", `width: ${itemWidth}; height: ${itemWidth}; 
        background-color: WhiteSmoke; outline: solid 1px lightgrey; box-sizing: border-box;`);
    cell.dataset.opacityLevel = 0;
    board.appendChild(cell);
    cell.addEventListener('mouseenter', () => {
        // cell.style.backgroundColor = getRandomColor();
        if (cell.dataset.opacityLevel === "0") {
            cell.style.backgroundColor = getRandomColor();
        }
        let opacity = parseFloat(cell.dataset.opacityLevel);
        if (opacity < 1) {
            opacity += 0.2; // Increase opacity by 20% each hover
            cell.dataset.opacityLevel = opacity;
            cell.style.opacity = opacity;
        }
    });    

    
}
