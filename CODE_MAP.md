# 🗺️ CODE_MAP — FINEA.html

Carte de navigation du fichier unique `FINEA.html` (~43 480 lignes).
Établie le 2026-07-05. Les numéros de ligne **dérivent à chaque édition** —
pour naviguer sans risque, fais **Cmd-F sur le titre de bannière** (chaque
section a une bannière `═══` unique). Pour régénérer les numéros, voir
[« Régénérer cette carte »](#régénérer-cette-carte) en bas.

> ⚠️ Réorganisation **physique** des modules prévue **post-lancement** (14/07).
> Aujourd'hui les modules sont dispersés ; cette carte les remet dans l'ordre logique.

---

## 1. Structure macro (4 zones)

| Zone | Lignes | Rôle |
|---|---:|---|
| `<head>` + libs | 1–12 | html2canvas, jsPDF (CDN) |
| **CSS** (`<style>`) | 13–13843 | tout le style (~13 800 l.) |
| CSS a11y contraste | 13844–13885 | override `--gold-ink` (FIN-007) |
| **HTML** (`<body>`) | 13887–15998 | markup des écrans/modales (~2 100 l.) |
| **JS principal** (`<script>`) | 16533–41764 | toute l'app (~25 000 l.) |
| JS auxiliaires | 41881–43477 | feedback, pricing V3, page Architecte, cookies, NPS, waitlist |

Routage dynamique (important à comprendre avant de toucher au JS) : beaucoup de
fonctions sont appelées **par leur nom en chaîne** via `window[nom]()`, à partir
de tables de config : `QUICK_GUIDE_ROUTES`, `_NAV_FN_TO_ROUTE`,
`_FINEA_OVERLAY_RENDERERS`, `moduleAction`. ⇒ une fonction « jamais appelée » en
apparence peut l'être dynamiquement. **Ne jamais supprimer sans vérifier ces tables.**

---

## 2. CSS — `<style>` (13–13843)

| Ligne | Section (Cmd-F) |
|---:|---|
| 398 | PRICING dédié |
| 944 | NAV — état connecté |
| 991 | AUTH MODAL |
| 1174 | MON ESPACE (DASHBOARD CONNECTÉ) |
| 1410 | ACTIONS RAPIDES — Catégories |
| 1780 | DIAGNOSTIC MODAL |
| 2113 | LEGAL MODAL |
| 2185 | PDF LOADER OVERLAY |
| 2217 | WELCOME SCREEN |
| 2347 | FOYER MANAGEMENT |
| 2740 | MES PARTAGES |
| 2861 | FOYER 360 |
| 3206 | MODULE M1 — BUDGET |
| 3315 / 3448 | SCORE PRÉCISION 50% / 100% |
| 3802 / 4279 | PDF TEMPLATE 3p / PDF 5 PAGES |
| 5393 / 5648 / 5835 / 6005 / 6200 / 6384 | OUTILS T2 / T3 / T5 / T4 / T6 / T7 |
| 6570 | DASHBOARD DE BASE |
| 6810 | MODULE SWITCHER |
| 7017 | DASHBOARD COMPLET (DBF) |
| 7325 | LE RITUEL |
| 7690 | SIMULATEUR PER |
| 7975 | MODULE APPRENDRE |
| 8418 | FEEDBACK MODULE |
| 11881 | REFONTE RESPONSIVE MOBILE (dernier dans la cascade) |
| 12070 | BLOC 6 — Page Architecte |
| 12505 | Voyage long-form |
| 13505 | Iconographie + Pricing (PASS 1) |
| 13846 | **FIN-007 — contraste `--gold-ink`** |

## 3. HTML — `<body>` (13887–15998)

| Ligne | Écran / modale |
|---:|---|
| 13890 | Bibliothèque iconographique (SVG sprites) |
| 14947 | LEGAL MODAL |
| 14965 | AUTH MODAL |
| 15120 | WELCOME SCREEN |
| 15129 | MON ESPACE DASHBOARD |
| 15292 / 15369 / 15392 | FOYER / FOYER 360 / MES PARTAGES |
| 15430 | INVITE PROMPT MODAL |
| 15452 | CATEGORY MODAL |
| 15481 | MODULE M1 — BUDGET |
| 15633 | DIAGNOSTIC MODAL |
| 15659 | SCORE PRÉCISION 50% / 100% / 360° |
| 15695 | PDF — zone de rendu cachée |

## 4. JS principal — `<script>` (16533–41764)

### Socle / système
| Ligne | Section (Cmd-F) |
|---:|---|
| 16535 | **CARTE DU FICHIER** (index in-file) |
| 16579 | COUCHE INTÉGRATION BACKEND — `FINEA_CONFIG` |
| 16733 | `FineaAccess` — gate paywall |
| 16855 | PAYWALL |
| 17288 | DONNÉES DU DIAGNOSTIC (5 axes) |
| 17694 | FINEA PROFILES |
| 17936 | LOT E — Tunnel souscription (`OFFER_KEY_TO_NIVEAU`) |
| 18895 | OFFRES & MODULES (`OFFERS`) |
| 18944 | `FINEA_FISCAL_CONFIG` — vérité fiscale |
| 19165 | AUTH SYSTEM |
| 20217 | GOOGLE SIGN-IN (Supabase) |
| 20949 | DASHBOARD RENDERING |
| 23188 | MON ESPACE — tableau de bord |
| 23585 | ACTIONS RAPIDES — catégories dynamiques |
| 35637 | DASHBOARD DE BASE |
| 35956 | MODULE SWITCHER |
| 36003 | GATE CENTRAL DES MODULES PAYANTS |
| 36028 | Centre de Notifications |
| 36225 / 39024 | Stack de navigation / Sprint 7 nav history |
| 39194 | Historisation score |
| 39210 | GESTE → PREUVE → IDENTITÉ |
| 39410 | DASHBOARD COMPLET (DBF) |

### Foyer / partage
| Ligne | Section |
|---:|---|
| 21229 / 22018 | FOYER — gestion / FOYER 360 |
| 21626 | MES PARTAGES |

### Apprentissage
| Ligne | Section |
|---:|---|
| 23805 | MODULE M1 — BUDGET |
| 30076 | GUIDES RAPIDES |
| 36567 | MODULE APPRENDRE — Parcours + Bibliothèque |
| 38026 | ACADÉMIE — fin de parcours |

### ⚠️ Simulateurs (physiquement dispersés — ordre logique ci-dessous)
| Module | Ligne actuelle | Cmd-F |
|---|---:|---|
| S1 — Comparateur d'enveloppes | 34293 | `S1 — COMPARATEUR` |
| S2 — Achat vs location | 33808 | `S2 — ACHAT` |
| S3 — Bilan patrimonial | 34780 | `S3 — BILAN` |
| S4 — Simulateur fiscal | 32803 | `S4 — SIMULATEUR FISCAL` |
| S5 — Stress test | 33345 | `S5 — STRESS` |
| S6 — Holding pédagogique | 32481 | `S6 — HOLDING` |
| PER & plafonds | 40660 | `SIMULATEUR PER` |

### ⚠️ Outils (dispersés)
| Module | Ligne | Cmd-F |
|---|---:|---|
| T2 — Désendettement | 26180 | `T2 — DÉSENDETTEMENT` |
| T3 — Coussin | 26538 | `T3 — COUSSIN` |
| T4 — Trajectoire | 27033 | `T4 — TRAJECTOIRE` |
| T5 — Salaire réel | 26782 | `T5 — SALAIRE` |
| T6 — Projet de vie | 27249 | `T6 — PROJET` |
| T7 — Transition pro | 35379 | `T7 — TRANSITION` |

### ⚠️ Architecte / Cockpit (dispersés)
| Module | Ligne | Cmd-F |
|---|---:|---|
| A2 — Fiscalité pluriannuelle | 27586 | `A2 — FISCALITÉ` |
| A3 — Transmission | 28165 | `A3 — ARCHITECTURE` |
| A4 — Decision OS | 28714 | `A4 — DECISION OS` |
| D1 — Patrimoine 360 | 31598 | `D1 — PATRIMOINE` |
| D2 — Cockpit décision | 30963 | `D2 — COCKPIT` |
| D3 — Foyer étendu | 29294 | `D3 — FOYER` |

### PDF / Rituel
| Ligne | Section |
|---:|---|
| 25148 | PDF GENERATOR — 3 pages « Déclic » |
| 25380 | PDF 5 PAGES — Maîtrise |
| 39931 | LE RITUEL — bilan mensuel |

## 5. JS auxiliaires (41881–43477)
| Ligne | Section |
|---:|---|
| 41883 | FEEDBACK MODULE (bêta) |
| 42130 | V3 PRICING + LANDING — compléments |
| 42953 | BLOC 6 — PAGE ARCHITECTE dédiée |
| 43187 | BANDEAU COOKIES / RGPD |
| 43251 | NPS + PARTAGE SOCIAL |
| 43422 | LISTE D'ATTENTE BÊTA |

---

## 6. Code mort — candidats pour la passe post-lancement (NE PAS supprimer à l'aveugle)

L'analyse statique (`scratchpad/deadcode.py`) a listé 317 classes CSS et 32
fonctions « non référencées ». **La suppression a été REPORTÉE en phase 2** car
l'analyse statique n'est pas fiable ici :
- **CSS** : des classes sont construites dynamiquement (`'auth-deco-demo-tier--'+tier`) → « non référencée » ≠ morte. **Ne pas purger le CSS par script.**
- **JS** : plusieurs « fonctions mortes » sont en fait des **IIFE** qui s'exécutent (`(function _wireForgotPassword(){…})()`), et le dispatch `window[nom]()` peut appeler par nom construit.

**Procédure phase 2 (par fonction, avant suppression) :** (1) vérifier que ce
n'est pas une IIFE ; (2) grep du nom dans tout le fichier + dans les tables
`QUICK_GUIDE_ROUTES` / `_NAV_FN_TO_ROUTE` / `_FINEA_OVERLAY_RENDERERS` ;
(3) supprimer ; (4) recharger l'app et re-tester l'écran concerné.

**Cluster le plus probable (legacy, système d'invitation local pré-Supabase)** —
à tracer en premier : `createPendingInvite`, `listPendingInvitesForEmail`,
`revokePendingInvite` (remplacés par les Edge Functions serveur).
Autres candidats getters/setters : `s1SetHorizon/Objectif/Tmi`, `a2/a3/a4 GetSummary`/`Reset`, `d1/d3 GetSummary`, `getM1Data`, `dbfDonutSvg`, `_a2Esc`, `t1Key`, `_ritKey`, `hasActiveGrant`, `upgradeMyOffer`.
**Exclure** (IIFE / live) : `_wireForgotPassword`, `_detectPasswordRecovery`, et tout `(function X(){…})()`.

---

## Régénérer cette carte
Numéros de section :
```
awk 'prev ~ /═══/ && $0 ~ /[A-Za-zÀ-ÿ]/ {t=$0; gsub(/^[ \t*<!-]+|[ \t]+$/,"",t); print NR"|"t} {prev=$0}' FINEA.html
```
Frontières `<style>`/`<script>` : `grep -noE '<(style|/style|script|/script|body)[ >]' FINEA.html`
