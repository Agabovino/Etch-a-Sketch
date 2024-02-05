let screen = document.querySelector('.screen');

let resetBtn = document.querySelector('.reset-btn');
let startBtn = document.querySelector('.start-btn');
let powerBtn = document.querySelector('.power-btn');

let isItOn = false;
const pixelArray = [];

function setPixels(){

    for(i = 0; i < 256 ; i++){

        pixelArray[i] = document.createElement('div');
        pixelArray[i].classList.add('div-pixel-white');
        screen.appendChild(pixelArray[i]);
    }  

}

function deletePixels(){
    
    for(i = 0; i < 256 ; i++){
       
        screen.removeChild(pixelArray[i]);
    }  
}

/*EVENT LISTENER DOS BOTOES*/

startBtn.addEventListener('click', ()=>{
    
    pixelArray.forEach((pixel) => {
        pixel.addEventListener('mouseover',()=>{
            pixel.setAttribute('class', 'div-pixel-black');
        });
    });
    
})

resetBtn.addEventListener('click', ()=>{

    for(let pixel of pixelArray){

        pixel.setAttribute('class', 'div-pixel-white');
    }
})

powerBtn.addEventListener('click', ()=>{

    if(isItOn == false){
        
        setPixels();
        isItOn = true;

    }else{

        deletePixels();
        isItOn = false;
    }
    
})