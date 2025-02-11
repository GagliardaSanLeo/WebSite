// Initialize Vanta.js background effect
VANTA.NET({
  el: "#vanta-bg",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.5,
  points: window.innerWidth < 768 ? 10 : 15,
  maxDistance: 20,
  spacing: window.innerWidth < 768 ? 22.5 : 15,
  color: 0xffd700,
  backgroundColor: 0x000000
});

// Load standings data
document.addEventListener("DOMContentLoaded", function () {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById("standingsTable");

      data.teams.forEach(item => {
        const row = document.createElement("tr");

        const teamCell = document.createElement("td");
        teamCell.textContent = item.team;
        row.appendChild(teamCell);

        const pointsCell = document.createElement("td");
        pointsCell.textContent = item.points;
        row.appendChild(pointsCell);

        tableBody.appendChild(row);
      });

      document.getElementById("lastUpdatedDate").textContent = data.lastUpdate;
    })
    .catch(error => console.error("Error fetching JSON:", error));
});
