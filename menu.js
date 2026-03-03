const modal = document.getElementById("modal");

function abrirModal(nombre, descripcion, precio, imagen){
modal.style.display = "flex";

document.getElementById("modal-titulo").innerText = nombre;
document.getElementById("modal-desc").innerText = descripcion;
document.getElementById("modal-precio").innerText = precio;
document.getElementById("modal-img").src = imagen;
}

function cerrarModal(){
modal.style.display = "none";
}

window.onclick = function(e){
if(e.target == modal){
modal.style.display = "none";
}
}