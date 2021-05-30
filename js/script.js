function playGame(playerInput){
    
    clearMessages();
    
    console.log(playerInput);

    function getMoveName(argMoveId){
    
        if( argMoveId == 1){
            return 'kamień';
        }
        else if( argMoveId == 2){
            return 'papier';
        }
        else if( argMoveId == 3){
            return 'nożyce';
        }
        else{
            printMessage('nieznany ruch');
            return 'nieznany ruch';
        }
    }     
    let randomNumber = Math.floor(Math.random() * 3 + 1);

    let computerMove = getMoveName(randomNumber);
    
    let playerMove = getMoveName(playerInput);
    
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        
        if(argPlayerMove == 'Nieznany ruch'){
            printMessage('Nieznany ruch');
        }
        else if(argComputerMove == argPlayerMove){
            printMessage('Remis');
        }
        else if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Wygrywasz!');
        } 
        else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrywasz!')
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz!')
        }
        else if(argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz!')
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz!')
        }
        else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz!')
        }
    }

    console.log('Wylosowana liczba to: ' + randomNumber);

/*if(randomNumber == 1){
  computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/
    // printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);

    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
    */
    //console.log('Gracz wpisał: ' + playerInput);

    // let playerMove =  getMoveName(playerInput);

    /*
    if(playerInput == '1'){
    playerMove = 'kamień';
    }
    else if(playerInput == '2'){
        playerMove = 'papier';
    }
    else if(playerInput == '3'){
        playerMove = 'nożyce';
    }
    else {
        playerMove = 'Nieznany ruch';
    }
    */
    // printMessage('Twój ruch to: ' + playerMove);

    // displayResult(computerMove, playerMove);

    /*if(playerMove == 'Nieznany ruch'){
        printMessage('Nieznany ruch');
    }
    else if(computerMove == playerMove){
        printMessage('Remis');
    }

    else if( computerMove == 'kamień' && playerMove == 'papier'){
        printMessage('Wygrywasz!');
    }
    else if(computerMove == 'kamień' && playerMove == 'nożyce') {
        printMessage('Przegrywasz!')
    }
    else if(computerMove == 'papier' && playerMove == 'nożyce') {
        printMessage('Wygrywasz!')
    }
    else if(computerMove == 'papier' && playerMove == 'kamień') {
        printMessage('Przegrywasz!')
    }
    else if(computerMove == 'nożyce' && playerMove == 'papier') {
        printMessage('Przegrywasz!')
    }
    else if(computerMove == 'nożyce' && playerMove == 'kamień') {
        printMessage('Wygrywasz!')
    }
    */
}

document.getElementById('play-rock').addEventListener('click', function(){

    playGame(1);

});

document.getElementById('play-scissors').addEventListener('click', function(){

    playGame(3);
    
});

document.getElementById('play-paper').addEventListener('click', function(){

    playGame(2);

});
