# 🌸 Yummy Mummy — Postpartum Depression Support App

> *A free, offline-capable mobile web app supporting South African mothers through postpartum depression.*

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blueviolet.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![Content License: CC BY-NC-SA 4.0](https://img.shields.io/badge/Content-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![PWA Ready](https://img.shields.io/badge/PWA-Offline%20Ready-pink.svg)]()
[![Languages](https://img.shields.io/badge/Languages-11%20South%20African-orange.svg)]()

---

## About

Yummy Mummy is a Progressive Web App (PWA) designed to support South African mothers experiencing postpartum depression (PPD). It was built with three priorities at its core:

- **Accessibility** — works without data or WiFi once installed
- **Cultural inclusivity** — available in all 11 official South African languages
- **Clinical integration** — designed to connect with a healthcare worker dashboard for professional monitoring

Postpartum depression affects approximately 1 in 5 South African mothers, and is significantly underdiagnosed — particularly in under-resourced communities. Yummy Mummy aims to reduce that gap.

---

## Features

| Feature | Description |
|---|---|
| 🏠 **Home & Mood Tracker** | Daily check-in, affirmation, and quick access to all tools |
| 📔 **Private Journal** | Offline-stored personal journal with mood tagging |
| 📋 **EPDS Screening** | Full Edinburgh Postnatal Depression Scale (10 questions, scored, with referral guidance) |
| 📚 **Resources** | Education on PPD prevention, detection, treatment options in South Africa |
| ✨ **Gentle Words** | Affirmations in all 11 official South African languages |
| 🌬️ **Breathing Exercise** | Guided 4-2-6 calming breath tool |
| 🏥 **Healthcare Dashboard** | Separate clinician view for monitoring patient EPDS scores and risk levels |

---

## Languages Supported

All 11 official South African languages are included in the language selector and affirmations:

isiZulu · isiXhosa · Afrikaans · Sesotho · Setswana · Xitsonga · Tshivenḓa · siSwati · isiNdebele (Northern) · isiNdebele (Southern) · English

---

## Offline Capability

Yummy Mummy is a PWA. Once a mother visits the app over any connection and taps **"Add to Home Screen"**, the full application is cached and runs entirely without internet or mobile data. All journal entries, EPDS results, and settings are stored locally on the device using `localStorage`.

This was a core design requirement — many South African mothers in peri-urban and rural communities have limited or expensive data access.

---

## File Structure

```
yummy-mummy/
├── index.html          # Main app (all features in a single file)
├── dashboard.html      # Healthcare worker monitoring dashboard
├── sw.js               # Service Worker — enables offline use
├── manifest.json       # PWA manifest — enables "Add to Home Screen"
├── LICENSE             # AGPL-3.0 (code)
├── LICENSE-CONTENT.md  # CC BY-NC-SA 4.0 (content)
└── README.md
```

---

## Getting Started

### Deploy in under 5 minutes (free)

**Option 1 — GitHub Pages:**
1. Fork this repository
2. Go to Settings → Pages → Deploy from branch → `main` → `/root`
3. Your app will be live at `https://yourusername.github.io/yummy-mummy`

**Option 2 — Netlify:**
1. Drag the project folder onto [netlify.com/drop](https://app.netlify.com/drop)
2. Done — live instantly with a free URL

**Option 3 — Any web server:**
Serve the files from any directory. No build step, no dependencies, no Node.js required.

### For offline use (mothers' devices)
1. Share the URL with mothers
2. They open it in Chrome (Android) or Safari (iOS)
3. They tap "Add to Home Screen"
4. The app installs and works permanently without data

---

## Healthcare Dashboard

`dashboard.html` is a standalone clinician interface intended to be hosted separately (behind authentication) for healthcare workers. It displays:

- EPDS scores and risk levels per patient
- Alert flags for scores ≥ 13
- Engagement statistics (journal activity, community posts)
- Follow-up action queue

**Note:** The dashboard in this repository uses static demo data. To connect it to real patient data, you will need to build a backend API and authentication layer. Patient data should never be stored unencrypted or without informed consent. See the [Privacy & Clinical Use](#privacy--clinical-use) section below.

---

## Privacy & Clinical Use

- All journal entries and EPDS results are stored **on the user's device only** in this version — nothing is sent to any server
- EPDS results can optionally be submitted to a connected healthcare backend (to be implemented by deploying organisation)
- This app is **not a diagnostic tool** — the EPDS is a screening instrument. A score should always be followed up by a qualified healthcare professional
- Community posts in the current version are stored locally. A production deployment with real community features requires a moderated backend and clear community guidelines
- Any deployment collecting personal health data must comply with the **Protection of Personal Information Act (POPIA)** and applicable health regulations in South Africa

---

## Roadmap

- [ ] Backend API for EPDS result submission to healthcare dashboard
- [ ] Push notifications for daily check-in reminders (with user consent)
- [ ] Full translation of all app text (currently affirmations are multilingual; full UI translation in progress)
- [ ] Audio affirmations for low-literacy users
- [ ] USSD fallback for feature phones with no data or smartphone access
- [ ] Integration with South African public health clinic systems (PHCIS)
- [ ] Peer moderator tools for community circle

---

## Contributing

Contributions are warmly welcomed — especially from:

- Mental health professionals and social workers familiar with PPD in South African communities
- Translators for any of the 11 official languages
- Developers with PWA, accessibility, or low-bandwidth optimisation experience
- Community health workers with insight into barriers to care

Please open an issue before submitting a pull request so we can discuss the change. All contributors must agree to uphold the spirit of this project: free, accessible, non-commercial support for mothers.

---

## Crisis Resources — South Africa

These are displayed prominently within the app and listed here for reference:

| Resource | Contact |
|---|---|
| SADAG Mental Health Crisis Line | 0800 456 789 (24hrs, free) |
| SADAG Suicide Crisis Line | 0800 567 567 |
| SADAG SMS Line | 31393 |
| SADAG General Support | 0800 21 22 23 (Mon–Fri 8am–8pm) |
| Postpartum Support International | postpartum.net |

---

## License

**Code:** GNU Affero General Public License v3.0 — see [`LICENSE`](LICENSE)

**Content** (affirmations, educational text, resource descriptions): Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International — see [`LICENSE-CONTENT.md`](LICENSE-CONTENT.md)

---

## Acknowledgements

- Edinburgh Postnatal Depression Scale (EPDS) — developed by Cox, Holden & Sagovsky (1987), in the public domain for clinical and research use
- South African Depression and Anxiety Group (SADAG) — for crisis line numbers and South African PPD context
- The mothers who inspired this project — your strength matters

---

*Built with love for South African mothers. 🌸*
