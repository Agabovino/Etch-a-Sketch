let screen = document.querySelector('.screen');

let resetBtn = document.querySelector('.reset-btn');
let colorBtn = document.querySelector('.color-btn');
let powerBtn = document.querySelector('.power-btn');
let rightBtn = document.querySelector('.right-arrow-btn');
let leftBtn = document.querySelector('.left-arrow-btn');

let operatorNumber = document.querySelector('.pixel-display').textContent;
operatorNumber = Number(operatorNumber);

let stringWidthAndHeight = (((400/operatorNumber)/400)*100 ) + '%';

let isItOn = false;
let isColorBtnPressed = false;

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
    isItOn = false;
}

function getColorAttribute(){

   let number = Math.random();
   number = Math.floor(number*10);
   
   
    switch(number){

        case 0: 
        return '#000000';
        
        case 1: 
        return '#FFFFFF';

        case 2: 
        return '#FF0000';

        case 3: 
        return '#00FF00';

        case 4: 
        return '#0000FF';

        case 5: 
        return '#FFFF00';

        case 6: 
        return '#00FFFF';

        case 7: 
        return '#FF00FF';

        case 8: 
        return '#C0C0C0';

        case 9: 
        return '#808080';
    }
}

function getColorBtnState(){

    if (isColorBtnPressed == false){
        return ''; 
    }
}
/*EVENT LISTENERS DOS BOTOES*/

resetBtn.addEventListener('click', ()=>{
    
    for(let pixel of pixelArray){ 
       
        pixel.style.backgroundColor  = '#CAE5FF';
    }
})

powerBtn.addEventListener('click', ()=>{
   
    if(isItOn == false){   
        setPixels();

        pixelArray.forEach((pixel) => {
            pixel.addEventListener('mouseover',()=>{
               
                    pixel.setAttribute('class', 'div-pixel-rgb');
                    if(isColorBtnPressed){
                        pixel.style.backgroundColor = 'black';
                    }else{
                        pixel.style.backgroundColor  = getColorAttribute();
                    }
                    
            });
        });

        isItOn = true;
    }else{
        deletePixels();
        isItOn = false;
    }


})

rightBtn.addEventListener('click', ()=>{
    
    if(operatorNumber <= 64 ){

        operatorNumber *= 2;
        console.log(operatorNumber);
        document.querySelector('.pixel-display').textContent = operatorNumber;
       
        deletePixels();
    }
    
});

leftBtn.addEventListener('click', ()=>{
   
    if(operatorNumber >= 4){

        operatorNumber /= 2;
        console.log(operatorNumber);
    
        document.querySelector('.pixel-display').textContent = operatorNumber;
        deletePixels();

    }
    
});

colorBtn.addEventListener('click', ()=>{

    if(isColorBtnPressed){
       
        isColorBtnPressed = false;

    }else{
        isColorBtnPressed = true;
    }
    
     
});
