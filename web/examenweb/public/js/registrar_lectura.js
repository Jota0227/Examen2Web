
document.querySelector("#registrar-btn").addEventListener("click", async ()=>{
    let fecha=document.querySelector("#fecha-txt").value;
    let hora=document.querySelector("#hora-txt").value.trim();
    let medidor=document.querySelector("#medidor-select").value.trim();
    let direccion=document.querySelector("#direccion-txt").value.trim();
    let valor=document.querySelector("#valor-txt").value.trim();
    let tipo=document.querySelector("#tipo-select").value.trim();
    let errores=[];
    if(fecha===""){
        errores.push("Debe seleccionar una fecha");
    }
    if(hora===""){
        errores.push("Debe ingresar una hora");
    }else if(hora.charAt(2)!=":" || hora.length!=5){
        errores.push("El formato de la hora no es el correcto")
    }
    if(direccion===""){
        errores.push("Debe ingresar una direccion");
    }
    if(valor===""){  
        errores.push("Debe ingresar un valor");
    }else if(valor>500){
        errores.push("El monto ingresado supera el limite");
    }
    if(errores.length==0){
        let mediciones = await getMediciones(); 
        let medicionEncontrada = mediciones.find(c=>c.fecha===fecha && c.hora===hora);
        if(medicionEncontrada != undefined){
            errores.push("La consola ya existe");
        }else{
            let medicion={};
            medicion.fecha = fecha;
            medicion.hora = hora;
            medicion.medidor = medidor;
            medicion.direccion = direccion;
            medicion.valor = valor;
            medicion.tipo = tipo;
            let res = await crearMedicion(medicion);
            window.location.href = "mediciones_existentes";
        }
    }else{
        Swal.fire({
            tittle: "Errores de validacion", html: errores.join("<br />")
        });
    }
});