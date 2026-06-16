const today = new Date("2026-06-15T12:00:00");

const dogs = [
  { id: "mel", name: "Mel", image: "assets/dogs/mel.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Fêmea", size: "Médio", entry: "2024-09-02", status: "Disponível", personality: "Carinhosa, gosta de colo e se aproxima com delicadeza.", health: "Vacinada, vermifugada e com castração indicada.", story: "Mel chegou assustada, mas aprendeu a confiar nas pessoas e hoje procura contato sempre que recebe visita." },
  { id: "tobias", name: "Tobias", image: "assets/dogs/tobias.jpg", age: "idoso", ageYears: 9, sex: "Macho", size: "Grande", entry: "2022-11-18", status: "Disponível", personality: "Calmo, observador e muito leal.", health: "Vacinado, vermifugado e acompanhado por ser idoso.", story: "Tobias espera uma casa tranquila, com rotina estável e carinho no tempo dele." },
  { id: "dora", name: "Dora", image: "assets/dogs/dora.jpg", age: "idosa", ageYears: 8, sex: "Fêmea", size: "Médio", entry: "2023-03-11", status: "Disponível", personality: "Reservada no começo, companheira depois que confia.", health: "Vacinada, vermifugada e castrada.", story: "Dora passou muito tempo sem atenção individual e precisa de uma família paciente." },
  { id: "branca", name: "Branca", image: "assets/dogs/branca.jpg", age: "idosa", ageYears: 8.5, sex: "Fêmea", size: "Médio", entry: "2022-07-22", status: "Disponível", personality: "Protetora, tranquila e muito doce com cuidadores.", health: "Castrada, vacinada e em acompanhamento articular.", story: "Branca é uma senhora amorosa que merece uma aposentadoria com cama macia e companhia." },
  { id: "nino", name: "Nino", image: "assets/dogs/nino.jpg", age: "idoso", ageYears: 9, sex: "Macho", size: "Médio", entry: "2021-12-05", status: "Disponível", personality: "Afetuoso, sereno e fã de cafuné.", health: "Vacinado, vermifugado e castrado.", story: "Nino é daqueles cães que agradecem qualquer gesto de cuidado com muita confiança." },
  { id: "luna", name: "Luna", image: "assets/dogs/luna.jpg", age: "6 a 7 anos", ageYears: 6.5, sex: "Fêmea", size: "Grande", entry: "2023-10-14", status: "Disponível", personality: "Esperta, alerta e muito ligada às pessoas.", health: "Vacinada, vermifugada e castrada.", story: "Luna precisa de espaço e tutores que gostem de passeios tranquilos." },
  { id: "atlas", name: "Atlas", image: "assets/dogs/atlas.jpg", age: "+ 5 anos", ageYears: 5.5, sex: "Macho", size: "Grande", entry: "2024-01-20", status: "Disponível", personality: "Independente, curioso e bom para quintal seguro.", health: "Vacinado, vermifugado e castrado.", story: "Atlas adora observar o movimento e se adapta bem a rotinas previsíveis." },
  { id: "bento", name: "Bento", image: "assets/dogs/bento.jpg", age: "5 a 6 anos", ageYears: 5.5, sex: "Macho", size: "Médio", entry: "2024-04-03", status: "Disponível", personality: "Brincalhão, alegre e sociável.", health: "Vacinado e vermifugado; castração em planejamento.", story: "Bento tem energia boa e combina com família que queira companhia ativa." },
  { id: "sol", name: "Sol", image: "assets/dogs/sol.jpg", age: "idosa", ageYears: 8, sex: "Fêmea", size: "Grande", entry: "2022-05-29", status: "Disponível", personality: "Dócil, silenciosa e sensível.", health: "Vacinada, vermifugada e em avaliação para castração.", story: "Sol fica mais segura com aproximação calma e já reconhece a voz dos cuidadores." },
  { id: "caramelo", name: "Caramelo", image: "assets/dogs/caramelo.jpg", age: "não informada", ageYears: 4, sex: "Macho", size: "Médio", entry: "2025-01-08", status: "Disponível", personality: "Atento, companheiro e gosta de explorar.", health: "Vacinado e vermifugado.", story: "Caramelo ainda está sendo avaliado, mas já mostra muito interesse por contato humano." },
  { id: "zeus", name: "Zeus", image: "assets/dogs/zeus.jpg", age: "2 a 3 anos", ageYears: 2.5, sex: "Macho", size: "Grande", entry: "2025-03-17", status: "Disponível", personality: "Jovem, curioso e muito expressivo.", health: "Vacinado, vermifugado e castrado.", story: "Zeus chegou jovem e tem grande chance de adaptação com uma família ativa." },
  { id: "thor", name: "Thor", image: "assets/dogs/thor.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Macho", size: "Médio", entry: "2024-12-01", status: "Disponível", personality: "Sorridente, sociável e esperto.", health: "Vacinado e vermifugado.", story: "Thor se aproxima rápido e costuma receber visitantes abanando o rabo." },
  { id: "pipoca", name: "Pipoca", image: "assets/dogs/pipoca.jpg", age: "4 a 5 anos", ageYears: 4.5, sex: "Macho", size: "Pequeno", entry: "2023-08-30", status: "Disponível", personality: "Pequeno, divertido e cheio de presença.", health: "Vacinado, vermifugado e castrado.", story: "Pipoca precisa de uma casa segura, pois é pequeno e gosta de se enroscar em cantinhos." },
  { id: "amora", name: "Amora", image: "assets/dogs/amora.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Fêmea", size: "Médio", entry: "2025-06-02", status: "Disponível", personality: "Tímida, doce e observadora.", health: "Vacinada e em avaliação clínica inicial.", story: "Amora chegou recentemente e ainda está aprendendo a confiar no abrigo." },
  { id: "maya", name: "Maya", image: "assets/dogs/maya.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Fêmea", size: "Médio", entry: "2025-04-09", status: "Disponível", personality: "Serena, delicada e companheira.", health: "Vacinada, vermifugada e castrada.", story: "Maya responde bem a carinho leve e rotina calma." },
  { id: "apollo", name: "Apollo", image: "assets/dogs/apollo.jpg", age: "2 a 3 anos", ageYears: 2.5, sex: "Macho", size: "Grande", entry: "2024-06-24", status: "Adotado", personality: "Gentil, jovem e atento.", health: "Vacinado, vermifugado e castrado.", story: "Apollo entrou no levantamento e já encontrou uma família adotiva." },
  { id: "marley", name: "Marley", image: "assets/dogs/marley.jpg", age: "5 a 6 anos", ageYears: 5.5, sex: "Macho", size: "Grande", entry: "2023-12-08", status: "Disponível", personality: "Calmo, elegante e muito fiel.", health: "Vacinado, vermifugado e castrado.", story: "Marley observa antes de se aproximar, mas cria vínculo forte." },
  { id: "fred", name: "Fred", image: "assets/dogs/fred.jpg", age: "não informada", ageYears: 5, sex: "Macho", size: "Médio", entry: "2024-02-14", status: "Disponível", personality: "Animado, comunicativo e gosta de atenção.", health: "Vacinado e vermifugado.", story: "Fred espera uma chance para mostrar que pode ser um ótimo guardião e amigo." },
  { id: "chico", name: "Chico", image: "assets/dogs/chico.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Macho", size: "Médio", entry: "2023-06-01", status: "Disponível", personality: "Maduro, calmo e muito observador.", health: "Vacinado, vermifugado e em avaliação odontológica.", story: "Chico precisa de cuidado especial e um lar que valorize cães tranquilos." },
  { id: "black", name: "Black", image: "assets/dogs/black.jpg", age: "7 a 8 anos", ageYears: 7.5, sex: "Macho", size: "Grande", entry: "2022-09-09", status: "Disponível", personality: "Sensível, quieto e muito atento.", health: "Vacinado, vermifugado e castrado.", story: "Black espera há bastante tempo e merece uma família que enxergue cães adultos." },
  { id: "belinha", name: "Belinha", image: "assets/dogs/belinha.jpg", age: "idosa", ageYears: 8.5, sex: "Fêmea", size: "Grande", entry: "2021-10-12", status: "Disponível", personality: "Doce, paciente e companheira.", health: "Vacinada, vermifugada e acompanhada por idade avançada.", story: "Belinha é uma idosa amorosa que se alegra com presença humana." },
  { id: "jade", name: "Jade", image: "assets/dogs/jade.jpg", age: "7 a 8 anos", ageYears: 7.5, sex: "Fêmea", size: "Médio", entry: "2023-01-16", status: "Disponível", personality: "Elegante, tranquila e muito atenta.", health: "Vacinada, vermifugada e castrada.", story: "Jade se adapta melhor em ambiente sem muita agitação." },
  { id: "bob", name: "Bob", image: "assets/dogs/bob.jpg", age: "5 a 6 anos", ageYears: 5.5, sex: "Macho", size: "Médio", entry: "2024-07-10", status: "Disponível", personality: "Comunicativo, alerta e carinhoso.", health: "Vacinado e vermifugado.", story: "Bob chama atenção quando quer carinho e gosta de interagir com os cuidadores." },
  { id: "kiara", name: "Kiara", image: "assets/dogs/kiara.jpg", age: "6 a 7 anos", ageYears: 6.5, sex: "Fêmea", size: "Grande", entry: "2023-05-19", status: "Disponível", personality: "Confiante, alegre e protetora.", health: "Vacinada, vermifugada e castrada.", story: "Kiara precisa de tutores firmes e afetuosos para aproveitar sua energia boa." },
  { id: "pepe", name: "Pepe", image: "assets/dogs/pepe.jpg", age: "3 a 4 anos", ageYears: 3.5, sex: "Macho", size: "Pequeno", entry: "2025-02-22", status: "Disponível", personality: "Pequeno, esperto e muito expressivo.", health: "Vacinado e vermifugado.", story: "Pepe é pequeno no tamanho, mas cheio de personalidade." },
  { id: "nina", name: "Nina", image: "assets/dogs/nina.jpg", age: "idosa", ageYears: 8, sex: "Fêmea", size: "Médio", entry: "2022-02-07", status: "Disponível", personality: "Alegre, confiante e muito amorosa.", health: "Vacinada, vermifugada e castrada.", story: "Nina é uma idosa sorridente que ainda tem muito carinho para entregar." },
  { id: "otto", name: "Otto", image: "assets/dogs/otto.jpg", age: "não informada", ageYears: 5, sex: "Macho", size: "Grande", entry: "2025-05-25", status: "Disponível", personality: "Sério no começo, curioso e atento.", health: "Em avaliação inicial, vacinas em atualização.", story: "Otto chegou há pouco e está na fase de adaptação ao abrigo." },
  { id: "dupla", name: "Dupla Amora e Tito", image: "assets/dogs/dupla-amigos.jpg", age: "5 a 6 anos", ageYears: 5.5, sex: "Macho e fêmea", size: "Médio", entry: "2024-10-04", status: "Disponível", personality: "Unidos, alegres e bons para adoção conjunta.", health: "Vacinados e vermifugados.", story: "A dupla aparece sempre junta e seria ideal encontrar uma família que aceite os dois." }
];

