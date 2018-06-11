Hola buenos dias. A continuacion se da una breve explicacion de lo que se hizo en esta aplicacion y lo que no se alcanzo a cubrir
	
	* Se crearon componentes funcionales.
	* Se creo un reducer 'product'
	* Se lograron conectar componentes usando la libreria 'connect' de 'react-redux'
	* Se guarda el estado usando la clase 'createStore' de 'redux' con un estado inicial (initialState) dummy
	* Uso de acciones dispatch para guardar en el 'state'
	* Se pasa el state desde el archivo App.js hasta el nivel mas bajo de la estructura de la aplicacion, en el archivo Products.js
	* Se uso la clase 'Provider' para mantener el 'store' a lo largo de toda la aplicacion.
		* El store dummy se encuentra en la carpeta 'almacena'
	
	* El boton 'save' agrega una accion al state.
	* Se conecto la aplicacion con un el plugin React Dev Tool para visualizar los cambios en el state
	
	* A continuacion se muestra la estructura jerarquica de los componentes
	-----------------------------------------
	App.js
		MainInvoice.js
			ProducListContainer.js
				Products.js
				

	Lo que no alcanzo a cubrir
		* Crear test para el reducer
		* Darle interactividad a la pantalla
		* Boton delete (funcionalidad).
		* No hay actualizacion del subtotal, tax y total
		

	Ademas, de todo esto, hubo varias buenas desveladas durante una semana, para aprender estas tecnologia React/Redux/ES6, que para mi ver esta muy interesante.. :).
	
	P.d.
		Cualquier comentario hagamelo saber.
	
	Gracias,
	Saludos
