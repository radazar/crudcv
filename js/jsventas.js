//array
var arrVenta=[];
var idBoton=0;
var cont=0;
var cont2=0;
var act=0;


//abrir ventana de crear
function abrirmodalCrear(){
   var modal=document.getElementById('modal');
    modal.classList.toggle("is-active");
}

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

function limpiar(){
    document.getElementById('agregarfc').reset();
}

function tomarDatos(){
    var pos=arrVenta.length;
    
    var idF=pos;
    var fechaF=document.getElementById('fecha').value;
    var clienteF=document.getElementById('cliente').value;
    var productoF=document.getElementById('producto').value;
    var vuF=parseInt(document.getElementById('vu').value);
    var cantidadF=parseInt(document.getElementById('cantidad').value);
    
    var st=vuF*cantidadF;
    var neto=(st*0.19)+st;
    
    
    var objVenta= {id:idF,fecha:fechaF,cliente:clienteF,producto:productoF,vu:vuF,cantidad:cantidadF,st:st,neto:neto};
    arrVenta.push(objVenta);
    console.log(objVenta);
    guardarArray();
    
}
function guardarArray(){
    
    localStorage.setItem('tventas',JSON.stringify(arrVenta));
    verDatos();
    limpiar();
}

function verDatos(){
    document.getElementById('listav').innerHTML = '';
    arrVenta=JSON.parse(localStorage.getItem('tventas'));
    if(arrVenta===null){
        arrVenta=[];
    }else{
    arrVenta.forEach(r=>{
            document.getElementById('listav').innerHTML += '<tr id="'+r.id+'"><td>'+r.id+'</td><td>'+r.fecha+'</td><td>'+r.cliente+'</td><td>'+r.producto+'</td><td>'+r.vu+'</td><td>'+r.cantidad+'</td><td>'+r.st+'</td><td>'+r.neto+'</td><td><button id="'+r.id+'" onclick="abrirmodaleditar()" class="button is-warning"><i id="icono" class="fa-solid fa-pen-to-square"></i></button><button  id="'+r.id+'" onclick="eliminarDatos()" class="button is-danger"><i id="icono" class="fa-solid fa-trash-can"></i></button></td></tr>'; 
        });
    }
}


function editarDatos(boton){
    //document.getElementById('editarclientes').innerHTML ='';
    for (var i=0;i<arrVenta.length;i++){
        //console.log(i);
        if(arrVenta[i].id==boton){
            document.getElementById('editarfc').innerHTML =+'<div class="field"> <label class="label">Fecha</label> <div class="control"> <input id="fecha1"  class="input" type="date" value="'+arrVenta[i].fecha+'"> </div> </div><div class="field"> <label class="label">Fecha</label> <div class="control"> <input id="fecha1"  class="input" type="date" value="'+arrVenta[i].fecha+'"> </div> </div> <div class="field"> <label class="label">Cliente</label> <div class="control"> <input id="cliente1" class="input" type="text" value="'+arrVenta[i].cliente+'"> </div> </div> <div class="field"> <label class="label">Producto</label> <div class="control"> <input id="producto1" class="input" type="text" value="'+arrVenta[i].producto+'"> </div> </div> <div class="field"> <label class="label">Valor Unitario</label> <div class="control"> <input id="vu1" class="input" type="text" value="'+arrVenta[i].vu+'"> </div> </div> <div class="field"> <label class="label">Cantidad</label> <div class="control"> <input id="cantidad1" class="input" type="text" value="'+arrVenta[i].cantidad+'"> </div> </div>';
            act=i;
        }
    }
}

function actualizar(){
    arrCliente=JSON.parse(localStorage.getItem('tventas'));
    arrCliente[act].id=arrCliente[act].id;
    arrVenta[act].fecha=document.getElementById('fecha1').value;
    arrVenta[act].cliente=document.getElementById('cliente1').value;
    arrVenta[act].producto=document.getElementById('producto1').value;
    arrVenta[act].vu=parseInt(document.getElementById('vu1').value);
    arrVenta[act].cantidad=parseInt(document.getElementById('cantidad1').value);
    
    arrVenta[act].st=arrVenta[act].vu*arrVenta[act].cantidad;
    arrVenta[act].neto=(arrVenta[act].st*0.19)+arrVenta[act].st;
    
    
    localStorage.setItem('tventas',JSON.stringify(arrVenta));
    abrirmodaleditar();
    limpiar();
    verDatos();
}

function eliminarDatos(){
    if(cont2<1){
        document.addEventListener('click',(e)=>{
        e.preventDefault();
        idBoton=e.target.parentNode.id;
        cont2=1;
        console.log(idBoton);
        deleteEnd(parseInt(idBoton));
       ;});
    }
    
}
function deleteEnd(boton2){
     arrCliente=JSON.parse(localStorage.getItem('tventas'));
    for (var i=0;i<arrVenta.length;i++){
     if(arrVenta[i].id==boton2){
         arrVenta.splice(i,1);
     }
    }
    localStorage.setItem('tventas',JSON.stringify(arrVenta));
    verDatos();
}






