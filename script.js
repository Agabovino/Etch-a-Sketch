let screen = document.querySelector('.screen');
let resetBtn = document.querySelector('.reset-btn');

let pixelArray = [];

/*EVENT LISTENER DO BOTAO*/

resetBtn.addEventListener('click', ()=>{

    for(i = 0; i <= 256 ; i++){


        if(i % 2 == 0){

            pixelArray[i] = document.createElement('div');
            pixelArray[i].classList.add('div-pixel-white');
            screen.appendChild(pixelArray[i]);

        }else{

            pixelArray[i] = document.createElement('div');
            pixelArray[i].classList.add('div-pixel-black');
            screen.appendChild(pixelArray[i]);
        }  
    }   
})











