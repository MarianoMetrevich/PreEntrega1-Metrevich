function Inicio() {
  let saludoIngreso = prompt("Bienvenido por favor ingrese su nombre");
  if (saludoIngreso == "") {
    alert("Campo sin rellenar");
  } else if (saludoIngreso != "") {
    alert("Bienvenido/a " + saludoIngreso);
  }
  if (saludoIngreso != "") {
    let numeroIngresado = parseInt(
      prompt("Ingrese un num para mostrar la tabla de multiplicar")
    );
    for (let i = 1; i <= 10; i++) {
      let resultado = numeroIngresado * i;
      console.log(numeroIngresado + "X" + i + "=" + resultado);

      alert(numeroIngresado + "X" + i + "=" + resultado);
    }
    console.log(saludoIngreso);
  }
}
Inicio();
