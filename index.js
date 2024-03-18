'use strict' 
const boxes = document.getElementsByTagName("td")
const restartBtn = document.querySelector("#restart-btn")

let activePlayer = "X"
let move = 0
 const winningPosition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5 ,8],
    [0, 4, 8],
    [2, 4, 6],
 ]

 for (let i = 0; i < boxes.length; i++) {
   boxes[i].addEventListener('click',  () => {
      if(boxes[i].textContent) return
      move++
      boxes[i].textContent = activePlayer
      winnerPlayer() 
      activePlayer = activePlayer === "X" ? "O" : "X"
      
   })}


 const winnerPlayer = () =>  {
   if (move === boxes.length) {
      console.log("Draw") 
   }
    for (let i = 0; i < winningPosition.length; i++) {
       if (
          boxes[winningPosition[i][0]].textContent === activePlayer &&
          boxes[winningPosition[i][1]].textContent === activePlayer &&
          boxes[winningPosition[i][2]] .textContent === activePlayer
          ) {
             console.log("winner is " + activePlayer )
          } } 
 }

 restartBtn.addEventListener("click", ()=> {
   for (let i = 0; i < boxes.length; i++) 
      boxes[i].textContent = null
   activePlayer = "X"
 })

