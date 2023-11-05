
let currentPlayer = "X";

let arr = new Array(9); // Create an array of length 10 (all elements are initially undefined)
arr.fill(0);

function handleClickFunction(ele){
    const id = ele.id * 1;    // convert "id" into number type 

    // Check if the cell is already occupied
    if (arr[id] !== 0) {
        alert("Warning: This cell is already occupied! \n Try Another Cell");
        return; // Exit the function to prevent further actions
    }

    //check Winner
    
    

    // If the cell is not occupied, update the game board
    arr[id] = currentPlayer;
    ele.innerText = currentPlayer;

    checkWinner(currentPlayer);
    
    
    if (currentPlayer === "X") {
        currentPlayer = "O";
    }else{
        currentPlayer = "X";
    }
}

//print element, reset button 
let print = document.getElementById("print");

let button = document.getElementById("reset-button");
button.addEventListener("click",()=>{
    window.location.reload();
})

function checkWinner(currentPlayer){
    
    if(
        (arr[0] === currentPlayer && arr[1] === currentPlayer && arr[2] === currentPlayer) ||
        (arr[3] === currentPlayer && arr[4] === currentPlayer && arr[5] === currentPlayer) ||
        (arr[6] === currentPlayer && arr[7] === currentPlayer && arr[8] === currentPlayer) ||
        (arr[0] === currentPlayer && arr[3] === currentPlayer && arr[6] === currentPlayer) ||
        (arr[1] === currentPlayer && arr[4] === currentPlayer && arr[7] === currentPlayer) ||
        (arr[2] === currentPlayer && arr[5] === currentPlayer && arr[8] === currentPlayer) ||
        (arr[0] === currentPlayer && arr[4] === currentPlayer && arr[8] === currentPlayer) ||
        (arr[2] === currentPlayer && arr[4] === currentPlayer && arr[6] === currentPlayer)
    ){
        alert(`Hurray Player - ${currentPlayer} Won This Time \n Restart again`);
        print.innerText = `Winner: Hurray Player X Won       :)`
        // console.log(currentPlayer, "Won");
        // window.location.reload(); // Reload the window
        return;
        
    }
    let cnt=0;
    for(const a of arr){
        a===0?cnt++:cnt;
    }
    console.log(cnt);
    if(cnt==0){
        alert("Match Draw")
    }
    
}
console.log(arr)