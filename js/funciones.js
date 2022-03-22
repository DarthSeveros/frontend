function calculateIdealWeight(){
    //Obtenemos la edad
    var age = document.getElementById("fage").value;
    var height = document.getElementById("fheight").value;
    var weight = document.getElementById("fweight").value;
    var imc = weight/height**2;

    if (imc < 18.5) {
        result_txt = "Estas por debajo de lo normal.";
    }
    else if (imc < 25) {
        result_txt = "Tu peso esta dentro de lo normal.";
    }

    else if (imc <29.9) {
        result_txt = "Te encuentras en sobrepeso.";
    }

    else {
        result_txt = "Te encuentras en obesidad.";
    }

    
    
    var p_result = document.getElementById("result");
    p_result.innerHTML = result_txt;
    
}

mybutton = document.getElementById("submit_button");
mybutton.onclick = calculateIdealWeight;