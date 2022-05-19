
const input = document.getElementById('input');
const buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{

        switch(e.target.innerText){
            case 'C':
                input.value = '';
                break;
            case '=':
                if(input.value == ''){
                    input.value = '';
                    break;
                }
                input.value = eval(input.value); 
                break;
            case '←':
                    input.value =  input.value.slice(0,-1); 
                    break;    
            default :
            input.value += e.target.innerText;            
        }
    })
})