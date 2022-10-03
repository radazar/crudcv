//array
var arrCliente=[];
var idBoton=0;
var cont=0;
var cont2=0;
var act=0;


//abrir ventana de crear
function abrirmodalCrear(){
   var modal=document.getElementById('modal');
    modal.classList.toggle("is-active");
}
//abrir ventana de editar
function abrirmodaleditar(){
   var modal2=document.getElementById('modaledit');
    modal2.classList.toggle("is-active");
    if(cont<1){
        document.addEventListener('click',(e)=>{
        e.preventDefault();
        idBoton=e.target.parentNode.id;
        cont=1
        console.log(idBoton);
        editarDatos(parseInt(idBoton));
       ;});
    }
}
//limpiar el formulario al enviar
function limpiar(){
    document.getElementById('crearcliente').reset();
}
//tomar datos del formulario y crear el objeto, para añadirlo al array
function tomarDatos(){
    var pos=arrCliente.length;
    
    var idF=pos;
    var nombreF=document.getElementById('nombre').value;
    var apellidoF=document.getElementById('apellido').value;
    var ciudadF=document.getElementById('ciudad').value;
    var correoF=document.getElementById('correo').value;
    var telefonoF=document.getElementById('telefono').value;
    
    var objCiente= {id:idF,nombre:nombreF,apellido:apellidoF,ciudad:ciudadF,correo:correoF,telefono:telefonoF};
    arrCliente.push(objCiente);
    //pos++;
    guardarArray();
    
}

//gauradar en local storage
function guardarArray(){
    
    localStorage.setItem('tclientes',JSON.stringify(arrCliente));
    verDatos();
    limpiar()
}
//imprimo datos en html
function verDatos(){
    document.getElementById('listac').innerHTML = '';
    arrCliente=JSON.parse(localStorage.getItem('tclientes'));
    if(arrCliente===null){
        arrCliente=[];
    }else{
    arrCliente.forEach(r=>{
            document.getElementById('listac').innerHTML += '<tr id="'+r.id+'"><td>'+r.id+'</td><td>'+r.nombre+'</td><td>'+r.apellido+'</td><td>'+r.ciudad+'</td><td>'+r.correo+'</td><td>'+r.telefono+'</td><td><button id="'+r.id+'" onclick="abrirmodaleditar()" class="button is-warning"><i id="icono" class="fa-solid fa-pen-to-square"></i></button><button  id="'+r.id+'" onclick="eliminarDatos()" class="button is-danger"><i id="icono" class="fa-solid fa-trash-can"></i></button></td></tr>'; 
        });
    }
}

//editar datos de tabla
function editarDatos(boton){
    //document.getElementById('editarclientes').innerHTML ='';
    for (var i=0;i<arrCliente.length;i++){
        console.log(i);
        if(arrCliente[i].id==boton){
            document.getElementById('editarclientes').innerHTML =+'<div class="field"> <label class="label">Nombre</label> <div class="control"> <input id="error" class="input" type="text" value="'+arrCliente[i].nombre+'"> </div> </div><div class="field"> <label class="label">Nombre</label> <div class="control"> <input id="nombre1" class="input" type="text" value="'+arrCliente[i].nombre+'"> </div> </div> <div class="field"> <label class="label">Apellido</label> <div class="control"> <input id="apellido1" class="input" type="text" value="'+arrCliente[i].apellido+'"> </div> </div> <div class="field"> <label class="label">Ciudad</label> <div class="control"> <input id="ciudad1" class="input" type="text" value="'+arrCliente[i].ciudad+'"> </div> </div> <div class="field"> <label class="label">Correo</label> <div class="control has-icons-left has-icons-right"> <input id="correo1" class="input" type="email" value="'+arrCliente[i].correo+'"> <span class="icon is-small is-left"> <i class="fas fa-envelope"></i> </span> </div> </div> <div class="field"> <label class="label">Telefono</label> <div class="control has-icons-left has-icons-right"> <input id="telefono1" class="input" type="cel" value="'+arrCliente[i].telefono+'"> <span class="icon is-small is-left"> <i class="fa-solid fa-phone"></i> </span> </div> </div>';
            act=i;
        }
    }
}

function actualizar(){
    arrCliente=JSON.parse(localStorage.getItem('tclientes'));
    arrCliente[act].id=arrCliente[act].id;
    arrCliente[act].nombre=document.getElementById('nombre1').value;
    arrCliente[act].apellido=document.getElementById('apellido1').value;
    arrCliente[act].ciudad=document.getElementById('ciudad1').value;
    arrCliente[act].correo=document.getElementById('correo1').value;
    arrCliente[act].telefono=document.getElementById('telefono1').value;
    localStorage.setItem('tclientes',JSON.stringify(arrCliente));
    abrirmodaleditar();
    limpiar();
    verDatos();
}

function eliminarDatos(){
    if(cont2<1){
        document.addEventListener('click',(e)=>{
        e.preventDefault();
        idBoton=e.target.parentNode.id;
        cont2=1
        console.log(idBoton);
        deleteEnd(parseInt(idBoton));
       ;});
    }
    
}
function deleteEnd(boton2){
     arrCliente=JSON.parse(localStorage.getItem('tclientes'));
    for (var i=0;i<arrCliente.length;i++){
     if(arrCliente[i].id==boton2){
         arrCliente.splice(i,1);
     }
    }
    localStorage.setItem('tclientes',JSON.stringify(arrCliente));
    verDatos();
}







