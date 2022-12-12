document.querySelector('.button').onclick = function(){

    var pass1 = document.querySelector('#pass1').value,
    pass2 =  document.querySelector('#pass2').value;

    if(pass1 == ""){
    }
    else if(pass1 != pass2){
        alert("PASSWORD NOT MATCH");
        return false 
    }
    return true
}
