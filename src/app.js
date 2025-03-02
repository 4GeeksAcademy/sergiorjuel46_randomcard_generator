import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
//write your code here
function generarCarta() {
  
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const simbolos = ["♠", "♥", "♦", "♣"];

  let valorAleatorio = valores[Math.floor(Math.random() * valores.length)];
  let simboloAleatorio = simbolos[Math.floor(Math.random() * simbolos.length)];

  let carta = document.createElement("div");
  carta.classList.add("carta");

  let esquinaTop = document.createElement("div");
  esquinaTop.classList.add("esquina", "top-left");
  esquinaTop.innerText = simboloAleatorio;

  let esquinaAbajo = document.createElement("div")
  esquinaAbajo.classList.add("esquina", "bottom-right")
  esquinaAbajo.innerText = simboloAleatorio;

  let centro = document.createElement("div");
    centro.classList.add("centro");
    centro.innerText = valorAleatorio;
  
  if (simboloAleatorio == "♥" || simboloAleatorio == "♦") {
    esquinaTop.classList.add("rojo");
    esquinaAbajo.classList.add("rojo");
    centro.classList.add("rojo");
  }

    carta.appendChild(esquinaTop);
    carta.appendChild(centro);
    carta.appendChild(esquinaAbajo);

    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; 
    contenedor.appendChild(carta);

}
generarCarta();

