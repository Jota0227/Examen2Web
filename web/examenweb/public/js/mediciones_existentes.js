const iniciarDescarte = async function(){
    let id = this.idMedicion;
    let resp = await Swal.fire({tittle:"Esta seguro?", text:"Esta operacion es irreversible", icon:"error", showCancelButton:true});
    if(resp.isConfirmed){
        if(await eliminarMedicion(id)){
            let mediciones = await getMediciones();
            cargarTabla(mediciones);
            Swal.fire("Medicion eliminda","Medicon eliminada exitosamente","info");
        }else{
            Swal.fire("Error","No se pudo atender la solicitud","error");
        }
    }else{
        Swal.fire("Cancelado","cancelado por el usuario", "info");
    }
};

const cargarTabla = (mediciones)=>{
    let tbody = document.querySelector("#tbody-mediciones");
    tbody.innerHTML = "";
    for(let i=0; i<mediciones.length; ++i){
        let tr = document.createElement("tr");
        let tdFecha = document.createElement("td");
        tdFecha.innerText = mediciones[i].feche;
        let tdHora = document.createElement("td");
        tdHora.innerText = mediciones[i].hora;
        let tdMedidor = document.createElement("td");
        tdMedidor.innerText = mediciones[i].medidor
        let tdValor = document.createElement("td");
        tdValor.innerText = mediciones[i].valor
        let tdAcciones = document.createElement("td");
        let botonDescartar = document.createElement("button");
        botonDescartar.innerText = "Descartar Lectura";
        botonDescartar.classList.add("btn","btn-danger");
        botonDescartar.idMedicion = mediciones[i].id;
        botonDescartar.addEventListener("click", iniciarDescarte);
        tdAcciones.appendChild(botonDescartar);
        tr.appendChild(tdFecha);
        tr.appendChild(tdHora);
        tr.appendChild(tdMedidor);
        tr.appendChild(tdValor);
        tr.appendChild(tdAcciones);
        tbody.appendChild(tr);
    }
};

document.querySelector("#filtro-cbx").addEventListener("change", async ()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let mediciones = await getMediciones(filtro);
    cargarTabla(mediciones);
});


document.addEventListener("DOMContentLoaded", async ()=>{
    let mediciones = await getMediciones();
    cargarTabla(mediciones);
});