#  TP : Dashboard Météo en Temps Réel avec WebSocket

## Objectif

Ce TP consiste à créer une application web permettant d’afficher des données météorologiques en temps réel à partir d’un fichier CSV.
Les données sont envoyées par un serveur WebSocket (Node.js) et affichées dynamiquement dans un tableau et des graphiques.

##  Technologies utilisées

* Node.js
* WebSocket (ws)
* CSVToJSON
* HTML / CSS / JavaScript
* Chart.js

##  Structure du projet

```
meteo-realtime/
│── app2.js           # Serveur WebSocket
│── temp.csv          # Données météo
│── index_tab.html    # Interface utilisateur
│── package.json
```
## Installation

### 1. Initialiser le projet

```bash
npm init -y
```

### 2. Installer les dépendances

```bash
npm install ws csvtojson
npm install --save-dev nodemon
```

---

## Lancement du projet

### Étape 1 : Lancer le serveur WebSocket

```bash
npm run dev
```
### Étape 2 : Lancer le serveur HTTP

Dans un **nouveau terminal** :

```bash
npx http-server
```
### Étape 3 : Ouvrir l’application

Dans le navigateur :

```
http://127.0.0.1:8080/index_tab.html
```

##  Fonctionnement

1. Le serveur lit le fichier `temp.csv`.
2. Il envoie une ligne de données toutes les 3 secondes via WebSocket.
3. Le client reçoit les données et :

   * met à jour le tableau
   * met à jour les graphiques
   * affiche des statistiques

## Données utilisées (exemple)

```csv
mois,tmax,tmin,pluie
Janvier,18,7,5
Février,20,8,4
Mars,22,10,6
...
```

## Fonctionnalités

* Affichage des données en temps réel
* Graphique des températures (max/min)
* Graphique des précipitations
* Tableau dynamique
* Statistiques (moyenne, total pluie)

##  Résultat attendu

* Tableau rempli progressivement
* Graphiques dynamiques
* Données envoyées toutes les 3 secondes
<img width="1363" height="696" alt="Capture d’écran 2026-04-09 212847" src="https://github.com/user-attachments/assets/53cc1246-4d7d-4a18-b094-cdba44468fcb" />

<img width="1366" height="696" alt="Capture d’écran 2026-04-09 212927" src="https://github.com/user-attachments/assets/697816d2-721a-4e44-a548-447bc5d60f3f" />

## Conclusion

Ce TP permet de comprendre :

* le fonctionnement des WebSockets
* la communication temps réel
* la manipulation de données CSV
* la visualisation avec Chart.js

## Auteur

Fatima Ezzahra Sahmad
