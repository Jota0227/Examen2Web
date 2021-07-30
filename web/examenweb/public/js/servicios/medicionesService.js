
const getMediciones= async ()=>{
    let resp;
    resp = await axios.get("api/mediciones/get");
    return resp.data;
};


const crearMedicion = async(mediciones)=>{
    let resp = await axios.post("api/mediciones/post", mediciones,{
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

