// Array com todos os produtos
const produtos = [
  "ALCOOL SWAB",
  "BOBINA DROP FLAT 1F 1000M",
  "BUCHA 6MM",
  "CABO UTP 100% COBRE",
  "CABO UTP BRANCO / COMODATO",
  "CABO UTP BRANCO / VENDA",
  "CABO UTP PRETO / COMODATO",
  "CABO UTP PRETO / VENDA",
  "CAMERA CRAFTSMAN BULLET 2.8mm 5MP",
  "CAMERA CRAFTSMAN DOME 2.8mm 5MP",
  "CAMERA HDCAM BULLET 2.8mm 3MP",
  "CAMERA UBNT G3",
  "CONECTOR APC",
  "CONECTOR RJ-45",
  "CONECTOR UPC",
  "D-LINK AC 1200 DIR-815",
  "DLINK DIR-610",
  "DLINK DIR-611",
  "DLINK DIR-615",
  "FITA ISOLANTE 20m",
  "FIXA CABO BRANCO",
  "FIXA CABO PRETO",
  "FONTE 12V 0,5A",
  "FONTE 12V 1,5A",
  "FONTE 12V 1A",
  "FONTE 12V 2.5A",
  "FONTE 12V 2A",
  "FONTE 24V 2.5A PARA RB",
  "FONTE DLINK 12V 0.5A",
  "FONTE DLINK 12V 1A",
  "HAP LITE",
  "HUAWEI EG 4PT",
  "HUAWEI EG8145",
  "HUAWEI HG8310M",
  "HUAWEI HS 5V 4PT",
  "HUAWEI HS V5 4PT",
  "HUAWEI HS8145",
  "INTELBRAS ACTION R1200",
  "INTELBRAS ACTION RG 200",
  "INTELBRAS IWR3000N",
  "LHG 5",
  "MESH ROUTER",
  "NANO BEAM",
  "NANO M2",
  "NANO M3",
  "NANO M5",
  "ONU CDAT AX 4P",
  "ONU EPON",
  "ONU FIBER HOME",
  "ONU V-SOLUTION GPON 4P",
  "ONU V-SOLUTION MONU 4P",
  "ONU V-SOLUTION GPON 2P",
  "ONU XPON",
  "PAR DE CONECTORES PLUG P4",
  "PARAFUSO 8MM",
  "PARAFUSO 6MM",
  "PARAFUSO/BUCHA 10mm",
  "PATCH CORD",
  "RB 760iGS",
  "RB HEX POE 960PGS",
  "RB-912",
  "RB951G - 2HnD",
  "ROTEADOR DLINK AC1200 DIR-842",
  "ROTEADOR DLINK AC750 DIR-819",
  "ROTEADOR WIFI TENDA AC5 AC1200",
  "SWITCH ADAPTADO INTELBRAS SF800Q+",
  "SWITCH MERCUSYS 8-PORTAS 10/100/1000Mbps",
  "SWITCH POE AI.POE",
  "SXT",
  "UBIQUITI UNIFI 6 LONG-RANGE",
  "UBNT 24V",
  "UBNT 24V-GIGA",
  "UBNT 25V",
  "UBNT 48V",
  "UBNT 48V-GIGA",
  "UNIFI AC LITE",
  "UNIFI AP",
  "UNIFI U6-LR",
  "UNIFI UAP-AC-LR",
  "UNIFI UAP-AC-M",
  "UNIFI UAP-FLEXHD",
];

// Função para adicionar um novo material
function addMaterial(containerId, selectId, placeholderId) {
  const container = document.getElementById(containerId);
  const newRow = document.createElement("div");
  newRow.classList.add("material-input-row");

  // Gera as opções do select
  const selectOptions = produtos
    .map((produto) => `<option value="${produto}">${produto}</option>`)
    .join("");

  newRow.innerHTML = `
    <select id="${selectId}" required>
      <option value="" disabled selected>Selecione um produto</option>
      ${selectOptions}
    </select>
    <input type="number" id="${placeholderId}-quantidade" placeholder="Quantidade" min="1" required />
    <input type="text" id="${placeholderId}-obs" placeholder="OBS/SERIAL" />
  `;

  container.appendChild(newRow);
}

// Adiciona eventos para os botões de adicionar material
document
  .getElementById("add-material")
  .addEventListener("click", () =>
    addMaterial("material-container", "produto-utilizado", "utilizado")
  );
document
  .getElementById("add-recolhido")
  .addEventListener("click", () =>
    addMaterial("recolhido-container", "produto-recolhido", "recolhida")
  );

// Função para coletar materiais de um contêiner específico
function collectMaterials(containerId) {
  return Array.from(
    document.querySelectorAll(`#${containerId} .material-input-row`)
  ).map((row) => {
    const produto = row.querySelector("select").value;
    const quantidade = row.querySelector("input[type='number']").value;
    const obs = row.querySelector("input[type='text']").value;
    return { produto, quantidade, obs };
  });
}
