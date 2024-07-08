

class calculadora{
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2;  
    }

    sumar(n1,n2){
        n1=document.getElementById("inputs").value;
        n2=document.getElementById("inputs2").value;

        var suma=parseFloat(n1)+parseFloat(n2);
        return suma;
    }

    resta(n1,n2){
        n1=document.getElementById("inputs").value;
        n2= document.getElementById("inputs2").value;

        var resta=parseFloat(n1)-parseFloat(n2);
        return resta;
    }
    multiplicacion(n1,n2){
        n1=document.getElementById("input").value;
        n2= document.getElementById("inputs2").value;

        var multiplicacion=parseFloat(n1)*parseFloat(n2);
        return multiplicacion;
    }

    division(n1,n2){
        n1=document.getElementById("input").value;
        n2= document.getElementById("inputs2").value;
        if(n1!==0){
            var division= parseFloat(n1)/parseFloat(n2);
        }else{
            alert("no se puede dividir el resto cero");
        }
        return division;
    }


    raizcuadrada(n1){
        n1=document.getElementById("input").value;
        var raiz=Math.sqrt(parseFloat(n1));

        return raiz;
    }


    potencia(n1,n2){
        n1=document.getElementById("input").value;
        n2= document.getElementById("inputs2").value;

        var potencia=Math.pow(parseFloat(n1),parseFloat(n2));

        return potencia;

       
    }

    numerosaleatorios(n1,n2){
        n1=document.getElementById("input").value;

        var numaleato=Math.random(parseFloat(n1));
        
        return numaleato;

       
    }


    redondear(n1){
        n1=document.getElementById("input").value;

        var redondear =Math.round(parseFloat(n1));
        
        return redondear;

       
    }

}


var calcu = new calculadora();

sumar.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.sumar());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

resta.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.resta());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

multiplicacion.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.multiplicacion());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

divicion.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.division());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

raizcuadrada.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.raizcuadrada());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

potencia.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.potencia());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

numerosaleatorios.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.numerosaleatorios());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

redondear.addEventListener("click",function(){

    let nd = document.createElement("ul");
    let dato = document.createTextNode(calcu.redondear());

    solucionFinal.appendChild(nd);
    nd.appendChild(dato);
});

solucionFinal=document.getElementById("answers");


var sumar = document.getElementById("sumar");
var resta = document.getElementById("resta");
var multiplicacion = document.getElementById("multiplicacion");
var divicion = document.getElementById("divicion");
var raiz = document.getElementById("raiz");
var potencia = document.getElementById("potencia");
var redondear = document.getElementById("redondear");
var numerosaleatorios = document.getElementById("numeros aleatorios");

