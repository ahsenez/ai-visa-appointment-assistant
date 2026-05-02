function analyzeAppointments() {
  const country = document.getElementById("country").value;
  const visaType = document.getElementById("visaType").value;
  const city = document.getElementById("city").value;
  
 const appointmentList = document.getElementById("appointmentList");
  const aiText = document.getElementById("aiText");

appointmentList.innerHTML = "";


  // Fake appointment data (simülasyon)
  const dates = [
    "12 June 2026",
    "18 June 2026",
    "25 June 2026",
    "3 July 2026",
    "10 July 2026"
  ];

  // Rastgele erken tarih seç (AI gibi davransın)
  const bestDate = dates[Math.floor(Math.random() * dates.length)];

// Listeyi oluştur
  dates.forEach(date => {
    const div = document.createElement("div");
    div.innerText = `${country} - ${city} (${visaType}) → ${date}`;
    appointmentList.appendChild(div);
  });
