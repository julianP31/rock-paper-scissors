let playerSelection =""
let computerSelection = computerPlay()
let playerScore=0
let computerScore=0

// la computadora elige su resultado dependiendo de el numero generado aleatoriamente
function computerPlay() {
    if (Math.random() <=0.33){
        return "rock"
    }else if (Math.random() <=0.66) {
        return "paper"
    }else {
        return "scissors"
    }
}
function playARound(playerSelection, computerSelection) {
    // se pregunta al jugador cual va a ser su eleccion y se define la eleccion de la computadora
    // con la funcion de arriba
    playerSelection = prompt("what do you choose? rock paper or scissors").toLowerCase()
    computerSelection = computerPlay()
    
    // una vez definidas ambas variables se retorna el resultado dependiendo de las elecciones
    if (computerSelection==="rock" && playerSelection==="scissors"){
        (++computerScore)
        return(`You Lose! ${computerSelection} beats ${playerSelection}` )
    }else if (computerSelection==="paper" && playerSelection==="rock"){
        (++computerScore)
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else if (computerSelection==="scissors" && playerSelection==="paper"){
        (++computerScore)
        return (`You Lose! ${computerSelection} beats ${playerSelection}`)
    }else if (playerSelection==="rock" && computerSelection==="scissors"){
        (++playerScore)
        return (`You WIN! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection==="scissors" && computerSelection==="paper"){
        (++playerScore)
        return (`You WIN! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection==="paper" && computerSelection==="rock"){
        (++playerScore)
        return (`You WIN! ${playerSelection} beats ${computerSelection}`)
    }else if (playerSelection==="paper" && computerSelection==="paper"){
        return (`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    }else if (playerSelection==="rock" && computerSelection==="rock"){
        return (`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    }else if (playerSelection==="scissors" && computerSelection==="scissors"){
        return (`It's a tie: ${playerSelection} and ${computerSelection} are equal`)
    }else {
        // en caso de que el usuario no introduzca alguno de los valores dados se volvera a preguntar
        alert("you must choose rock paper or scissors")
        return playARound(playerSelection, computerSelection)
    }
}

function game() {
    let cantidadDeRondas=5
    for (let i = 0; i < cantidadDeRondas ; i++) {
        console.log(playARound(playerSelection, computerSelection))

    }
    gameWinner (playerScore,computerScore)
}
function gameWinner (playerScore,computerScore) {
    if (playerScore > computerScore) {
        console.log("you have won!! CONGRATULATIONS :D")
    }else if (playerScore < computerScore){
        console.log("you've lost :( better luck next time ")
    }else {
        console.log("it's a draw play again to find a winner")
    }
}



// (++playerScore)