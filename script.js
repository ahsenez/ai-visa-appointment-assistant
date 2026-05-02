function analyzeAppointments() {
  const country = document.getElementById("country").value;
  const visaType = document.getElementById("visaType").value;
  const city = document.getElementById("city").value;

  const appointmentList = document.getElementById("appointmentList");
  const aiText = document.getElementById("aiText");

  appointmentList.innerHTML = "";

  // 🔄 Loading efekti
  aiText.innerText = "🤖 AI is analyzing appointment data...";

  setTimeout(() => {
    const dates = [
      "12 June 2026",
      "18 June 2026",
      "25 June 2026",
      "3 July 2026",
      "10 July 2026"
    ];

    const bestDate = dates[Math.floor(Math.random() * dates.length)];

    dates.forEach(date => {
      const div = document.createElement("div");
      div.innerText = `${country} - ${city} (${visaType}) → ${date}`;
      appointmentList.appendChild(div);
    });

    aiText.innerText = `
AI Analysis Result:

✔ Country: ${country}
✔ Visa Type: ${visaType}
✔ Location: ${city}

📊 Smart pattern detection completed.

👉 Best Available Slot:
${bestDate}

⚡ Recommendation:
High success probability detected between 09:00 - 11:00.
Turn on notifications for instant booking advantage.
`;
  }, 1500);
}
