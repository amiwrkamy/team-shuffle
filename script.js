function makeTeams() {
  let players = document.getElementById("players").value
    .split("\n")
    .filter(p => p.trim() !== "");

  players.sort(() => Math.random() - 0.5);

  let team1 = [];
  let team2 = [];

  players.forEach((p, i) => {
    (i % 2 === 0 ? team1 : team2).push(p);
  });

  document.getElementById("result").innerText =
    "🏴 تیم ۱:\n" + team1.join("\n") +
    "\n\n🏳️ تیم ۲:\n" + team2.join("\n");
}
