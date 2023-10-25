function inversion() {


    //Campos de los elementos
    const cNombres = document.getElementById("nombres").value;
    const cEmail = document.getElementById("email").value;
    const cMonto = document.getElementById("monto").value;
    const cTiempo = document.getElementById("tiempo").value;
     
    let Montos= parseInt(cMonto)

    const preSimulacion = document.querySelector(".pre-simulation");
    const postSimulacion = document.querySelector(".post-simulation");

    const showNombre = document.getElementById("nombres-show");
    const showEmail = document.getElementById("email-show");
    const showTiempo = document.getElementById("tiempoInv");
    const showInteres = document.getElementById("interese");
    const showGanancias = document.getElementById("Ganancia");
    const showTotal = document.getElementById("Total");

     let ganancias = ""
     let total = ""


    postSimulacion.classList.remove("disabled");
    preSimulacion.classList.add("disabled");

    showNombre.innerText = cNombres;
    showEmail.innerText = cEmail;

    switch (cTiempo) {
        case "1":
            ganancias =(Montos * 0.008)*12;
            total = (Montos * 0.008)*12 + Montos;
            showTiempo.innerText = "12 Meses";
            showInteres.innerText = "0.8";
            showTotal.innerText = total;
            showGanancias.innerText = ganancias;

            break;
        case "2":
            ganancias =(Montos * 0.013)*24;
            total = (Montos * 0.013)*24 + Montos;
            showTiempo.innerText = "24 Meses";
            showInteres.innerText = "1.3";
            showTotal.innerText = total;
            showGanancias.innerText = ganancias;
            break;



        case "3":
            ganancias =(Montos * 0.017)*36;
            total = (Montos * 0.017)*36 + Montos;
            showTiempo.innerText = "36 Meses";
            showInteres.innerText = "1.7";
            showTotal.innerText = total;
            showGanancias.innerText = ganancias;

            break;
        default:
            break
    }





}