async function load() {
  const res = await fetch("./passport.json");
  const data = await res.json();

  document.getElementById("summary").innerHTML = `
    <b>Pasaport ID:</b> ${data.passportId}<br>
    <b>Model:</b> ${data.model}<br>
    <b>Üretim Ülkesi:</b> ${data.country}<br>
    <b>Karbon Ayak İzi:</b> ${data.carbon.total} kgCO2e/kWh
  `;

  document.getElementById("raw").textContent = JSON.stringify(data, null, 2);
}

load();
