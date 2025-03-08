const buttons = document.querySelectorAll('.button')
// console.log(buttons);
const body = document.body;

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        switch(e.target.id){
            case 'gray':
                body.style.backgroundColor= e.target.id
                break;

            case 'white':
                body.style.backgroundColor= e.target.id
                break;
                
            case 'blue':
                body.style.backgroundColor= e.target.id
                break;

            case 'yellow':
                body.style.backgroundColor= e.target.id
                break;
            case 'purple':
                body.style.backgroundColor= e.target.id
                break;
        }
    })
})