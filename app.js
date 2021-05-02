
//share game starts
const pscr = document.querySelector(".pscr");
const cscr = document.querySelector(".cscr");
const zoom_box = document.querySelector(".zoom_box");
const quiet_button = document.querySelector(".quiet_button");
const exem = document.querySelector(".exem");
const football = document.querySelector(".football");
const football2 = document.querySelector(".football2");

const two_fingers = document.querySelector(".two_fingers");
const all_fingers = document.querySelector(".all_fingers");
const noo_fingers = document.querySelector(".noo_fingers");
const no_fingers2 = document.querySelector(".no_fingers2");
const all_fingers2 = document.querySelector(".all_fingers2");
const two_fingers2 = document.querySelector(".two_fingers2");
const text_show = document.querySelector(".text_show");
const you = document.querySelector(".you");
const com = document.querySelector(".com");
const result_box = document.querySelector(".result_box");
const heading_text = document.querySelector(".heading_text");
const stiker = document.querySelector(".stiker");
const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const again = document.querySelector(".again");
const quite = document.querySelector(".quite");
const play_button = document.querySelector(".play_button");
const share_game_start = document.querySelector(".share_game_start");
// Share game start
 let up = 3;
 let down = 0;
let youValu = 0;
let comValu = 0;
play_button.onclick= ()=>{
    zoom_box.style.display=('flex');
}
// all onclick Function
/*  Calling all random function  */
function random_call(){
    
   let random = Math.floor(Math.random() * (up - down) + 1);

      if (random == 1){
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You are friends";
        
       
    }
    if (random == 2){
        all_fingers2.style.display=('flex');
        two_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You wine";
        youValu++;
        updatescoreP();
        
    }
    if (random == 3){
        no_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "You lose";
       comValu++;
       updatescoreC();
      
    }
   
  
}
function random_call2(){
  
   let random = Math.floor(Math.random() * (up - down) + 1);

      if (random == 1){
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You lose";
        comValu++;
        updatescoreC();
       
      }
    if (random == 2){
        all_fingers2.style.display=('flex');
        no_fingers2.style.display=('none');
       two_fingers2.style.display=('none');
        text_show.textContent= "You are friends";
       
    }
    if (random == 3){
        no_fingers2.style.display=('flex');
       all_fingers2.style.display=('none');
       two_fingers2.style.display=('none');
        text_show.textContent= "You win";
       youValu++;
       updatescoreP();
     
    }
   
 
}
function random_call3(){
 
   let random = Math.floor(Math.random() * (up - down) + 1);

      if (random == 1){
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You win";
        youValu++;
        updatescoreP();
    
      }
    if (random == 2){
        all_fingers2.style.display=('flex');
        no_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "You lose";
        comValu++;
        updatescoreC();
  
    }
    if (random == 3){
        no_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "You are friends";
     
    }
}
/*    updatescore      */
function updatescoreP(){
    you.textContent = youValu;
    let pScore = youValu;
    
    if (pScore >= 10) {
        result_box.style.display=('block');
         zoom_box.style.display=('none');
         share_game_start.style.display=('none');
         
    }
     pscr.textContent = "🧒 " + pScore;
    heading_text.textContent = "🎊You win";
     stiker.textContent = "🎉";
    console.log(pScore);
}
function updatescoreC(){
    com.textContent = comValu;
    let cScore = comValu;
    
     if (cScore >= 10) {
        result_box.style.display=('block');
        zoom_box.style.display=('none');
        share_game_start.style.display=('none');
       
    }
     cscr.textContent = cScore + "💻";
     heading_text.textContent = "🥺You lose";
     stiker.textContent = "😔";
    console.log(cScore);
}
/*      Down button      */
button1.onclick= ()=>{
    random_call();
    two_fingers.style.display=('flex');
    noo_fingers.style.display=('none');
    all_fingers.style.display=('none');
};
button2.onclick= ()=>{
    random_call2();
    all_fingers.style.display=('flex');
    two_fingers.style.display=('none');
    noo_fingers.style.display=('none');
};
button3.onclick= ()=>{
    random_call3();
    noo_fingers.style.display=('flex');
    two_fingers.style.display=('none');
    all_fingers.style.display=('none');
};
/*  end button*/



quiet_button.onclick = ()=>{
   window.location.reload();
}
quite.onclick = ()=>{
   window.location.reload();
}
//music option
  let upp = 4;
  let dw = 0;
  let randomm = Math.floor(Math.random() * (upp - dw) +1);
  function play(){
      // body...

const music1 = document.querySelector(".music1");
const music2 = document.querySelector(".music2");
const music3 = document.querySelector(".music3");
const music4 = document.querySelector(".music4");


if (randomm == 1) {
    music1.play();
}
if (randomm == 2) {
    music2.play();
}
if (randomm == 3) {
    music3.play();
}
if (randomm == 4) {
    music4.play();
}
    
  }


