let img="./mole.png"
let place=document.getElementsByClassName("placeImg")

//this function generates a random place for the mole
const playFunc=()=>{
for (i=0;i<12;i++){place[i].src="blank.png"} //makes all the squares blank
let x=Math.floor(Math.random()*12)           //generates random number between 0-11
molePlace=place[x]                           //define position for mole
molePlace.src=img                            //put mole there

}

//function to run once button is clicked
function thePlay(){
    myVar=setInterval(playFunc,1000)
    document.getElementById("play").disabled=true
}

let imgButton=document.createElement("Button")
imgButton.innerHTML="seriously, where are you?"
document.body.appendChild(imgButton)

