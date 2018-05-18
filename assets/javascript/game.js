//Document wait 
$(document).ready(function() {
  


    //variable declarations 
    var numberToGuess = Math.floor(Math.random() * 120) + 19;  
    console.log(numberToGuess);
    var redNumber = Math.floor(Math.random() * 12) + 1;  
    var blueNumber = Math.floor(Math.random() * 12) + 1;
    var yellowNumber = Math.floor(Math.random() * 12) + 1;
    var greenNumber = Math.floor(Math.random() * 12) + 1;
    var wins = 0;
    var losses = 0;
    var totalValue = 0;
    var input;

    //getting each element of 

    //console logs to know the value of each number
    console.log("redNumber" + redNumber);
    console.log("blueNumber" + blueNumber);
    console.log("greenNumber" + greenNumber);
    console.log("yellowNumber" + yellowNumber);
    
    //the idea to write the whole program around this is really dumb so stop it 
    $(".btn").on("click",function(){
        input = this.id;
        console.log(this.id);

        //conditionals to increment count 
        if(input ==='red-btn'){
            totalValue += redNumber;
        }
        if(input =='blue-btn'){
            totalValue += blueNumber;
        }
        if(input =='green-btn'){
            totalValue += greenNumber;
        }
        if(input =='yellow-btn'){
            totalValue += yellowNumber;
        }
        console.log(totalValue);

        if(totalValue === numberToGuess){
            alert("you win");
        }
        if(totalValue > numberToGuess){
            alert("you're a loser and you suck");
        }

    }); //end of button click


}); // end of main 
