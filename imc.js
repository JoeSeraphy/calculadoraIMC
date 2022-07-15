function calculate() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("alt").value / 100;
  const resultado = document.getElementById("resultado");

  const imc = (peso / altura ** 2).toFixed(2);

  let classification = "";

  if (imc < 18.5) {
    resultado.style.backgroundColor = "#FAE555";
    resultado.style.color = "red";
    resultado.style.borderRadius = "5px";
    resultado.style.padding = "4px";
    classification = "Magreza";
  } else if (imc < 24.9) {
    resultado.style.backgroundColor = "#79FA5F";
    resultado.style.borderRadius = "5px";
    resultado.style.padding = "4px";
    classification = "Normal";
  } else if (imc < 29.9) {
    resultado.style.backgroundColor = "#FAE555";
    resultado.style.color = "red";
    resultado.style.borderRadius = "5px";
    resultado.style.padding = "4px";
    classification = "Sobrepeso";
  } else if (imc < 39.9) {
    resultado.style.backgroundColor = "#FA4424";
    resultado.style.borderRadius = "5px";
    resultado.style.padding = "4px";
    classification = "Obesidade";
  } else if (imc > 39.9) {
    resultado.style.backgroundColor = "#B53119";
    resultado.style.borderRadius = "5px";
    resultado.style.padding = "4px";
    classification = "Obesidade mórbida";
  }
  resultado.innerText = `IMC: ${imc} (${classification})`;
}
