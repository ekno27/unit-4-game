//Document wait 
$(document).ready(function() {
  


    //variable declarations 
    var numberToGuess = Math.floor(Math.random() * 120) + 19;  
    var redNumber = Math.floor(Math.random() * 12) + 1;  
    var blueNumber = Math.floor(Math.random() * 12) + 1;
    var yellowNumber = Math.floor(Math.random() * 12) + 1;
    var greenNumber = Math.floor(Math.random() * 12) + 1;
    var wins = 0;
    var losses = 0;
    var totalValue = 0;
    var input;

    

    //console logs to know the value of each number
    $("#random-number").text("Number to guess: "+ numberToGuess);
    console.log("number to guess:   "+ numberToGuess);
    console.log("redNumber: " + redNumber);
    console.log("blueNumber: " + blueNumber);
    console.log("greenNumber: " + greenNumber);
    console.log("yellowNumber: " + yellowNumber);
    
    // button clicks
    $(".btn").on("click",function(){
        input = this.id;
        
        //conditionals to increment count 
        if(input ==='red-btn'){
            totalValue += redNumber;
            $("#total-score").html("Your total score: " + totalValue);
        }
        if(input =='blue-btn'){
            totalValue += blueNumber;
            $("#total-score").html("Your total score: " + totalValue);
        }
        if(input =='green-btn'){
            totalValue += greenNumber;
            $("#total-score").html("Your total score: " + totalValue);
        }
        if(input =='yellow-btn'){
            totalValue += yellowNumber;
            $("#total-score").html("Your total score: " + totalValue);
        }

        console.log("total value: "+ totalValue);
        
        //winning determinants 
        if(totalValue === numberToGuess){
            $("#win-or-lose").text("You win!");
             alert("you win");
            wins++;
            totalValue = 0;
            $("#total-score").text("Your total score" + totalValue);
            numberToGuess = Math.floor(Math.random() * 120) + 19;
            $("#random-number").text("Number to guess: "+ numberToGuess);
            redNumber = Math.floor(Math.random() * 12) + 1;  
            blueNumber = Math.floor(Math.random() * 12) + 1; 
            yellowNumber = Math.floor(Math.random() * 12) + 1; greenNumber = Math.floor(Math.random() * 12) + 1;

            //new declarations 
            console.log("number to guess: "+ numberToGuess);
            console.log("redNumber: " + redNumber);
            console.log("blueNumber: " + blueNumber);
            console.log("greenNumber: " + greenNumber);
            console.log("yellowNumber: " + yellowNumber);
            console.log("Total value: "+ totalValue);
        }
        if(totalValue > numberToGuess){
            $("#win-or-lose").text("You're a loser and you suck");
            alert("you're a loser and you suck");
            losses++;
             $("#losses").text("Losses: "+ losses);
            totalValue = 0;
            $("#total-score").text("Your total score:" + totalValue);
            numberToGuess = Math.floor(Math.random() * 120) + 19;   
            $("#random-number").text("Number to guess: "+ numberToGuess);
            redNumber = Math.floor(Math.random() * 12) + 1;
            blueNumber = Math.floor(Math.random() * 12) + 1; 
            yellowNumber = Math.floor(Math.random() * 12) + 1; greenNumber = Math.floor(Math.random() * 12) + 1;
            //new declarations
            console.log("number to guess:   "+ numberToGuess);
            console.log("redNumber: " + redNumber);
            console.log("blueNumber: " + blueNumber);
            console.log("greenNumber: " + greenNumber);
            console.log("yellowNumber: " + yellowNumber);
            console.log("Total value: "+ totalValue);
            
        }
        
    }); //end of button click

   
    

    
}); // end of main 
