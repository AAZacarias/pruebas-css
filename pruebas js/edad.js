
        //declaro variable a ingresar por el usuario
        var edad = prompt("introduce tu edad");

        //con esta variable llamo a la funcion 
        var mayor_o_menor = mayorMenor(edad);

        //me muestra la respuesta en pantalla
        alert("Sos " + mayor_o_menor);
        
        //funcion que verifica si es mayor o no de 18
        function mayorMenor(edad) {
            if (edad >= 18) {
                return "mayor, puedes seguir viendo tranquilamente";
            }
            else {
                return "menor, vas a poder ver pero con control parental";
            }
        }
  