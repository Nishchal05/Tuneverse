console.log("welcome to tuneverse");
let playaudio1 = new Audio('1.mp3');
let songindex=0;
let masterplay=document.getElementById('masterplay');
let plays =document.getElementById('plays');
let gif=document.getElementById('gif1');
let songlists = Array.from(document.getElementsByClassName('songlist'));
let alpha = document.getElementById('alpha');
let changealls=document.querySelector('changeall');
let playlist=[
    {songName:"salam-e-ishq" , song:"1.mp3" , coverpath:"1.jpg"},
    {songName:"salam-e-ishq" , song:"2.mp3" , coverpath:"2.jpg"},
    {songName:"salam-e-ishq" , song:"3.mp3" , coverpath:"3.jpg"},
    {songName:"salam-e-ishq" , song:"4.mp3" , coverpath:"4.jpg"},
    {songName:"salam-e-ishq" , song:"5.mp3" , coverpath:"5.jpg"},
    {songName:"salam-e-ishq" , song:"6.mp3" , coverpath:"6.jpg"},
    {songName:"salam-e-ishq" , song:"7.mp3" , coverpath:"7.jpg"},
    {songName:"salam-e-ishq" , song:"8.mp3" , coverpath:"8.jpg"},
    {songName:"salam-e-ishq" , song:"9.mp3" , coverpath:"9.jpg"},
    {songName:"salam-e-ishq" , song:"10.mp3" , coverpath:"10.jpg"}
]
songlists.forEach((element, i)=>{
    console.log(element, i);
     element.getElementsByTagName("img")[0].src=playlist[i].coverpath;
    element.getElementsByClassName("SONGNAME")[0].innerText = playlist[i].songName;
})
      masterplay.addEventListener('click' , ()=>{
        if(playaudio1.paused || playaudio1.currentTime<=0){
            playaudio1.play();
            masterplay.classList.remove('fa-circle-play');
            masterplay.classList.add('fa-circle-pause');
            gif.style.opacity=1;
        }
        else{    playaudio1.pause();
            masterplay.classList.remove('fa-circle-pause');
            masterplay.classList.add('fa-circle-play');
            gif.style.opacity=0;
        }
    })    

       
playaudio1.addEventListener('timeupdate' , ()=>{
    process=parseInt((playaudio1.currentTime/playaudio1.duration)* 100);
    plays.value=process;
})
plays.addEventListener('change',()=>{
    playaudio1.currentTime=plays.value*playaudio1.duration/100;
})
 const makeallplay=()=>{
    Array.from(document.getElementsByClassName('changeall')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
 }
Array.from(document.getElementsByClassName('changeall')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeallplay();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        playaudio1.src=`${index}.mp3`;
        playaudio1.currentTime=0;
        playaudio1.play();
        masterplay.classList.remove('fa-circle-play');
         masterplay.classList.add('fa-circle-pause');
    })
})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songindex>9){
        songindex=0;
    }
    else{
        songindex+=1;
    }
    playaudio1.src=`${songindex+1}.mp3`;
    playaudio1.currentTime=0;
    playaudio1.play();
    masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex-=1;
    }
    playaudio1.src=`${songindex+1}.mp3`;
    playaudio1.currentTime=0;
    playaudio1.play();
    masterplay.classList.remove('fa-circle-play');
     masterplay.classList.add('fa-circle-pause');
})