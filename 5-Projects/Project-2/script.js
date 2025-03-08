const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#result')
    const note = document.getElementById('note')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please give a Valid Height: ${height}`
    } else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a Valid weight: ${weight}`
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2);
        if(bmi < 18.6){
            note.innerHTML = "You are UnderWeight!"
            note.style.color="orange"
        }else if( 18.6 <= bmi && bmi <= 24.9){
            note.innerHTML = "You lies in the normal range (You are fit)!"
            note.style.color="green"
        }else if(bmi > 24.9){
            note.innerHTML = "You are Overweight!"
            note.style.color="red"
        }
        results.innerHTML = `Your BMI is: ${bmi}`
    }
})