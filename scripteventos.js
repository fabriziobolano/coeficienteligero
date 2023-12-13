let myVar = setInterval(myTimer, 100);
var buscar = 1;
function myTimer() 
	  {
  
		  if(buscar==1){
			  var elements = document.getElementsByClassName("btn btn-primary btn-md");
			  var objcancelar = document.getElementsByClassName("btn btn-secondary btn-wizard-nav-cancel");
			  var objsiguiente = document.getElementsByClassName("btn btn-primary btn-wizard-nav-next");
			  var objanterior = document.getElementsByClassName("btn btn-primary btn-wizard-nav-previous");

			  let resulbotoncancelar;
			  let resulbotonsiguiente;
			  let resulbotonanterior;
			  
			  resulbotoncancelar = Object.entries(objcancelar).length === 0;
			  if (resulbotoncancelar === false) {
			     objcancelar[0].innerHTML="Cancelar";
				}
			  resulbotonsiguiente = Object.entries(objsiguiente).length === 0;
			  if (resulbotonsiguiente === false) {
			     objsiguiente[0].innerHTML="Siguiente";
				}				
			  resulbotonanterior = Object.entries(objanterior).length === 0;
			  if (resulbotonanterior === false) {
			     objanterior[0].innerHTML="Anterior";
				}				
			  			  

			  var myFunction = function() {
				
				const textofin = document.querySelector('#titulofinal');
				const textofingracias = document.querySelector('#titulogracias');
				textofin.textContent ="Procesando la información...";
				
				let myVar2 = setInterval(myTimer2, 6000);
				function myTimer2() 
				{
				
					textofin.textContent ="Su Coeficiente Analítico Alianza CAOBA fue generado, en minutos lo recibirá en su correo electrónico.";
					textofingracias.textContent ="Gracias por usar nuestro modelo para evaluar capacidades analíticas en su organización.";
					elements[0].innerHTML="Encuesta Enviada";
					elements[0].style.visibility = 'hidden';

				}
				  
			  };

			  for (var i = 0; i < elements.length; i++) {                
				  buscar=0;
				  elements[i].addEventListener('click', myFunction, false);
			  }
		  }
		  
	  }