function daysInShelter(dog) {
  const entry = new Date(`${dog.entry}T12:00:00`);
  return Math.max(1, Math.round((today - entry) / 86400000));
}

function formatDate(dateText) {
  return new Intl.DateTimeFormat("pt-BR").format(new Date(`${dateText}T12:00:00`));
}

function renderCards(list = dogs) {
  const grid = document.querySelector("#dogGrid");
  grid.innerHTML = list.map(dog => `
    <article class="dog-card">
      <button class="card-button" data-id="${dog.id}" aria-label="Abrir página de ${dog.name}">
        <img src="${dog.image}" alt="Foto de ${dog.name}">
        <span class="status ${dog.status === "Adotado" ? "adopted" : ""}">${dog.status}</span>
        <div class="card-body">
          <h3>${dog.name}</h3>
          <p>${dog.personality}</p>
          <dl>
            <div><dt>Idade</dt><dd>${dog.age}</dd></div>
            <div><dt>Sexo</dt><dd>${dog.sex}</dd></div>
            <div><dt>Porte</dt><dd>${dog.size}</dd></div>
            <div><dt>No abrigo</dt><dd>${daysInShelter(dog)} dias</dd></div>
          </dl>
        </div>
      </button>
    </article>
  `).join("");
}

function renderDetails(id) {
  const dog = dogs.find(item => item.id === id);
  if (!dog) return;

  document.querySelector("#detalhes").hidden = false;
  document.querySelector("#dogDetails").innerHTML = `
    <article class="detail-card">
      <div class="detail-photos">
        <img class="main-photo" src="${dog.image}" alt="Foto principal de ${dog.name}">
        <div>
          <img src="${dog.image}" alt="Outra foto de ${dog.name}">
          <img src="assets/dogs/dupla-amigos.jpg" alt="Cães no abrigo Patinhas do Vale">
        </div>
      </div>
      <div class="detail-info">
        <p class="eyebrow">Página individual do animal</p>
        <h2>${dog.name}</h2>
        <p>${dog.story}</p>
        <dl class="detail-list">
          <div><dt>Idade aproximada</dt><dd>${dog.age}</dd></div>
          <div><dt>Sexo</dt><dd>${dog.sex}</dd></div>
          <div><dt>Porte</dt><dd>${dog.size}</dd></div>
          <div><dt>Entrada no abrigo</dt><dd>${formatDate(dog.entry)}</dd></div>
          <div><dt>Tempo exato no abrigo</dt><dd>${daysInShelter(dog)} dias</dd></div>
          <div><dt>Saúde</dt><dd>${dog.health}</dd></div>
        </dl>
        <a class="button primary" href="mailto:adocao@patinhasdovale.org?subject=Adoção%20-%20${encodeURIComponent(dog.name)}">Quero adotar ${dog.name}</a>
      </div>
    </article>
  `;
  document.querySelector("#detalhes").scrollIntoView({ behavior: "smooth" });
}

