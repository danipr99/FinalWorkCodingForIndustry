//'use strict'
let tabs = ["X", "O"];
let turn =1;
let placed = 0;
let finish= false;
let buttons = Array.from(document.getElementsByTagName("button"));
let vicText1 = document.getElementById("txtVic1");
let vicText2 = document.getElementById("txtVic2");
let textError = document.getElementById("textError");

buttons.forEach(x => x.addEventListener("click", placeTab));

function switchTurn(){
    if(turn==0){
        turn=1;
    }else{
        turn=0;
    }
}

function placeTab(event){
    let pressedButt = event.target;
    if(!finish && pressedButt.innerHTML == ""){
        pressedButt.innerHTML = tabs[turn];
        //placed++;
        let gameStatus = game();
        if(gameStatus == 0){
            switchTurn();
            
        }else if(gameStatus == 1){
            vicText1.style.visibility = "visible";
            finish=true;
        }
        else if(gameStatus == 2){
            vicText2.style.visibility = "visible";
            finish=true;
        }

    }
}
function game(){
    let whoWins = 0;
    let typeWin=0; //1 = 1ºfila - 2 = 2ºfila - 3 = 3ºfila - 4 = 1ºcolumna - 5 = 2ºcolumna - 6 = 3ºcolumna - 7 = 1ºdiagonal - 8 = 2ºdiagonal
    if(equals(buttons[0], buttons[1], buttons[2])==1){
        typeWin=1;
        whoWins=1;
    }
    if(equals(buttons[3], buttons[4], buttons[5])==1){
        typeWin=2;
        whoWins=1;
    }
    if(equals(buttons[6], buttons[7], buttons[8])==1){
        typeWin=3;
        whoWins=1;
    }
    if(equals(buttons[0], buttons[3], buttons[6])==1){
        typeWin=4;
        whoWins=1;
    }
    if(equals(buttons[1], buttons[4], buttons[7])==1){
        typeWin=5;
        whoWins=1;
    }
    if(equals(buttons[2], buttons[5], buttons[8])==1){
        typeWin=6;
        whoWins=1;
    }
    if(equals(buttons[0], buttons[4], buttons[8])==1){
        typeWin=7;
        whoWins=1;
    }
    if(equals(buttons[2], buttons[4], buttons[6])==1){
        typeWin=8;
        whoWins=1;
    }
    if(equals(buttons[0], buttons[1], buttons[2])==2){
        typeWin=1;
        whoWins=2;
    }
    if(equals(buttons[3], buttons[4], buttons[5])==2){
        typeWin=2;
        whoWins=2;
    }
    if(equals(buttons[6], buttons[7], buttons[8])==2){
        typeWin=3;
        whoWins=2;
    }
    if(equals(buttons[0], buttons[3], buttons[6])==2){
        typeWin=4;
        whoWins=2;
    }
    if(equals(buttons[1], buttons[4], buttons[7])==2){
        typeWin=5;
        whoWins=2;
    }
    if(equals(buttons[2], buttons[5], buttons[8])==2){
        typeWin=6;
        whoWins=2;
    }
    if(equals(buttons[0], buttons[4], buttons[8])==2){
        typeWin=7;
        whoWins=2;
    }
    if(equals(buttons[2], buttons[4], buttons[6])==2){
        typeWin=8;
        whoWins=2;
    }
    return typeWin;
}
function equals(but0, but1, but2){
    if(but0.innerHTML==but1.innerHTML==but2.innerHTML=="X"){
        but0.innerHTML.style.backgroundColor = "Blue";
        but1.innerHTML.style.backgroundColor = "Blue";
        but2.innerHTML.style.backgroundColor = "Blue";
        return 1;
    }else if(but0.innerHTML==but1.innerHTML==but2.innerHTML=="O"){
        but0.innerHTML.style.backgroundColor = "Red";
        but1.innerHTML.style.backgroundColor = "Red";
        but2.innerHTML.style.backgroundColor = "Red";
        return 2;
    }else{
        return 0;
    }
}