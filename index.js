var y=document.querySelectorAll(".class").length;

for(var i=0;i<y;i++){
    document.querySelectorAll(".class")[i].addEventListener("click",function(){
        var buttonInnerHTML =this.innerHTML;
       
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
    });

}
     document.addEventListener("keypress",function(event){
      makeSound(event.key);
          buttonAnimation(event.key);
        });
 function makeSound(key){
    switch(key){
        case "w":
            var tom1= new Audio("./brass.mp3")
            tom1.play();
            break;
            case "a":
            var tom2= new Audio("./Dancefloor.mp3")
            tom2.play();
            break;
            case "s":
            var tom3= new Audio("./Hip-Hop-Relax.mp3")
            tom3.play();
            break;
            case "d":
            var tom4= new Audio("./Komiku.mp3")
            tom4.play();
            break;
            case "j":
            var snare= new Audio("./Loyalty_Freak.mp3")
            snare.play();
            break;
            case "k":
            var crash= new Audio("./Marsel_Minga.mp3")
            crash.play();
            break;
            case "l":
            var kick= new Audio("./Rafael_Archangel.mp3")
            kick.play();
            break;
            default:console.log(buttonInnerHTML);

    }  
 }
    function buttonAnimation(currentKey)
 {
    var activeButton =document.querySelector("."  + currentKey)
    activeButton.classList.add("pressed");
   setTimeout(function(){
    activeButton.classList.remove("pressed")
   },100)
 }

