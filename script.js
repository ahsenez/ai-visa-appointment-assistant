let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

document.addEventListener("DOMContentLoaded", renderList);

function saveAppointments() {
  localStorage.setItem("appointments", JSON.stringify(appointments));
}

function addAppointment() {
  const country = document.getElementById("country").value;
  const visaType = document.getElementById("visaType").value;
  const city = document.getElementById("city").value;
  const date = document.getElementById("appointmentDate").value;

  if (!date) {
    alert("Lütfen bir tarih seç!");
    return;
  }

  appointments.push({ country, visaType, city, date });
  saveAppointments();
  renderList();

  document.getElementById("appointmentDate").value = "";
}

function deleteAppointment(index) {
  appointments.splice(index, 1);
  saveAppointments();
  renderList();
}

function renderList() {
  const list = document.getElementById("appointmentList");

  if (appointments.length === 0) {
    list.innerHTML = `<p class="empty">Henüz randevu eklenmedi.</p>`;
    return;
  }

  list.innerHTML = "";

  appointments
    .sort((a, b) => new Date(a.date) - new Date(b.date))
    .forEach((item, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <strong>${item.country} - ${item.city}</strong><br>
        ${item.visaType} → ${formatDate(item.date)}
        <button class="delete-btn" onclick="deleteAppointment(${index})">Sil</button>
      `;
      list.appendChild(div);
    });
}

function analyzeAppointments() {
  const aiText = document.getElementById("aiText");

  if (appointments.length === 0) {
    aiText.innerText = "Analiz için önce randevu eklemelisin.";
    return;
  }

  aiText.innerText = "🤖 Yapay zeka analiz yapıyor...";

  setTimeout(() => {
    const sorted = [...appointments].sort((a, b) => new Date(a.date) - new Date(b.date));
    const best = sorted[0];

    aiText.innerText = `
Yapay Zeka Analiz Sonucu:

✔ Ülke: ${best.country}
✔ Şehir: ${best.city}
✔ Vize Türü: ${best.visaType}

📊 En erken randevu bulundu:

👉 ${formatDate(best.date)}

⚡ Öneri:
Bu tarih şu an listedeki en avantajlı seçenektir.
Daha erken tarih buldukça sisteme eklemeye devam edebilirsin.
`;
  }, 1500);
}

function formatDate(date) {
  return new Date(date).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}
