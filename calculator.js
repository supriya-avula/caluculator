let buttons =document.getElementsByTagName('button');
let result = document.getElementById('result');
console.log(buttons);

function handleKeyboardInput(key) {
    if (/[0-9\/\*\-\+=]|Enter/.test(key)) {
        updateDisplay(key);
    } else if (key === 'Backspace') {
        updateDisplay('DEL');
    } else if (key === 'Escape') {
        updateDisplay('C');
    }
}
document.addEventListener('keydown', function(event) {
    handleKeyboardInput(event.key);
});

for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
        let input = this.innerText;
        updateDisplay(input)
        
    }
}
function updateDisplay(input){
    let currentDisplay = result.innerText
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="=" && input!="Enter"){
            result.innerText=""
            result.innerText=input
        }

    }
    else{
       
    
        if(input=="DEL"){
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
        if(input=="C"){
            result.innerText="0"
        }
        if(input!="C"&&input!="DEL"&&input!="="&&input!="Enter"){
            result.innerText+=input
           
        }

        if(input=="="||input=="Enter"){          
            let display = result.innerText
            try{
            result.innerText= eval(display)
            }
            catch(error){
                result.innerText = "Error";
            }
        }
    }

}






