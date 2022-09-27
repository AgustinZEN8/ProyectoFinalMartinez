
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

async function cargarProductos(){
    await fetch ('/Raiz/Assets/productos.JSON')
    .then((response) => response.json())
    .then((data) => {
        productosArr = data.productos;
        mapearProductos(productosArr);
        }
    );
}

let mapearProductos = (arrayProductos) => {
    const contenedorCartas = document.createElement ("div");
    contenedorCartas.setAttribute("id","container");
    contenedorCartas.setAttribute("class","contenedor card-group row m-3 cards");

    for( let i = 0; i < arrayProductos.length; i++){
        let producto = arrayProductos[i];

        const cartas = document.createElement("div");
        cartas.setAttribute("class","cartas");

        const cartasImg = document.createElement("div");
        cartasImg.setAttribute("class","cartasImg");

        const imgProducto = document.createElement("img");
        imgProducto.setAttribute('src', producto.Imagen);
        imgProducto.setAttribute('class', "imagenPro card-img-top");

        const cartasBody = document.createElement("div");
        cartasBody.setAttribute("class","cartasBody")

        const listaDatos = document.createElement("ul");
        listaDatos.setAttribute("class","listaDatos");

        const nombreProducto = document.createElement("h4");
        nombreProducto.setAttribute("class","nombreCard");
        nombreProducto.innerText = producto.Nombre;

        const precioProducto = document.createElement("h2");
        precioProducto.setAttribute("class","precioCard");
        precioProducto.innerText = producto.Precio;

        const stockProducto = document.createElement("h5");
        stockProducto.setAttribute("class","textoCard");
        stockProducto.innerText = ("Stock: ")+producto.Stock;
        
        document.getElementById("opac5").appendChild(contenedorCartas);
        contenedorCartas.appendChild(cartas);
        cartas.appendChild(cartasImg);
            cartasImg.appendChild(imgProducto);
        cartas.appendChild(cartasBody);    
            cartasBody.appendChild(nombreProducto);
            cartasBody.appendChild(precioProducto);
            cartasBody.appendChild(stockProducto);
    }
};


const buscarProducto = (e) => {
    e.preventDefault();
    let containerProductos = document.getElementById("container");
    containerProductos && containerProductos.remove();
  
    e.target.value.length > 0
      ? mapearProductos(
          productosArr.filter((producto) =>
            producto.Nombre.includes(e.target.value)
          )
        )
      : mapearProductos(productosArr)
  };


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

let inputBusqueda = document.getElementById("search");
inputBusqueda.addEventListener('input', buscarProducto)

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