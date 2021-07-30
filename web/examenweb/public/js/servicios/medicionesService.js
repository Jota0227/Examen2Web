
const getMediciones= async (filtro="todos")=>{
    let resp;
    if(filtro=="todos"){
        resp = await axios.get("api/mediciones/get"); //esto traera la lista que esta en la base de datos, que por defecto sera todos, porque se indico arriba
    }else{
        resp = await axios.get(`api/mediciones/filtrar?filtro=${filtro}`); // cuando no este en todo por defecto, llamara a api/consolas/filtrar y le va a pasar el filtro que se le pasa
    }
    return resp.data;
};


const crearMedicion = async(medidor)=>{
    let resp = await axios.post("api/mediciones/post", medidor,{
        headers:{
            "Content-Type": "application/json"
        }
    });
    return resp.data;
};
const eliminarConsola = async(id)=>{
    try{
        let resp = await axios.post("api/mediciones/delete", {id}, {
            headers:{
                "Content-Type": "application/json"
            }
        });
        return resp.data=="ok";
    }catch(e){
        return false;
    }
};

