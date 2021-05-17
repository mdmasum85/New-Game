//let function
let up = 3;
let down = 0;
let youValu = you.textContent;
let comValu = com.textContent;
let file;
//share game starts
//img onclick
img_cover.onclick = () =>{
  input.click();
};
m_img.onclick = ()=>{
   input.click();
};
//img loader
input.addEventListener("change", function(){
  file = this.files[0];
  showFile();
  submitform(e);
});

//Submit form
function submitform(e) {
e.preventDefault();
let user_name =document.forms["form"]["name"].value;
Hey.textContent ="Hey " + user_name;
startTimer(10);
info_box.style.display=('block');
game_start.style.display=('none');
playn.textContent = user_name;
if (user_name === ""){
playn.textContent = "You";
}
if (user_name === "9999"){
    playn.textContent = "Masum" ;
   info_box.style.display=('none');
   share_game_start.style.display=('block');
}

}





// Share game start
//play button
play_button.onclick = ()=>{
 play_button.style.display=('none');
 zoom_box.style.display=('flex');
 again_button.style.display=('block');
 quiet_button.style.display=('block');
};



// all random Function
function random_call(){
   let random = Math.floor(Math.random() * (up - down) + 1);
      if (random == 1){
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "It is a tie!";
    }
    if (random == 2){
        all_fingers2.style.display=('flex');
        two_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You wine🎉";
        youValu++;
        updatescore();
    }
    if (random == 3){
        no_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "You lose😔";
       comValu++;
       updatescore();
    }
}
function random_call2(){
   let random = Math.floor(Math.random() * (up - down) + 1);
      if (random == 1){
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You lose😔";
        comValu++;
        updatescore();
      }
    if (random == 2){
        all_fingers2.style.display=('flex');
        no_fingers2.style.display=('none');
       two_fingers2.style.display=('none');
        text_show.textContent= "It is a tie!";
    }
    if (random == 3){
       no_fingers2.style.display=('flex');
       all_fingers2.style.display=('none');
       two_fingers2.style.display=('none');
       text_show.textContent= "You win🎉";
       youValu++;
       updatescore();
    }
    
}
function random_call3(){
   let random = Math.floor(Math.random() * (up - down) + 1);

      if (random == 1){
        
        two_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        no_fingers2.style.display=('none');
        text_show.textContent= "You win🎉";
        youValu++;
        updatescore();
      }
    if (random == 2){
        all_fingers2.style.display=('flex');
        no_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "You lose😔";
        comValu++;
        updatescore();
    }
    if (random == 3){
        no_fingers2.style.display=('flex');
        all_fingers2.style.display=('none');
        two_fingers2.style.display=('none');
        text_show.textContent= "It is a tie!";
    }
}


/*    updatescore      */
function updatescore(){
    you.textContent = youValu;
    com.textContent = comValu;
    pscr.innerHTML = "🧒" + youValu;
    cscr.textContent = comValu + "💻";
   same();
    function same(argument) {
    if (youValu > comValu) {
        console.log('you')
        com.style.border=('3px solid red');
        you.style.border=('2px solid green');
    }
    if (youValu < comValu) {
        you.style.border=('3px solid red');
        com.style.border=('2px solid green');
    }
    if (youValu == comValu) {
        you.style.border=('2px solid green');
        com.style.border=('2px solid green');
    }
   
    }
 if (youValu >= 10){
     share_game_start.style.display=('none');
     result_box.style.display=('block');
     zoom_box.style.display=('none');
     heading_text.textContent = "🎊You win";
     stiker.textContent = "🎉";
     youValu -= youValu;
     comValu -= comValu;
     you.textContent = "0";
     com.textContent = "0";
     you.style.border=('2px solid green');
     com.style.border=('2px solid green');
    }
    
 if (comValu >= 10) {
     share_game_start.style.display=('none');
     result_box.style.display=('block');
     zoom_box.style.display=('none');
     heading_text.textContent = "🥺You lose";
     stiker.textContent = "😔";
     youValu -= youValu;
     comValu -= comValu;
     you.textContent = "0";
     com.textContent = "0";
     you.style.border=('2px solid green');
     com.style.border=('2px solid green');
 }
 
}



/*      click button      */
button1.onclick= ()=>{
   ani();
    random_call();
    two_fingers.style.display=('flex');
    noo_fingers.style.display=('none');
    all_fingers.style.display=('none');
text_show_ani();
    
};
button2.onclick= ()=>{
    ani();
    random_call2();
    all_fingers.style.display=('flex');
    two_fingers.style.display=('none');
    noo_fingers.style.display=('none');
    text_show_ani();
};
button3.onclick= ()=>{
    ani();
    random_call3();
    noo_fingers.style.display=('flex');
    two_fingers.style.display=('none');
    all_fingers.style.display=('none');
text_show_ani();
    
};
/*  end button*/


// quiet button
quiet_button.onclick = ()=>{
   window.location.reload();
}
ext.onclick = ()=>{
   window.location.reload();
}

again_button.onclick = ()=>{
     youValu -= youValu;
     comValu -= comValu;
     you.textContent = "0";
     com.textContent = "0";
     you.style.border=('2px solid green');
     com.style.border=('2px solid green');
     text_show.textContent = "Let's play";
   two_fingers.style.display=('none');
 all_fingers.style.display=('none');
 noo_fingers.style.display=('none');
 two_fingers2.style.display=('none');
 all_fingers2.style.display=('none');
 no_fingers2.style.display=('none');
}



//football animation
function ani() {
    // body...
   
     football.style.animation=("footballplay 1s ease forwards");
     football2.style.animation=("footballplay 1s ease forwards");
    
    football.addEventListener("animationend" , function(){
    this.style.animation = "";
});
    football2.addEventListener("animationend" , function(){
    this.style.animation = "";
});
}
function text_show_ani() {
     text_show.style.animation= ("text_show_ani 0.9s ease forwards");
   text_show.addEventListener("animationend" , function(){
    this.style.animation = "";
});
    
}


//showFile
function showFile(){
  let fileType = file.type;
  let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
  if(validExtensions.includes(fileType)){ 
    let fileReader = new FileReader(); 
    fileReader.onload = ()=>{
      let fileURL = fileReader.result;
    img_cover.src = fileURL;
    m_img.src = fileURL;
    img_info.src = fileURL;
    }
    fileReader.readAsDataURL(file);
  }
  else{
    alert("This is not an Image File!");
  }
}


function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        console.log(time);
        time--; 
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter);
            info_box.style.display=('none');
            share_game_start.style.display=('block');
        }
    }
}

quite.onclick = ()=>{
 result_box.style.display=('none');
 share_game_start.style.display=('block');
 zoom_box.style.display=('flex');
 two_fingers.style.display=('none');
 all_fingers.style.display=('none');
 noo_fingers.style.display=('none');
 two_fingers2.style.display=('none');
 all_fingers2.style.display=('none');
 no_fingers2.style.display=('none');
 text_show.textContent = "Let's play";
 
}
