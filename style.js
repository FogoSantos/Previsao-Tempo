let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarNaTela(dados){
  console.log(dados)

  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
  document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
  document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon +".png"
  document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"

}



async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric',
  ).then((resposta) => resposta.json());

  // AWAIT = ESPERE
  // FETCH = Ferramenta do JS para acessar Servidores
  // THEN = Então

  colocarNaTela(dados);
}

function cliqueiBotao() {
  let cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}


// Clica no botao
//   -> CHAMA A FUNÇÃO cliqueiBotao()
//   -> Vai no INPUT e pega o que está lá dentro
//   -> PASSAR a cidade para o servidor

//   Math.floor -> Ferramenta do JS para Arrendondar valores