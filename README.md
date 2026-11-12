# 📊 Pulsar — SaaS Analytics Dashboard (Portfolio Project 3)

A full-featured SaaS analytics dashboard built with **React + Vite + Tailwind CSS + Chart.js**,
with a PHP backend for live metrics.

**Live demo:** https://youssefabotaleb20.github.io/pulsar-dashboard/ · Part of [Youssef Abotaleb's portfolio](https://youssefabotaleb20.github.io/Portfolio/)


## Stack
- **Frontend:** React 18, Vite 5, Tailwind CSS 3, Chart.js 4, react-chartjs-2
- **Backend:** PHP 8+ (analytics metrics API)
- **Fonts:** Space Mono, Plus Jakarta Sans (Google Fonts)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the frontend
```bash
npm run dev
# → http://localhost:5173
```

### 3. Run the PHP API (optional)
```bash
php -S localhost:8000 -t api/
```

### 4. Build for production
```bash
npm run build
```

## Project Structure
```
pulsar-dashboard/
├── api/
│   └── metrics.php          ← Analytics endpoints (GET)
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── MetricCard.jsx
│   │   ├── RevenueChart.jsx  ← Line chart (Chart.js)
│   │   ├── TrafficDonut.jsx  ← Doughnut chart (Chart.js)
│   │   ├── UserBarChart.jsx  ← Bar chart (Chart.js)
│   │   ├── CustomerTable.jsx
│   │   └── ActivityFeed.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## API Endpoints
| Endpoint | Returns |
|---|---|
| `GET /api/metrics.php` | Summary KPIs |
| `GET /api/metrics.php?type=revenue` | Revenue time-series |
| `GET /api/metrics.php?type=traffic` | Traffic source breakdown |
| `GET /api/metrics.php?type=users` | Recent user activity |
| `GET /api/metrics.php?type=customers` | Customers table |

## Customisation
- Replace static data in each component with `useEffect` + `fetch('/api/metrics.php')` calls
- Connect MySQL in `api/metrics.php` to serve real data
- Add authentication middleware to the PHP API for production
