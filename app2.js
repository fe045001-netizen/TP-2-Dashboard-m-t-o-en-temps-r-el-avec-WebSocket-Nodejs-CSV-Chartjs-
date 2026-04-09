const WebSocketServer = require("ws").Server;
const CSVToJSON = require("csvtojson");
const path = require("path");

const wss = new WebSocketServer({ port: 5002 });

console.log("Serveur WebSocket actif : ws://localhost:5002");
console.log("Envoi des données météo toutes les 3 secondes...");

wss.on("connection", async function (ws) {
  console.log(" Client connecté");

  try {
    // chemin ABSOLU du fichier CSV
    const filePath = path.join(__dirname, "temp.csv");
    console.log("Lecture fichier :", filePath);

    const data = await CSVToJSON().fromFile(filePath);
    console.log(` ${data.length} lignes chargées`);

    let i = 0;

    const timer = setInterval(function () {
      if (i < data.length) {
        const row = {
          mois: data[i].mois,
          tmax: parseFloat(data[i].tmax),
          tmin: parseFloat(data[i].tmin),
          pluie: parseFloat(data[i].pluie)
        };

        ws.send(JSON.stringify(row));

        console.log(
          ` Envoi: ${row.mois} - Max:${row.tmax}°C Min:${row.tmin}°C Pluie:${row.pluie}j`
        );

        i++;
      } else {
        clearInterval(timer);
        console.log(" Toutes les données ont été envoyées");
      }
    }, 3000);

    ws.on("close", function () {
      clearInterval(timer);
      console.log(" Client déconnecté");
    });

  } catch (err) {
    console.error(" Erreur serveur :", err.message);

    //  envoyer l’erreur au client
    ws.send(JSON.stringify({ error: err.message }));
  }
});