  // =================================================================
        // VARIABLE GLOBAL PARA EL EJEMPLO DE window.open/close
        // =================================================================
        let ventanaAbierta = null; 
        const estadoElement = document.getElementById("estado");

        // Inicializar la URL
        document.getElementById("url-actual").textContent = window.location.href;

        // =================================================================
        // 1. Objeto location (URL)
        // =================================================================
        function mostrarURL() {
            const urlCompleta = window.location.href;
            const pathname = window.location.pathname;
            const queryString = window.location.search;
            
            console.log("URL Completa:", urlCompleta);
            console.log("Ruta (Pathname):", pathname);
            console.log("Query String:", queryString);

            alert("Revisa la consola para ver las partes de la URL.");
        }

        function redirigirBOM() {
            // Nota: Esta acción recargará la página con la nueva URL
            if (window.confirm("¿Seguro que quieres ir a Google?")) {
                window.location.href = "https://www.google.com";
            }
        }

        function recargarPagina() {
            window.location.reload();
        }


        // =================================================================
        // 2. Ventanas de Diálogo
        // =================================================================
        function usarAlert() {
            window.alert("¡Hola! Esto es un mensaje de alerta del BOM.");
            document.getElementById("dialogo-resultado").textContent = "Alert: Se hizo clic en Aceptar.";
        }

        function usarConfirm() {
            const resultado = window.confirm("¿Deseas continuar con esta acción?");
            if (resultado) {
                document.getElementById("dialogo-resultado").textContent = "Confirm: El usuario eligió ACEPTAR (True).";
            } else {
                document.getElementById("dialogo-resultado").textContent = "Confirm: El usuario eligió CANCELAR (False).";
            }
        }

        function usarPrompt() {
            const nombre = window.prompt("Por favor, ingresa tu nombre:", "Anónimo");
            if (nombre) {
                document.getElementById("dialogo-resultado").textContent = `Prompt: El usuario ingresó "${nombre}".`;
            } else {
                document.getElementById("dialogo-resultado").textContent = "Prompt: El usuario canceló o no ingresó nada.";
            }
        }


        // =================================================================
        // 3. Objeto history
        // =================================================================
        function volverAtras() {
            // Vuelve a la página anterior en el historial del navegador
            window.history.back();
        }

        function avanzar() {
            // Avanza a la siguiente página en el historial
            window.history.forward();
        }


        // =================================================================
        // 4. Objeto window (Abrir/Cerrar)
        // =================================================================
        function abrirNuevaVentana() {
            if (ventanaAbierta && !ventanaAbierta.closed) {
                ventanaAbierta.focus();
                estadoElement.textContent = "La ventana ya está abierta.";
                return;
            }
            
            // Abre una nueva pestaña. La clave es guardar la referencia.
            ventanaAbierta = window.open('about:blank', '_blank', 'width=500,height=300');
            
            if (ventanaAbierta) {
                estadoElement.textContent = "Pestaña abierta. Intenta cerrarla ahora.";
                // Opcional: Cargar la URL después para mayor compatibilidad
                ventanaAbierta.location.href = "https://www.wikipedia.org"; 
            } else {
                estadoElement.textContent = "Error: El navegador bloqueó el popup. (Verificar la configuración)";
            }
        }

        function cerrarVentanaAbierta() {
            if (ventanaAbierta && !ventanaAbierta.closed) {
                // Solo funciona porque la abrimos con window.open()
                ventanaAbierta.close();
                
                if (ventanaAbierta.closed) {
                    ventanaAbierta = null; 
                    estadoElement.textContent = "Pestaña cerrada exitosamente (Si funcionó).";
                } else {
                     estadoElement.textContent = "El navegador BLOQUEÓ el close(). Esto es una restricción de seguridad.";
                }
            } else {
                estadoElement.textContent = "Error: No hay pestaña abierta para cerrar.";
            }
        }
        
