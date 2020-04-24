var miMenuDesplegable, miMenuDesplegable2;
function mostrar(){
	//body..
	document.getElementById('miMenu').classList.toggle("mostrar");
	document.getElementById('miMenu').classList.remove("mostrar");
}
window.onclick=function(e){
	if(!e.target.matches(".boton_desplegar")){
		miMenuDesplegable=document.getElementById('miMenu');
		if (miMenuDesplegable.classList.contains('mostrar')) {
			miMenuDesplegable.classList.remove('mostrar');
		}
	}
}

function mostrar2(){
	//body...
	document.getElementById('miMenu2').classList.toggle("mostrar");
	document.getElementById('miMenu').classList.remove("mostrar");
}
window.onclick=function(e){
	if(!e.target.matches(".boton_desplegar")){
		miMenuDesplegable2=document.getElementById('miMenu2');
		if(miMenuDesplegable2.classList.contains('mostrar')){
			miMenuDesplegable2.classList.remove("mostrar");
		}
	}
}




var acc = document.getElementsByClassName('botonTituloSeccion');
var i;
for(i =0; i<acc.length; i++){
	acc[i].addEventListener("click", function(){
		this.classList.toggle("active");
		var panel=this.nextElementSibling;
		if(panel.style.display==="block"){
			panel.style.display="none";
		}else{
			panel.style.display="block";
		}
		});
	}










var inputs=document.getElementByClassName('formulario_input'); //aqui esta declarando una variable y tambien nos permite trabajar con los elementos//
for(var i=0; i< inputs.length; i++){ //aqui esta haciendo lo que pide//
	inputs[i].addEventListener('keyup',function(){
    if (this.value.length>=1) { //aqui le esta pidiendo que regrese algo//
    	this.nextElementSibling.classlist.add('fijar'); //aqui hace que vea el dato que es//
    }else{
    	this.nextElementSibling.classlist.remove('fijar');

    }
	});
}


	