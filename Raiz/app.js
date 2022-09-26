cargarProductos();  

const iniciarSesion = () => {
    document.getElementById("formPopup").style.display = "block"; 
    document.getElementById("registroPopup").style.display = "none";
    document.getElementById("opac1").style.opacity ="20%";
    document.getElementById("opac2").style.opacity ="20%";
    document.getElementById("opac3").style.opacity ="20%";
    document.getElementById("opac4").style.opacity ="20%";
    document.getElementById("opac5").style.opacity ="20%";
    document.getElementById("opac6").style.opacity ="20%";
}   

const cerrarForm = () => {
    document.getElementById("formPopup").style.display = "none";
    document.getElementById("opac1").style.opacity ="1";
    document.getElementById("opac2").style.opacity ="1";
    document.getElementById("opac3").style.opacity ="1";
    document.getElementById("opac4").style.opacity ="1";
    document.getElementById("opac5").style.opacity ="1";
    document.getElementById("opac6").style.opacity ="1";
}
const cerrarFormRe = () => {
    document.getElementById("registroPopup").style.display = "none";
    document.getElementById("opac1").style.opacity ="1";
    document.getElementById("opac2").style.opacity ="1";
    document.getElementById("opac3").style.opacity ="1";
    document.getElementById("opac4").style.opacity ="1";
    document.getElementById("opac5").style.opacity ="1";
    document.getElementById("opac6").style.opacity ="1";
}

const registroCuenta = () =>{
    document.getElementById("registroPopup").style.display = "block";
    document.getElementById("formPopup").style.display = "none"; 
    document.getElementById("opac1").style.opacity ="20%";
    document.getElementById("opac2").style.opacity ="20%";
    document.getElementById("opac3").style.opacity ="20%";
    document.getElementById("opac4").style.opacity ="20%";
    document.getElementById("opac5").style.opacity ="20%";
    document.getElementById("opac6").style.opacity ="20%";
}

let productosArr = [];

function cargarProductos(){
    fetch ('/Raiz/Assets/productos.JSON')
    .then((response) => response.json())
    .then((data) => 
        productosArr = data.productos
    );
}

const buscarProducto = () => {
    let busqueda = document.getElementById("search").value;
    (productosArr.Nombre).find(element => element == busqueda.value);
}

function guardarUsuario() {
    let userEmail = document.getElementById("emailRe").value;
    let contra = document.getElementById("contraseñaRe").value;
    validateCuenta(userEmail,contra);
    archivarUsuario(userEmail,contra);
}
function validateCuenta(email,pass){
    var re = /\S+@\S+\.\S+/;
    var pa = /\S/;
    return ((pa.test(pass)) & (re.test(email)));
}

function archivarUsuario(email,pass){
    if (validateCuenta(email,pass)){
        let usuario = {
            id : email,
            password : pass,
        }
        localStorage.setItem(usuario.id,JSON.stringify(usuario));
    } 
}


let boton = document.getElementById("boton");
boton.addEventListener("click",iniciarSesion);

let botonReg = document.getElementById("botonRe");
botonReg.addEventListener("click",registroCuenta);

let botonBus = document.getElementById("botonBus");
botonBus.addEventListener("click",buscarProducto)

//** Comandos del LOGIN *//
let botonLog = document.getElementById("logear");
botonLog.addEventListener("click",registroCuenta);

let botonLog2 = document.getElementById("cerrarForm");
botonLog2.addEventListener("click",cerrarForm);

let botonLog3 = document.getElementById("enviar");
botonLog3.addEventListener("click",guardarUsuario);
/////////////////////////////////////////////////
//**Comandos del Registro *//
let botonRe = document.getElementById("tengoRe");
botonRe.addEventListener("click",iniciarSesion);

let botonRe2 = document.getElementById("cerrarFormRe");
botonRe2.addEventListener("click",cerrarFormRe);

let botonRe3 = document.getElementById("enviarRe");
botonRe3.addEventListener("click",guardarUsuario);