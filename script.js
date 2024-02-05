let screen = document.querySelector('.screen');

let resetBtn = document.querySelector('.reset-btn');
let startBtn = document.querySelector('.start-btn');
let powerBtn = document.querySelector('.power-btn');
let rightBtn = document.querySelector('.right-arrow-btn');
let leftBtn = document.querySelector('.left-arrow-btn');

let operatorNumber = document.querySelector('.pixel-display').textContent;
operatorNumber = Number(operatorNumber);

let stringWidthAndHeight = (((400/operatorNumber)/400)*100 ) + '%';

let isItOn = false;

const pixelArray = [];

function setPixels(){

    operatorNumber = document.querySelector('.pixel-display').textContent;
    operatorNumber = Number(operatorNumber);
    console.log(operatorNumber);

    stringWidthAndHeight = (((400/operatorNumber)/400)*100 ) + '%';
    console.log(stringWidthAndHeight);
    
    for(i = 0; i < operatorNumber*operatorNumber ; i++){

        pixelArray[i] = document.createElement('div');
        pixelArray[i].classList.add('div-pixel-white');
        pixelArray[i].style.width = stringWidthAndHeight;
        pixelArray[i].style.height = stringWidthAndHeight;

        screen.appendChild(pixelArray[i]);
    }  

}

function deletePixels(){
    
    pixelArray.forEach((pixel)=> {
        pixel.remove();
    });
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

rightBtn.addEventListener('click', ()=>{

    operatorNumber *= 2;
    console.log(operatorNumber);
    document.querySelector('.pixel-display').textContent = operatorNumber;
    
})

leftBtn.addEventListener('click', ()=>{

    operatorNumber /= 2;
    console.log(operatorNumber);

    document.querySelector('.pixel-display').textContent = operatorNumber;
    
})




/* 160.000pixeis^2 

 16 = 6,25% de 400(valor total)
 32 = 3,125% de 400

*/