function drawBarChart(canvas, labels, values, color) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 54;
  const max = Math.max(...values);
  const barWidth = (width - padding * 2) / values.length;

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#d7e5dc";
  ctx.lineWidth = 1;

  for (let i = 0; i <= 4; i++) {
    const y = padding + ((height - padding * 2) / 4) * i;
    ctx.beginPath();
    ctx.moveTo(padding, y);
    ctx.lineTo(width - padding, y);
    ctx.stroke();
  }

  values.forEach((value, index) => {
    const barHeight = ((height - padding * 2) * value) / max;
    const x = padding + index * barWidth + 4;
    const y = height - padding - barHeight;
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Math.max(8, barWidth - 8), barHeight);
  });

  ctx.fillStyle = "#314238";
  ctx.font = "18px Arial";
  ctx.fillText(`${Math.round(max)} dias`, padding, 28);
  ctx.font = "12px Arial";
  labels.forEach((label, index) => {
    if (index % 2 === 0) {
      const x = padding + index * barWidth + 2;
      ctx.save();
      ctx.translate(x, height - 20);
      ctx.rotate(-0.65);
      ctx.fillText(label.slice(0, 9), 0, 0);
      ctx.restore();
    }
  });
}

function drawScatterChart(canvas) {
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const padding = 58;
  const maxAge = Math.max(...dogs.map(dog => dog.ageYears));
  const maxDays = Math.max(...dogs.map(daysInShelter));

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fffaf0";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#8fb6a4";
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(padding, padding);
  ctx.lineTo(padding, height - padding);
  ctx.lineTo(width - padding, height - padding);
  ctx.stroke();

  dogs.forEach(dog => {
    const x = padding + (dog.ageYears / maxAge) * (width - padding * 2);
    const y = height - padding - (daysInShelter(dog) / maxDays) * (height - padding * 2);
    ctx.fillStyle = dog.status === "Adotado" ? "#f6a94a" : "#4f6a3d";
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  ctx.fillStyle = "#314238";
  ctx.font = "15px Arial";
  ctx.fillText("Idade aproximada", width - 190, height - 22);
  ctx.save();
  ctx.translate(22, 170);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Dias no abrigo", 0, 0);
  ctx.restore();
}

function updateMath() {
  const total = dogs.length;
  const adopted = dogs.filter(dog => dog.status === "Adotado").length;
  const waiting = total - adopted;
  const average = Math.round(dogs.reduce((sum, dog) => sum + daysInShelter(dog), 0) / total);
  const adoptedPercent = Math.round((adopted / total) * 100);
  const waitingPercent = Math.round((waiting / total) * 100);

  document.querySelector("#totalDogs").textContent = total;
  document.querySelector("#averageStay").textContent = average;
  document.querySelector("#adoptionRate").textContent = `${adoptedPercent}%`;
  document.querySelector("#mathAverage").textContent = `${average} dias`;
  document.querySelector("#mathAdopted").textContent = `${adoptedPercent}%`;
  document.querySelector("#mathWaiting").textContent = `${waitingPercent}%`;

  drawBarChart(
    document.querySelector("#stayChart"),
    dogs.map(dog => dog.name),
    dogs.map(daysInShelter),
    "#4f6a3d"
  );
  drawScatterChart(document.querySelector("#ageChart"));
}

document.querySelector("#dogGrid").addEventListener("click", event => {
  const button = event.target.closest(".card-button");
  if (button) renderDetails(button.dataset.id);
});

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    const filtered = filter === "todos"
      ? dogs
      : dogs.filter(dog => [dog.sex, dog.size, dog.status].includes(filter));
    renderCards(filtered);
  });
});

renderCards();
updateMath();
