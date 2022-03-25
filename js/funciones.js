function calculateIdealWeight(){
    //Obtenemos la edad
    var age = document.getElementById("fage").value;
    var height = document.getElementById("fheight").value;
    var weight = document.getElementById("fweight").value;
    var imc = weight/height**2;

    if (imc < 18.5) {
        ideal_weight = 18.5*Math.pow(height, 2);
        win = ideal_weight - weight;
        result_txt = "Estas por debajo de lo normal. Debes ganar al menos " + win.toFixed(1) + " kilos.";
    }
    else if (imc < 25) {
        result_txt = "Tu peso esta dentro de lo normal.";
    }

    else if (imc <29.9) {
        ideal_weight = 25*Math.pow(height, 2);
        loss = weight - ideal_weight;
        result_txt = "Te encuentras en sobrepeso. Debes perder al menos " + loss.toFixed(1) + " kilos.";
    }

    else {
        ideal_weight = 25*Math.pow(height, 2);
        loss = weight - ideal_weight;
        result_txt = "Te encuentras en obesidad. Debes perder al menos " + loss.toFixed(1) + " kilos.";
    }

    var p_result = document.getElementById("result");
    p_result.innerHTML = result_txt;
    
}

//mybutton = document.getElementById("submit_button");
//mybutton.onclick = calculateIdealWeight();