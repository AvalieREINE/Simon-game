 let gamePattern = [];
 let userClickedPattern = [];
 
 const buttonColors = ["red", "blue", "green", "yellow"];

 let started = false;


 $(document).keypress(function(){
     if (!started) {

        $("#level-title").text("Level " + level);
         nextSequence()
         started = true;
     }
 })

 let level = 0 ;

  

 $(".btn").click( function(){
    let userChooseColor = $(this).attr("id")


    userClickedPattern.push(userChooseColor)
    console.log(userClickedPattern)

    playSound(userChooseColor)

    animatePress(userChooseColor)

    checkAnswer(userClickedPattern.length-1);
 
  
})

function checkAnswer(currentLevel){

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");

        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);

          
      
            } 
          } else{
            playSound("wrong");
                $("body").addClass("game-over")
                setTimeout(function () {
                    $("body").removeClass("game-over")
                  }, 200);

                  $("#level-title").text("Game Over, Press Any Key to Restart");

                  startOver();

            
                console.log("wrong")
            }
  

           
}   


function startOver(){
    level =0;
    gamePattern = [];
    started = false;
}


 
 function nextSequence(){

    userClickedPattern= [];
    level++;
 

    $("#level-title").text("Level " + level);

   

    let randomNumber = Math.floor(Math.random()*4)
    console.log(randomNumber)
    let randomChooseColor = buttonColors[randomNumber];
    console.log(randomChooseColor)
    gamePattern.push(randomChooseColor)
    

    $("#" + randomChooseColor).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChooseColor)


 }

 function playSound(name){

 

    let audio = new Audio("sounds/"+name+ ".mp3");
    audio.play();

     
 }

 function animatePress(currentColor){
     $("#"+currentColor).addClass("pressed")
     setTimeout(function(){
        $("#"+currentColor).removeClass("pressed")
     }, 100)
 }
 

