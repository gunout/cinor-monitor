<div align="center">

## 🇷🇪 Cinor Monitor

Tableau de bord expert de la Communauté d'Agglomération du Nord — La Réunion.

![HTML5](https://img.shields.io/badge/HTML-5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS-3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

![Leaflet](https://img.shields.io/badge/Leaflet-1.9.4-199900?style=flat-square&logo=leaflet&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-4.4-FF6384?style=flat-square&logo=chart.js&logoColor=white)

![Modules](https://img.shields.io/badge/modules-9-purple?style=flat-square)
![Sous-onglets](https://img.shields.io/badge/sous--onglets-25-orange?style=flat-square)
![Santé](https://img.shields.io/badge/établissements%20santé-104-blue?style=flat-square)
![Status](https://img.shields.io/badge/status-production-success?style=flat-square)

Dashboard interactif pour le pilotage de la **CINOR** (3 communes) : Saint-Denis, Sainte-Marie, Sainte-Suzanne.

🚀 [Voir le dashboard](https://gunout.github.io/cinor-monitor/) · 📊 [data.regionreunion.com](https://data.regionreunion.com)
</div>

---

## 🎯 Présentation

**Cinor Monitor** est un tableau de bord web autonome (HTML + JS + CSS, sans backend) pour le pilotage de la Communauté d'Agglomération du Nord.

Il agrège 3 sources :

- 🏛️ cinor.re — RPQS, Budget, ITI (PDF)
- 🌐 data.regionreunion.com — Santé, Permis, CAF, BP Région (APIs)
- 🚌 transport.data.gouv.fr — GTFS Car Jaune / Citalis

Le dashboard couvre **9 domaines métier** répartis en **25 sous-onglets**.

---

## ✨ Fonctionnalités

- 🌙 Thème sombre "cyber" avec police JetBrains Mono
- 📱 Responsive (desktop / tablette / mobile)
- 📈 Graphiques Chart.js (barres, lignes, doughnuts)
- 🗺️ Cartes Leaflet (marqueurs, clusters, polylignes)
- 📋 Tableaux interactifs (tri, scroll, tooltips)
- 🔢 KPI dynamiques en dégradé cyan
- 🚨 Module Alertes avec détection automatique
- 💾 Données JSON locales (aucun appel API pour les données CINOR)

---

## 🗂️ Modules

| Module | Icône | Contenu | Sous-onglets |
|---|:---:|---|:---:|
| Vue d'ensemble | 📊 | KPIs globaux | — |
| Alertes | 🚨 | Diagnostic automatique | 4 |
| Transport | 🚌 | GTFS + carte | 4 |
| Déchets | 🗑️ | RPQS + SINOE | 4 |
| Eau & Assainissement | 💧 | RPQS | — |
| Habitat | 🏘️ | Permis + CAF + logements | 4 |
| Santé | 🏥 | 104 établissements | 4 |
| Finances | 💰 | BP Région | 4 |
| Investissements | 🏗️ | Opérations CPER | Filtres + CSV |
| À propos | ℹ️ | Documentation | — |

### Contenu détaillé

**🏥 Santé** : 104 établissements de santé (cliniques, pharmacies, laboratoires, EHPAD, centres de dialyse), répartis sur les 3 communes de la CINOR.

**🏘️ Habitat** : Permis de construire, logements créés, surface habitable, bénéficiaires CAF.

**🏗️ Investissements** : Opérations CPER, coût HT, subventions, filtres par commune/domaine/période, export CSV.

---

## 🚀 Installation

### En ligne (GitHub Pages)

https://gunout.github.io/cinor-monitor/

### Local

    git clone https://github.com/gunout/cinor-monitor.git
    cd cinor-monitor
    python3 -m http.server 8060

Ouvrir : http://localhost:8060

### Déploiement

Le fichier index.html est 100% autonome. Compatible GitHub Pages, Netlify, Vercel, Cloudflare Pages.

---

## 📡 Sources de données

### 🏛️ CINOR (cinor.re)

- RPQS Déchets
- RPQS Eau Potable
- RAD Transports
- Budget

### 🌐 Région (data.regionreunion.com)

- sante.json — 104 établissements de santé
- liste-des-permis-de-construire — Permis
- beneficiaires-presta-sociales-caf — Bénéficiaires CAF
- bp_012020_lareunion — Budget Région

### 🚌 Transport (transport.data.gouv.fr)

- GTFS Car Jaune / Citalis

---

## 🛠️ Stack technique

| Composant | Technologie |
|---|---|
| Structure | HTML5 |
| Styles | CSS3 (variables, grid, flexbox) |
| Logique | JavaScript ES6+ (async/await) |
| Graphiques | Chart.js 4.4 |
| Cartes | Leaflet 1.9.4 |
| Clustering | Leaflet.markercluster 1.5.3 |
| Polices | JetBrains Mono + Inter |
| Tuiles cartes | OpenStreetMap |

### Charte graphique

| Rôle | Code |
|---|---|
| Fond principal | #050810 |
| Cartes | #0a0f1a |
| Accent cyan | #00e5ff |
| Succès vert | #00ff88 |
| Avertissement | #ffb800 |
| Erreur rouge | #ff3b3b |
| Info violet | #a855f7 |

---

## 📁 Structure du projet

    cinor-monitor/
    ├── index.html
    ├── README.md
    ├── LICENSE
    ├── .gitignore
    └── data-json/
        ├── sante.json
        ├── permis.json
        └── stats.json

---

## 🤝 Contribution

    git clone https://github.com/VOTRE_USERNAME/cinor-monitor.git
    cd cinor-monitor
    git checkout -b feature/mon-module
    python3 -m http.server 8060
    git commit -m "feat: ajout du module XYZ"
    git push origin feature/mon-module

### Convention de commits

- feat : Nouvelle fonctionnalité
- fix : Correction de bug
- docs : Documentation
- style : Formatage
- refactor : Refactoring
- perf : Performance
- chore : Maintenance

---

## 📄 Licence

MIT — voir [LICENSE](LICENSE)

---
<div align="center">
🌴 Fait avec ❤️ à La Réunion

Sources : cinor.re · data.regionreunion.com · transport.data.gouv.fr
</div>

---

<div align="center">

### 🇫🇷 Gunout · 2026

![Made in France](https://img.shields.io/badge/Made_in-France-002395?style=flat-square&labelColor=FFFFFF&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5MDAgNjAwIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzAwMjM5NSIvPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNDAwIiB5PSIxMDAiIGZpbGw9IiNmZmYiLz48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjIwMCIgeT0iNDAwIiBmaWxsPSIjZWQyOTM5Ii8+PC9zdmc+)
![GitHub](https://img.shields.io/badge/GitHub-gunout-181717?style=flat-square&logo=github&logoColor=white)
![Year](https://img.shields.io/badge/2026-ED2939?style=flat-square&labelColor=FFFFFF)

<sub>© 2026 <strong>Gunout</strong> — Tous droits réservés.</sub>

</div>
