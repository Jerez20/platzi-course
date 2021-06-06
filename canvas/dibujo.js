var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var colorcito = "red";

for(l = 0; l<lineas; l++){
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea(colorcito, 0, yi, xf, 300);
    console.log("Linea "+l);
}
dibujarLinea(colorcito, 1, 1, 1, 300);
dibujarLinea(colorcito, 1, 299, 299, 299);

colorcito = "green"
for(l = 0; l<lineas; l++){
    yi = 10 * (l + 1);
    xf = 10 * l;
    dibujarLinea(colorcito, 300, yi, xf, 0);
    console.log("Linea "+l);
}
dibujarLinea(colorcito, 299, 299, 299, 1);
dibujarLinea(colorcito, 299, 1, 1, 1);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
}