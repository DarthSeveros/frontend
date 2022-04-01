function verificateAge(age){
    //Chequeamos edad fuera de 1 a 10
    if (age < 1 || age > 10) {
        return true;
    }
}

function virificateWeight(weight) {
    //Chequeamos peso fuera de 1 a 100
    if (weight < 1 || weight > 100) {
        return true;
    }
}

function calcularPesoIdeal(){
    //Obtenemos la edad
    var edad = document.getElementById('fage').value;

    //Verificamos que la edad sea correcta
    if (verificateAge(edad)){
        alert('Edad invalida, debe ser entre 1 y 10 anhos, intente de nuevo.')
        return;
    }  
    
    //Calculamos el peso ideal
    var peso_ideal = edad * 2 + 8;

    //Desplegamos el resultado en pantalla
    var contenedor_resultado = document.getElementById('container-result_ideal_weight');
    contenedor_resultado.innerHTML = "<b>Peso ideal : </b>" + peso_ideal + " kilos.";

    // Calculamos el estado de peso
    calcularEstadoPeso(peso_ideal);
}
function calcularEstadoPeso(peso_ideal){
    // Obtenemos el peso actual
    var peso_actual = document.getElementById('fweight').value;

    //Verificamos que el peso sea el correcto
    if (verificateWeight(peso_actual)){
        alert('Peso invalido, debe ser entre 1 y 100 kilos, intente de nuevo.')
        return;
    }

    //Efectuamos una comparación para determinar el estado de peso
    var estadoPeso = "";
    var imagen = "";
    if(peso_actual == peso_ideal){
        estadoPeso="Peso Ideal";
        imagen = "peso_ideal";
    }else{
        if(peso_actual > peso_ideal){
            estadoPeso = "Sobrepeso";
            imagen="sobre_peso";
        }else{
            estadoPeso = "Bajopeso";
            imagen = "bajo_peso";
        }
    }
    //Mostramos estado de peso
    var contenedor_texto_estado_peso = document.getElementById('container_result_state_weight');
    contenedor_texto_estado_peso.innerHTML ="<b>Estado peso :</b>" + estadoPeso;
    //Mostramos imagen
    var contenedor_imagen_estado_peso = document.getElementById('container_img_result_state_weight');
    contenedor_imagen_estado_peso.innerHTML = "<img src=img/" + imagen+"_256x256.png>";

}