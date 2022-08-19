function play() 
  { 
    var currButton= this.innerHTML;
    buttonanim(this.innerHTML);
    switch (currButton) {
            case "w": var audio = new Audio('sounds/tom-1.mp3');
        audio.play();    
            break;
            case "a": var audio = new Audio("sounds/tom-2.mp3");
        audio.play();    
            break;
            case "s": var audio = new Audio('sounds/tom-3.mp3');
        audio.play();    
            break;
            case "d": var audio = new Audio('sounds/tom-4.mp3');
        audio.play();    
            break;
            case "j": var audio = new Audio('sounds/crash.mp3');
        audio.play();    
            break;
            case "k": var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();    
            break;
            case "l": var audio = new Audio('sounds/snare.mp3');
        audio.play();    
            break;
    
        default:
            break;
    }
// var audio = new Audio('sounds/crash.mp3');
// audio.play();
  }
var numofdrums=document.querySelectorAll(".drum").length;

for(var i=0; i<numofdrums;i++){

document.querySelectorAll(".drum")[i].addEventListener("click" ,play);


    }


    document.addEventListener("keydown",function(event){
   playsound(event.key);
   buttonanim(event.key);

    })

    function playsound(key) {
        
    switch (key) {
            case "w": var audio = new Audio('sounds/tom-1.mp3');
        audio.play();    
            break;
            case "a": var audio = new Audio("sounds/tom-2.mp3");
        audio.play();    
            break;
            case "s": var audio = new Audio('sounds/tom-3.mp3');
        audio.play();    
            break;
            case "d": var audio = new Audio('sounds/tom-4.mp3');
        audio.play();    
            break;
            case "j": var audio = new Audio('sounds/crash.mp3');
        audio.play();    
            break;
            case "k": var audio = new Audio('sounds/kick-bass.mp3');
        audio.play();    
            break;
            case "l": var audio = new Audio('sounds/snare.mp3');
        audio.play();    
            break;
    
        default:
            break;
    }
}

function buttonanim(key) {
    var curr =document.querySelector("."+ key);
    curr.classList.add("pressed");
    setTimeout(function()
    {
        curr.classList.remove("pressed");
    },100);
    
}
