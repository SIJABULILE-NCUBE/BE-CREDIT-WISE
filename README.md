# Creditwise

Take control of your money with AI-powered financial insights.

## About this project

Creditwise is a personal finance and credit health dashboard concept, built to demonstrate
frontend engineering skill alongside real domain knowledge from credit risk.

This isn't just a generic budgeting app clone. The features are shaped by over a decade in
financial services, including:

- **Credit Risk Specialist experience (Absa Group)** - the debt-to-income ratio card on the
  dashboard, the credit health factor breakdown, and the affordability-style language in the
  AI Insights all reflect how a real risk analyst reads a file, not just a generic "your score
  went up" message.
- **5 years in Absa Vehicle Finance** (applications, document validation, contract drawing and
  checking, payout and release of funds) - the sample data models vehicle finance as the
  largest fixed monthly obligation, and the insights explain how that weighs on future
  affordability, the same conversation had daily in that role.
- **Forensic and Investigative Auditing certificate (NQF 6)** - the Transactions page flags
  transactions that break a normal spending pattern (unfamiliar merchant, duplicate debit
  order) for review, rather than presenting every line item as equally routine.
- **RE5 and NCA certification** - the language throughout stays compliant and non-alarmist:
  flagged items are framed as "worth a second look," not accusations, and affordability
  guidance references NCA-style thresholds rather than made-up rules.

## Tech stack

- React 19 + TypeScript
- Vite
- Tailwind CSS
- React Router
- Recharts (charts)
- Framer Motion (animation)
- Lucide React (icons)

## Design

A "ledger" visual identity rather than a generic dark fintech dashboard: deep charcoal-ink
background, warm parchment-white text, and a single restrained verified-green accent used only
for healthy/approved states, with amber for caution and red for flagged items. Numbers are set
in a monospace face so they always look exact and auditable. AI Insight cards are styled like
annotated case-file notes with a small "reviewed / flagged / opportunity" stamp, a nod to years
spent reviewing physical credit files.

## Running locally

```
npm install
npm run dev
```

Build for production:

```
npm run build
```

The dist/ folder can be deployed to Netlify, Vercel, or GitHub Pages like any static React app.

## Notes

All financial data in this build is mock data for demonstration purposes. There is no real
backend, authentication, or bank integration - login/signup routes straight through to the
dashboard so the full app can be explored without setup.
