let jugar = document.getElementById("btnComenzar");
function comenzar() {
  let opciones = document.getElementById("btnOpciones");
  opciones.className = "";
  let piedra = document.getElementById("opcionPiedra"),
    papel = document.getElementById("opcionPapel"),
    tijera = document.getElementById("opcionTijera"),
    opcionJugador = document.getElementById("imgOpcionJugador"),
    opcionPc = document.getElementById("imgOpcionPc");
  let opcionPcRandom = parseInt(Math.floor(Math.random() * (3 - 1 + 1) + 1));
  piedra.addEventListener("click", () => {
    cambiarImgPc(opcionPcRandom, opcionPc);
    opcionJugador.src = "./src/img/piedra.png";
    resultado(parseInt(piedra.value), opcionPcRandom);
  });
  papel.addEventListener("click", () => {
    cambiarImgPc(opcionPcRandom, opcionPc);
    opcionJugador.src = "./src/img/papel.png";
    resultado(parseInt(papel.value), opcionPcRandom);
  });
  tijera.addEventListener("click", () => {
    cambiarImgPc(opcionPcRandom, opcionPc);
    opcionJugador.src = "./src/img/tijera.png";
    resultado(parseInt(tijera.value), opcionPcRandom);
  });
  jugar.innerHTML = "Jugar De nuevo";
  jugar.addEventListener("click", jugarDeNuevo);
}
const cambiarImgPc = (opcion, objetoOpcionPc) => {
  if (opcion === 1) {
    return (objetoOpcionPc.src = "./src/img/piedra.png");
  } else if (opcion === 2) {
    return (objetoOpcionPc.src = "./src/img/papel.png");
  } else if (opcion === 3) {
    return (objetoOpcionPc.src = "./src/img/tijera.png");
  }
};

const resultado = (opcion1, opcion2) => {
  let alert = document.getElementById("alertResultado");
  if (opcion1 === 1) {
    if (opcion2 === 2) {
      alert.className = "alert alert-danger";
      alert.innerHTML = "PERDISTE";
    } else if (opcion2 === 3) {
      alert.className = "alert alert-success";
      alert.innerHTML = "GANASTE";
    } else {
      alert.className = "alert alert-warning";
      alert.innerHTML = "EMPATE";
    }
  } else if (opcion1 === 2) {
    if (opcion2 === 1) {
      alert.className = "alert alert-success";
      alert.innerHTML = "GANASTE";
    } else if (opcion2 === 3) {
      alert.className = "alert alert-danger";
      alert.innerHTML = "PERDISTE";
    } else {
      alert.className = "alert alert-warning";
      alert.innerHTML = "EMPATE";
    }
  } else if (opcion1 === 3) {
    if (opcion2 === 1) {
      alert.className = "alert alert-danger";
      alert.innerHTML = "PERDISTE";
    } else if (opcion2 === 2) {
      alert.className = "alert alert-success";
      alert.innerHTML = "GANASTE";
    } else {
      alert.className = "alert alert-warning";
      alert.innerHTML = "EMPATE";
    }
  }
};
function jugarDeNuevo() {
  location.reload();
}
