# Security Policy — Yummy Mummy

## Our Commitment

Yummy Mummy is a health application used by vulnerable mothers experiencing postpartum depression. We take security seriously — not just as a technical matter, but as a matter of care for the women who trust this app. A security flaw in a mental health tool can have real human consequences, and we are grateful to anyone who takes the time to report issues responsibly.

---

## Supported Versions

| Version | Supported |
|---|---|
| Latest (`main` branch) | ✅ Active support |
| Older tagged releases | ⚠️ Critical fixes only |

We are a small open-source project. Please always test against the latest `main` branch before reporting.

---

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub Issues.**

If you discover a security vulnerability, please report it privately so we can address it before it is publicly known. This protects the mothers using the app.

### How to report

**Option 1 — GitHub Private Vulnerability Reporting (preferred)**
Use GitHub's built-in private reporting:
> Repository → Security tab → "Report a vulnerability"

**Option 2 — Email**
Send details to: **cindylawuor@gmail.com**

Please use the subject line: `[SECURITY] Yummy Mummy — Brief description`

---

## What to Include in Your Report

To help us triage and fix the issue quickly, please include:

- A clear description of the vulnerability
- Steps to reproduce the issue
- The potential impact (who could be affected and how)
- Any suggested fix or mitigation if you have one
- Whether you have tested this on a real device or browser

---

## What Happens After You Report

1. We will acknowledge your report within **72 hours**
2. We will investigate and keep you updated on our findings
3. We will work on a fix and aim to release it within **14 days** for critical issues
4. We will credit you in the release notes (unless you prefer to remain anonymous)
5. We will coordinate with you on public disclosure timing

We follow a **90-day responsible disclosure** policy. After 90 days from our acknowledgement, you are free to publish your findings regardless of whether a fix has been released, though we hope to resolve things well before that.

---

## Scope

### In scope — please report these

- Vulnerabilities that could expose or leak user journal entries or EPDS scores
- Cross-site scripting (XSS) in the community circle or journal features
- Issues that could allow one user to access another user's locally stored data
- Any flaw in the healthcare dashboard that could expose patient identifiers or EPDS results
- Vulnerabilities in the Service Worker or PWA manifest that could be exploited
- Issues with how the app handles or displays user-submitted content

### Out of scope — please do not report these

- Theoretical attacks with no practical exploit path
- Issues in third-party libraries that are already publicly known upstream (report those to the library maintainers directly)
- Social engineering attacks against project maintainers
- Denial of service attacks against GitHub Pages hosting
- Missing security headers on GitHub Pages (outside our control)
- The fact that `localStorage` is accessible to the device owner — this is by design, as the app is intended for personal use on a personal device

---

## A Note on Clinical Safety

If you discover content in the app that is **clinically incorrect, potentially harmful, or gives dangerous mental health guidance**, please also report this — even if it is not a technical security issue. Use the same reporting channels above with the subject line `[CLINICAL] Yummy Mummy — Brief description`.

Examples of things we want to know about:
- Incorrect EPDS scoring or interpretation
- Crisis resources that are out of date or incorrect
- Affirmations or resource text that could be harmful to someone in crisis
- Missing or inadequate referral guidance for high EPDS scores

---

## Thank You

We are a small team building this for the public good. Responsible disclosure from the security community helps us protect the mothers who rely on this app. We genuinely appreciate your help.
