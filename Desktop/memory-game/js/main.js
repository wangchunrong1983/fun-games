





let cards =["queen","queen","king","king"];

let cardInPlay=[];

let cardOne= cards[0];

cardInPlay.push(cardOne);

let cardTwo= cards[2];

cardInPlay.push(cardTwo);


console.log("User flipped "  +  cardOne);

console.log("User flipped "  +  cardTwo);

if(cardInPlay.length===2){

	if(cardInPlay[0] === cardInPlay[1]){
		
		alert("you found a match")
}
    else{
    	alert("sorry, try again")
    
   }

};