document
  .getElementById("gerar-relatorio")
  .addEventListener("click", function () {
    const problemaEncontrado = document.getElementById("solucao").value;
    const obsProblema = document.getElementById("obs").value;
    const equipCabeado = document.getElementById("equip-cabeado").value;
    const obsEquipCabeado = document.getElementById("equip-cabeado-obs").value;
    const equipCabeadoQuais = document.getElementById(
      "equip-cabeado-quais"
    ).value;
    const obsEquipCabeadoQuais = document.getElementById(
      "equip-cabeado-quais-obs"
    ).value;
    const equipRejeitado = document.getElementById("equip-rejeitado").value;
    const obsEquipRejeitado = document.getElementById(
      "equip-rejeitado-obs"
    ).value;
    const maiorRSSI = document.getElementById("rssi").value;
    const obsRSSI = document.getElementById("rssi-obs").value;

    // Coletar materiais utilizados
    const materiaisUtilizados = Array.from(
      document.querySelectorAll("#material-container .material-input-row")
    ).map((row) => {
      const produto = row.querySelector("select").value;
      const quantidade = row.querySelector("input[type='number']").value;
      const obs = row.querySelector("input[type='text']").value;
      return { produto, quantidade, obs };
    });

    // Coletar materiais recolhidos
    const materiaisRecolhidos = Array.from(
      document.querySelectorAll("#recolhido-container .material-input-row")
    ).map((row) => {
      const produto = row.querySelector("select").value;
      const quantidade = row.querySelector("input[type='number']").value;
      const obs = row.querySelector("input[type='text']").value;
      return { produto, quantidade, obs };
    });

    // Gerar o conteúdo do relatório
    let relatorioConteudo = `<h1>Relatório</h1>`;
    relatorioConteudo += `<h2>Problema encontrado pelo técnico:</h2>`;
    relatorioConteudo += `<p>${problemaEncontrado}${
      obsProblema ? "<br>OBS: " + obsProblema : ""
    }</p>`;
    relatorioConteudo += `<h2>Há algum equipamento cabeado? Quais?</h2>`;
    relatorioConteudo += `<p>${equipCabeado}${
      obsEquipCabeado ? "<br>OBS: " + obsEquipCabeado : ""
    }</p>`;
    relatorioConteudo += `<h2>Cabeou algum equipamento? Quais?</h2>`;
    relatorioConteudo += `<p>${equipCabeadoQuais}${
      obsEquipCabeadoQuais ? "<br>OBS: " + obsEquipCabeadoQuais : ""
    }</p>`;
    relatorioConteudo += `<h2>Cliente rejeitou cabo? Para quais equipamentos?</h2>`;
    relatorioConteudo += `<p>${equipRejeitado}${
      obsEquipRejeitado ? "<br>OBS: " + obsEquipRejeitado : ""
    }</p>`;
    relatorioConteudo += `<h2>Maior sinal de RSSI:</h2>`;
    relatorioConteudo += `<p>${maiorRSSI}${
      obsRSSI ? "<br>OBS: " + obsRSSI : ""
    }</p>`;

    // Adicionando materiais utilizados
    relatorioConteudo += `<h2>Materiais Utilizados:</h2>`;
    materiaisUtilizados.forEach((material) => {
      relatorioConteudo += `<p>${material.produto} - Quantidade: ${
        material.quantidade
      }${material.obs ? "<br>OBS: " + material.obs : ""}</p>`;
    });

    // Adicionando materiais recolhidos
    relatorioConteudo += `<h2>Materiais Recolhidos:</h2>`;
    materiaisRecolhidos.forEach((material) => {
      relatorioConteudo += `<p>${material.produto} - Quantidade: ${
        material.quantidade
      }${material.obs ? "<br>OBS: " + material.obs : ""}</p>`;
    });

    // Exibir o conteúdo no popup
    document.getElementById("relatorio-conteudo").innerHTML = relatorioConteudo;
    document.getElementById("popup").style.display = "block";
  });

// Fechar o popup
document.getElementById("close-popup").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

// Fechar o popup quando clicar fora dele
window.onclick = function (event) {
  const popup = document.getElementById("popup");
  if (event.target === popup) {
    popup.style.display = "none";
  }
};

// Função para copiar o relatório
document
  .getElementById("copiar-relatorio")
  .addEventListener("click", function () {
    const relatorioTexto =
      document.getElementById("relatorio-conteudo").innerText;

    // Criar um elemento temporário para copiar o conteúdo
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = relatorioTexto;
    document.body.appendChild(tempTextArea);

    // Selecionar e copiar o texto
    tempTextArea.select();
    document.execCommand("copy");

    // Remover o elemento temporário
    document.body.removeChild(tempTextArea);

    // Feedback visual (opcional)
    alert("Relatório copiado para a área de transferência!");
  });
