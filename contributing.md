# Contributing to Yummy Mummy

First — thank you. Yummy Mummy exists to support South African mothers through one of the most difficult experiences a person can face. Every contribution, large or small, directly affects real women and their families.

This guide explains how to contribute effectively regardless of your background — whether you are a developer, a translator, a healthcare professional, or a mother with lived experience of PPD.

---

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Before You Start](#before-you-start)
- [For Translators](#for-translators)
- [For Developers](#for-developers)
- [For Healthcare Professionals](#for-healthcare-professionals)
- [For Mothers with Lived Experience](#for-mothers-with-lived-experience)
- [Code of Conduct](#code-of-conduct)
- [Pull Request Process](#pull-request-process)
- [Issue Labels](#issue-labels)

---

## Ways to Contribute

You do not need to write code to contribute meaningfully. Here is what we need most:

| Contribution type | Skills needed | Time commitment |
|---|---|---|
| Translate affirmations or UI text | Fluency in a SA language | Low — a few hours |
| Review existing translations | Native speaker of a SA language | Low |
| Report a bug | Ability to describe what went wrong | Very low |
| Suggest or write new affirmations | Empathy, cultural awareness | Low |
| Review resource content for clinical accuracy | Healthcare background | Medium |
| Fix a bug or add a feature | HTML, CSS, JavaScript | Medium to high |
| Improve accessibility | Web accessibility knowledge | Medium |
| Community moderation guidance | Social work or mental health background | Low to medium |

---

## Before You Start

1. **Check existing issues** before opening a new one — your idea or bug may already be tracked
2. **Open an issue before a pull request** for anything beyond a small typo fix — this lets us discuss the change before you invest time building it
3. **Read the [README](README.md)** to understand the project's priorities: offline access, cultural inclusivity, and clinical safety
4. **Be mindful of the audience** — every word in this app may be read by a mother in crisis. Please bring care and thoughtfulness to all contributions

---

## For Translators

Translation is one of the most valuable contributions you can make. Many mothers are more comfortable in their home language, and reading an affirmation in isiZulu or Sesotho can feel meaningfully different from reading it in English.

### What needs translating

- **Affirmations** — gentle, affirming phrases for mothers (currently partial coverage across 11 languages)
- **UI labels** — navigation items, buttons, headings (currently English only in the interface)
- **Resource text** — PPD education content, prevention and treatment guidance
- **EPDS questions** — the Edinburgh Postnatal Depression Scale questions and answer options

### How to contribute a translation

1. Open a new Issue using the **Translation** template
2. Specify the language and which section you are translating
3. If you are translating affirmations, please note:
   - Use warm, gentle, conversational language — not formal or clinical
   - Avoid idioms that do not translate naturally — a simple true phrase is better than a clever one
   - If a direct translation feels unnatural, a culturally equivalent phrase is preferred
4. Submit your translation via pull request with changes to `index.html` or a separate translations file if one has been created

### A note on clinical content

If you are translating the EPDS questions or the resource/education sections, please flag if you are not a healthcare professional — we will ask a clinician to review those translations before they go live.

---

## For Developers

### Tech stack

Yummy Mummy is intentionally simple:

- **Single HTML file** (`index.html`) — no build tools, no frameworks, no dependencies
- **Vanilla JavaScript** — no npm, no bundler
- **CSS custom properties** for theming
- **localStorage** for offline data persistence
- **Service Worker** (`sw.js`) for PWA offline caching
- **PWA manifest** (`manifest.json`) for installability

This simplicity is a feature, not a limitation. It means the app loads fast on low-end Android devices over slow connections, and works without any server infrastructure.

### Setting up locally

```bash
git clone https://github.com/cindyleahphoto-ctrl/yummy-mummy.git
cd yummy-mummy

# Serve locally — any simple server works
npx serve .
# or
python3 -m http.server 8080
# then open http://localhost:8080
```

Note: The Service Worker requires HTTPS or `localhost` to function. For testing offline behaviour use `localhost`, not a local IP address.

### Development principles

Please keep these in mind when writing code for this project:

- **Offline first** — any feature must work without a network connection
- **Low-end device friendly** — target Android devices with 1–2GB RAM and small screens; avoid heavy animations or large assets
- **No external runtime dependencies** — do not add npm packages, CDN scripts, or API calls that require internet access for core functionality
- **Accessibility matters** — use semantic HTML, ensure sufficient colour contrast, and test with screen readers where possible
- **Data minimisation** — do not collect or transmit personal data without explicit user consent and a clear purpose
- **Single file constraint** — keep the app as a single `index.html` unless there is a compelling reason to split it. This makes deployment and offline caching dramatically simpler

### Good first issues

Look for issues labelled `good first issue` — these are well-scoped tasks suitable for newcomers to the codebase.

---

## For Healthcare Professionals

Clinical accuracy is non-negotiable in a mental health app. If you are a nurse, midwife, social worker, psychiatrist, psychologist, or community health worker, your input is invaluable.

We especially welcome review and input on:

- **EPDS score interpretation thresholds and referral guidance** — are the score bands and recommended actions clinically appropriate for a South African primary care context?
- **Resource content accuracy** — are the descriptions of PPD symptoms, treatment options, and support services correct and current?
- **Crisis referral pathways** — are the crisis line numbers correct and the guidance appropriate?
- **Postpartum psychosis** — should this be addressed more explicitly within the app?
- **Cultural considerations** — are there cultural factors specific to South African communities that affect how PPD presents or is experienced, which the app should acknowledge?

Please open an issue labelled `clinical-review` or reach out directly if you would like to contribute in this capacity.

**Important:** Any changes to EPDS content, scoring, clinical guidance, or crisis pathways must be reviewed by at least one qualified healthcare professional before merging.

---

## For Mothers with Lived Experience

Your perspective is the most important one. If you have experienced postpartum depression — in South Africa or elsewhere — you understand things no textbook captures.

We welcome contributions in the form of:

- Feedback on whether the app's tone feels supportive and non-judgmental
- Suggestions for affirmations that resonated with you personally
- Feedback on whether the community circle feels safe and welcoming
- Any moment in the app that made you feel judged, dismissed, or misunderstood

You can share this via a GitHub Issue (you can do so anonymously with a throwaway account) or by emailing the project.

Your wellbeing comes first. Please only engage with this project when you are in a good place to do so. This work can be emotionally heavy — take care of yourself.

---

## Code of Conduct

This project is committed to being a welcoming space for everyone, particularly for people with lived experience of mental illness. We expect all contributors to:

- Be respectful and kind in all interactions
- Use inclusive, non-stigmatising language around mental health
- Respect that contributors may include mothers who are currently struggling
- Never dismiss, minimise, or mock experiences of PPD or maternal mental health challenges
- Respect the privacy of anyone who shares personal experiences in Issues or Discussions

Behaviour that violates these principles will result in removal from the project.

---

## Pull Request Process

1. Fork the repository and create a branch: `git checkout -b your-feature-name`
2. Make your changes
3. Test on at least one mobile browser (Chrome on Android is the primary target)
4. Test that the app still works offline after your changes (disable network in DevTools)
5. Submit a pull request with a clear description of what changed and why
6. Link the relevant Issue in your PR description
7. Be responsive to review feedback — PRs with no response for 30 days may be closed

For translation PRs, please also confirm in the PR description that you are a fluent or native speaker of the language.

---

## Issue Labels

| Label | Meaning |
|---|---|
| `good first issue` | Suitable for new contributors |
| `translation` | Language or content localisation |
| `clinical-review` | Requires healthcare professional input before merging |
| `accessibility` | Screen reader, contrast, motor accessibility |
| `offline` | Service Worker or PWA caching related |
| `community-circle` | Community feed feature |
| `journal` | Journal feature |
| `epds` | EPDS screening feature |
| `resources` | Educational resource content |
| `dashboard` | Healthcare worker dashboard (separate repo) |
| `bug` | Something is broken |
| `enhancement` | New feature or improvement |

---

*Thank you for helping us support South African mothers. Your contribution matters. 🌸*
