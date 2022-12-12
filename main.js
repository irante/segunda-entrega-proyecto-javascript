
class Productos {
    constructor (nombre, descripcion, precio, cantidad){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.cantidad = cantidad;

    }
    
}


const producto1 = new Productos("PC Bangho Gm220t", " 16 gb de ram - ssd 500gb",74999);
const producto2 = new Productos("PC Bangho Cambridge A220", " 16 gb de ram - ssd 250gb",125999);
const producto3 = new Productos("Monitor Gigabyte G24f", " 1080p 144hz", 84999);






const arrayProductosconfirmados=[];                 //array vacio sobre el que se iran pusheando los productos (objetos) confirmados en la compra.



let opcion =0;
let agregarProducto = 0;
let cantidad = 0;
let confirmar = 0;
let totalCarrito = 0;



function sumarCarrito() {

    arrayProductosconfirmados.forEach((elemento)=> {                                //foreach que suma los elementos confirmados del array
        totalCarrito = totalCarrito + (elemento.precio * elemento.cantidad);

    })

}         

 function elegirOpcion (){
    opcion = parseInt(prompt ("Valor del Carrito: $" + totalCarrito + "\n" + "Articulos Confirmados: " + arrayProductosconfirmados.length + "\n" +  "Agregar al carrito: presione el numero para seleccionar el producto\n \n" + "1- " + producto1.nombre + "\n" + "2- " + producto2.nombre + "\n" + "3- " + producto3.nombre + "\n" + "4 - para salir"));

 }





elegirOpcion();
 while (opcion != 4){
     switch (opcion) {
         case 1:
             cantidad = parseInt(prompt("El valor de " + producto1.nombre + " es de $ " + producto1.precio +  "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
             confirmar = prompt ("El valor total de este item es: $ " + producto1.precio * cantidad + "\n" + "Ingrese si para confirmar, no para salir");

             if(confirmar =="si"){
                producto1.cantidad = cantidad;                                  // le asigna la cantidad a la propiedad cantidad del objeto
                 arrayProductosconfirmados.push(producto1);                     // añade el objeto confirmado ( producto)  al array
                 totalCarrito = 0;                                              // inicializa la variable para que vuelva a sumar forEach
                 sumarCarrito();
                                     
                
             }
                
             break;

         case 2:
             cantidad = parseInt(prompt("El valor de " + producto2.nombre + " es de $ " + producto2.precio +  "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
             confirmar = prompt ("El valor total de este item es: $ " + producto2.precio * cantidad + "\n" + "Ingrese si para confirmar, no para salir");

             if(confirmar =="si"){
                producto2.cantidad = cantidad;
                 arrayProductosconfirmados.push(producto2);
                 totalCarrito = 0;                                              // inicializa la variable para que vuelva a sumar foreach
                 sumarCarrito();
                                     
                
             }
                
             break;   

          case 3:
             cantidad = parseInt(prompt("El valor de " + producto3.nombre + " es de $ " + producto3.precio +  "\n" + "Ingrese la cantidad de unidades que desea adquirir"));
           
             confirmar = prompt ("El valor total de este item es: $ " + producto3.precio * cantidad + "\n" + "Ingrese si para confirmar, no para salir");

             if(confirmar =="si"){
                producto3.cantidad = cantidad;
                 arrayProductosconfirmados.push(producto3);
                 totalCarrito = 0;                                              // inicializa la variable para que vuelva a sumar foreach
                 sumarCarrito();
                                     
                
             }
                
             break;        



        default:
                alert("Opcion incorrecta !");
                break;


        }
 




        if(arrayProductosconfirmados.length > 0){                                                           // si hay compras confirmadas
                 agregarProducto = prompt ("Desea Agregar otro producto al Carrito? si / no");         // pregunta si quiere realizar otra compra
                 if (agregarProducto =="no") {
                    
                     alert ("El valor Total de su compra es de $ " + totalCarrito);                   // si no quiere seguir comprando termina el bucle
                    break;
                 }else{
                      
                     elegirOpcion();
                 }
               
        }else {  
                  
                 elegirOpcion();                                                                    // si hay cero compras confirmadas.
        }   
               
               
            
           
     }           


    


   
       
       
       
        




    

   




