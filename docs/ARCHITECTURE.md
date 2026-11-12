# Pulsar architecture

Pulsar is a front-end concept: a SaaS analytics dashboard with simulated data and interactive charts.

## Components

| Part | What it does |
| --- | --- |
| `src/App.jsx` | Dashboard layout: sidebar, top bar, welcome banner, metric cards, charts, table, feed |
| `WelcomeBanner.jsx` | Explains that the data is simulated; links to the portfolio |
| `MetricCard.jsx` | KPI tiles |
| `RevenueChart.jsx`, `TrafficDonut.jsx`, `UserBarChart.jsx` | Charts drawn with Chart.js 4 through react-chartjs-2 |
| `CustomerTable.jsx`, `ActivityFeed.jsx` | Lists fed from `src/data.js` |
| `api/metrics.php` | Optional PHP endpoint for local experiments; the live site doesn't use it |

## Data flow

All numbers come from `src/data.js` and are generated in the browser. There are no API calls on the live site.

## Hosting

GitHub Pages through `.github/workflows/deploy.yml` on every push to `main`. Vite's `base` is `/pulsar-dashboard/`.

## Key decisions

- **Simulated data.** It shows the dashboard UI without a backend or any real accounts.
- **Chart.js** for canvas charts with tooltips and legends that work without much custom code.

## Links

- Live demo: https://youssefabotaleb20.github.io/pulsar-dashboard/
- Portfolio (the site this demo is shown on): https://youssefabotaleb20.github.io/Portfolio/
- Every "View my portfolio" or "Built by Youssef Abotaleb" link in the demo points to the portfolio. There are no Linktree links any more (changed 2026-11-12).
