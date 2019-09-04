let img="./mole.png"                                    //define mole img in js
let place=document.getElementsByClassName("placeImg")   //creates array of mole positions

//this function generates a random place for the mole
const playFunc=()=>{
for (i=0;i<12;i++){
    place[i].src="blank.png"                        //makes every img blank
    place[i].removeEventListener("click",addTotal)  //removes add total function from every position
}  
    let x=Math.floor(Math.random()*12)           //generates random number between 0-11
    molePlace=place[x]                           //define position for mole
    molePlace.src=img                            //put mole there
    place[x].addEventListener("click",addTotal)  //add click to add to total
}

//function to run once button is clicked
function thePlay(){
    myVar=setInterval(playFunc,1000)               //display mole every second
    document.getElementById("play").disabled=true  //hide play button as it causes errors pressed twice
    scoreplace.innerHTML=0                         //set score to 0
}

let scoreplace=document.getElementById("score") //define score in js
let total=0                                     //gloabal declare total
const addTotal=()=>{                            //function called on click
    total+=1                                    //add 1 to total
    scoreplace.innerHTML=total                  //display total score
}