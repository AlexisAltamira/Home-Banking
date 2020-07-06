//Declaración de variables
var nombreUsuario = 'Alexis Altamira';
var saldoCuenta = 10000;
var limiteExtraccion = 3000;
var servicios = ['Agua', 'Telefono', 'Luz', 'Internet'];
var precios = [350, 425, 210, 570];
var cuentasAmigas = ['Cuenta amiga 1', 'Cuenta amiga 2'];
var numeroDeCuenta = [ 7654321, 1234567];
var pass = 1432;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
};

//Ejecucion de inicion de sesion
iniciarSesion();

//Funciones para sumar y restar dinero
function sumarDinero(eleccion) {
    saldoCuenta += parseInt(eleccion) ;   
};

function restarDinero(eleccion) {
    saldoCuenta -= parseInt(eleccion) ;
};
    //FUNCIONES DE VERIFICACION PARA LA EXTRACCION    
//Funcion que verifica si la extraccion es multiplo de 100
function verificarMultiplo100(eleccion) {
    if (eleccion % 100 === 0) {
        //Continua sin problemas
        return true;
    } else {
        alert('Solo puede extraer billetes de $100.');
        return false;
    };
};

//Funcion que verifica si el valor es null o NaN

function validarNullAndNaN(eleccion){
    if (eleccion === null || isNaN(eleccion))  {
        return false;
    } else {
        //Continua sin problemas
        return true;
    };
};

//Funcion que verifica si la extraccion no supera al saldo
function validarSaldoDisponible(eleccion) {
    if (eleccion <= saldoCuenta) {
        //Continua sin problemas
        return true;
    } 
    else {
        alert('Usted no dispone de esa suma en la cuenta.');
        return false;
    };
};

//Funcion que verifica si la extraccion no supera el limite
function validarLimiteExtraccion(eleccion) {
    if(eleccion <= limiteExtraccion){
        //Continua sin problemas
        return true;
    }
    else {
        alert('Supera el limite de extraccion.');
        return false;
    };
};

//Funcion que valida si el valor ingresado es positivo
function validarValorPositivo(eleccion) {
    if (eleccion >= 0) {
        //Continua sin problemas
        return true;
    }
    else {
        alert('Solo se permite valores positivos')
        return false;
    };
};


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var nuevoLimite = parseInt(prompt('Ingrese el nuevo limite de extraccion deseado:'));
    if (!isNaN(nuevoLimite) && nuevoLimite > 0) {
        limiteExtraccion = nuevoLimite;
        alert('Nuevo limite ingresado: $' + nuevoLimite);
    } else {
        alert('Valor no permitido');
        return;
    };
    actualizarLimiteEnPantalla();
};

function extraerDinero() {
    var eleccion = parseInt(prompt('Ingrese la cantidad de dinero que desea extraer:'));
    if (validarNullAndNaN(eleccion) === false){
        return;
    };
    if (validarValorPositivo(eleccion) === false ) {
        return;        
    };
    if (validarLimiteExtraccion(eleccion) === false){
        return;
    };
    if (validarSaldoDisponible(eleccion) === false) {
        return;   
    };
    if (verificarMultiplo100(eleccion) === false) { 
        return;  
    }
    else {
        var saldoAnterior = saldoCuenta;
        restarDinero(eleccion);
        alert('Saldo anterior: ' + saldoAnterior + '\nDinero extraido:' + eleccion + '\nSaldo actual: ' + saldoCuenta)
        actualizarSaldoEnPantalla();
    };
};

function depositarDinero() {
    var eleccion = parseInt(prompt('Ingrese la cantidad de dinero que desea depositar:'));
    if (validarNullAndNaN(eleccion) === false){
        return;
    };
    if (validarValorPositivo(eleccion) === false ) {
        return;
    }
    else{
    var saldoAnterior = saldoCuenta;
    sumarDinero(eleccion);
    alert('Saldo anterior: ' + saldoAnterior + '\nDinero depositado:' + eleccion + '\nSaldo actual: ' + saldoCuenta)
    actualizarSaldoEnPantalla();
    };
};
function pagarServicio() {
    var mensaje = '';
    for (let i = 0; i < servicios.length; i++) {
        var arreglo = i + 1;
        mensaje = mensaje + arreglo +
        ') Servicio: '+ servicios[i] + 
        '.  /  Monto: $' + precios[i] +
         '\n';          
    }
    var eleccion = parseInt(prompt('Ingrese el numero de servicio:\n'+ mensaje));

    switch (eleccion) {
        case 1:
            servicioAPagar(eleccion);
            break;
        case 2:
            servicioAPagar(eleccion);
            break;
        case 3:
            servicioAPagar(eleccion);
            break;
        case 4:
            servicioAPagar(eleccion);       
            break;
    
        default:
            break;
    }
};

function servicioAPagar(eleccion) {
    var arreglo = eleccion - 1;
    var precio = precios[arreglo];
    if (validarNullAndNaN(arreglo) === false){
        return;
    }
    if (validarValorPositivo(arreglo) === false){
        return;
    }
    if (precio > saldoCuenta){
        alert('Saldo insuficiente');
        return;
    }
    else{
    var saldoAnterior = saldoCuenta;
        //saldoCuenta -= precios[arreglo];
        restarDinero(precio);
        alert('Usted eligió: ' + servicios[arreglo] + '\nMonto: $' + precio + '\nSaldo anterior: $' + saldoAnterior + '\nSaldo actual: $' + saldoCuenta );
        actualizarSaldoEnPantalla();
    };    
};

function transferirDinero() {
    var eleccion = parseInt(prompt('Ingrese el monto que desee transferir: '));
    var numeroIngresado;
    if (validarNullAndNaN(eleccion) === false) {
        return;
    }
    if (validarSaldoDisponible(eleccion) === false) {
        return;
    }
    if (validarValorPositivo(eleccion) === false) {
        return;
    }
    else {
        numeroIngresado = parseInt(prompt('Ingrese el numero de cuenta al que desea transferir el dinero:'));
        var validacion = numeroDeCuenta.indexOf(numeroIngresado);
        if ( validacion === -1 || validacion === NaN) {
            alert('Solo se puede transferir dinero a cuentas amigas.');
            return;
        }
        else{
            restarDinero(eleccion);
            alert('Se han transferido: $' + eleccion + '\nCuenta destino: ' + numeroIngresado);
            actualizarSaldoEnPantalla();
        };
    };
};

function iniciarSesion() {
    var codigo = parseInt(prompt('Ingrese el codigo de su cuenta: '));
    if(codigo === pass ){
        alert('Bienvenido/a ' + nombreUsuario + ' ya puedes comenzar a realizar operaciones.');
    }
    else{
        alert('Codigo incorrecto. Por motivos de seguridad, su dinero ha sido retenido.');
        restarDinero(saldoCuenta);
    };
};

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
};

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
};

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
};

