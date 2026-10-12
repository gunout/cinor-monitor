// ============================================================
// Adaptateur : construit CINOR_ENRICHED à partir de CINOR_RAW
// Généré automatiquement le 2026-10-12T19:22:38.225Z
// ============================================================
window.addEventListener("cinor-ready", function () {
  if (!window.CINOR_RAW) {
    console.warn("⚠️  CINOR_RAW non chargé, CINOR_ENRICHED désactivé.");
    return;
  }
  const raw = window.CINOR_RAW;
  const E = {};

  // -------- EMPLOI --------
  if (Array.isArray(raw.emploi)) {
    const byCommuneRecords = {}, byCommuneStats = {}, byDate = {};
    raw.emploi.forEach(e => {
      if (!e) return;
      const cm = e.nom_de_la_commune || e.code_commune_insee || "Inconnue";
      const n = parseInt(e.inscrits, 10) || 0;
      if (!byCommuneRecords[cm]) byCommuneRecords[cm] = [];
      byCommuneRecords[cm].push(e);
      if (!byCommuneStats[cm]) byCommuneStats[cm] = { nom: cm, total: 0, dernier: null };
      byCommuneStats[cm].total += n;
      byCommuneStats[cm].dernier = { date: e.date, inscrits: n };
      byDate[e.date] = (byDate[e.date] || 0) + n;
    });
    E.emploi = { communes: Object.keys(byCommuneRecords), by_commune: byCommuneRecords, stats: byCommuneStats, evolution: byDate, raw: raw.emploi };
  }

  // -------- SPORTS --------
  if (Array.isArray(raw.sports)) {
    const byFamille = {}, byCommune = {};
    raw.sports.forEach(s => {
      const fam = s.famille_d_equipement_sportif || s.type_d_equipement_sportif || "Autre";
      const cm = s.commune || "Inconnue";
      if (!byFamille[fam]) byFamille[fam] = [];
      byFamille[fam].push(s);
      byCommune[cm] = (byCommune[cm] || 0) + 1;
    });
    E.sports = { communes: Object.keys(byCommune), by_commune: byCommune, by_famille: byFamille, raw: raw.sports };
  }

  // -------- CAF --------
  if (Array.isArray(raw.caf)) {
    const byType = {}, byYear = {};
    raw.caf.forEach(c => {
      if (!c) return;
      const t = c.type_prestation || "Autre";
      const y = String(c.date || "").substring(0, 4);
      if (!byType[t]) byType[t] = [];
      byType[t].push(c);
      if (y) byYear[y] = (byYear[y] || 0) + 1;
    });
    E.caf = { by_type: byType, types: Object.keys(byType), years: Object.keys(byYear).sort(), by_year: byYear, raw: raw.caf };
  }

  // -------- PERMIS --------
  if (Array.isArray(raw.permis)) {
    const totalLogts = raw.permis.reduce((s, p) => s + (parseInt(p.nb_lgt_tot_crees, 10) || 0), 0);
    const totalSurf  = raw.permis.reduce((s, p) => s + (parseFloat(p.surf_hab_creee) || 0), 0);
    const byCommune = {}, byYear = {};
    raw.permis.forEach(p => {
      const cm = p.nom_de_la_commune || "Inconnue";
      const y = String(p.date_reelle_autorisation || "").substring(0, 4);
      byCommune[cm] = (byCommune[cm] || 0) + 1;
      if (y && y.length === 4 && !isNaN(Number(y))) byYear[y] = (byYear[y] || 0) + 1;
    });
    E.permis = { raw: raw.permis, totalLogts, totalSurf, by_commune: byCommune, by_year: byYear, years: Object.keys(byYear).sort() };
  }

  // -------- SANTE --------
  if (Array.isArray(raw.sante)) {
    const byCategorie = {}, byCommune = {};
    raw.sante.forEach(s => {
      const c = s.libcategetab || "Autre";
      const cm = s.com_name || s.commune || "Inconnue";
      if (!byCategorie[c]) byCategorie[c] = [];
      byCategorie[c].push(s);
      byCommune[cm] = (byCommune[cm] || 0) + 1;
    });
    E.sante = { raw: raw.sante, categories: Object.keys(byCategorie), by_categorie: byCategorie, by_commune: byCommune, communes: Object.keys(byCommune) };
  }

  // -------- TRANSPORT --------
  E.transport = { routes: raw.routes || [], stops: raw.stops || [], shapes: raw.shapes || {} };

  // -------- STATS / META --------
  E.stats = raw.stats || {};
  E.meta  = raw.meta  || {};

  window.CINOR_ENRICHED = E;
  console.log("✅ CINOR_ENRICHED construit :", Object.keys(E));
});
