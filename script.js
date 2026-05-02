let appointments = [];

function addAppointment() {
  const country = document.getElementById("country").value;
  const visaType = document.getElementById("visaType").value;
  const city = document.getElementById("city").value;
  const date = document.getElementById("appointmentDate").value;

  const list = document.getElementById("appointmentList");

  if (!date) {
    alert("Lütfen bir tarih seç!");
    return;
  }

  const appointment = {
    country,
    visaType,
    city,
    date
  };

  appointments.push(appointment);

  renderList();
}

function renderList() {
  const list = document.getElementById("appointmentList");

  if (appointments.length === 0) {
    list.innerHTML = `<p class="empty">Henüz randevu eklenmedi.</p>`;
    return;
  }

  list.innerHTML = "";

  appointments.forEach(item => {
    const div = document.createElement("div");
    div.innerText = `${item.country} - ${item.city} (${item.visaType}) → ${item.date}`;
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
    // Tarihleri sırala
    const sorted = appointments.sort((a, b) => new Date(a.date) - new Date(b.date));

    const best = sorted[0];

    aiText.innerText = `
Yapay Zeka Analiz Sonucu:

✔ Ülke: ${best.country}
✔ Şehir: ${best.city}
✔ Vize Türü: ${best.visaType}

📊 En erken randevu bulundu:

👉 ${best.date}

⚡ Öneri:
Daha erken tarih buldukça eklemeye devam et.
Sistemi düzenli kontrol ederek avantaj yakalayabilirsin.
`;
  }, 1500);
}
