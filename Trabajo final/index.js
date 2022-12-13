'use strict'
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

function placeTab(event, turn){
    let pressedButt = event.target;
    if(!finish && pressedButt.innerHTML == ""){
        pressedButt.innerHTML = tabs[turn];
        placed++;
        let gameStatus = game();//OJO
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
        else{
            textError.style.visibility = "visible"; 
        }

    }
}
function game(){
    
}