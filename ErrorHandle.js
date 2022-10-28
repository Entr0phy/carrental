let pattern = /\D/g;

function cardNum(){
    if(document.getElementById('cardNumber').value.match(pattern)){
        document.getElementById('cardErrorSpan').style.display = 'flex';
    }
}

const alert = () =>{
    alert("Rental confirm!");
    return false;
}