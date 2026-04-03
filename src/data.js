// ── Mock data for the Pulsar dashboard ──────────────────────────────────────
// Replace with real API calls (see api/metrics.php)

export const METRICS = [
  {
    id: 'revenue',
    label: 'Total Revenue',
    value: '$48,290',
    change: '+18.2%',
    direction: 'up',
    color: 'cyan',
    icon: '$',
  },
  {
    id: 'users',
    label: 'Active Users',
    value: '3,842',
    change: '+6.4%',
    direction: 'up',
    color: 'green',
    icon: '◉',
  },
  {
    id: 'churn',
    label: 'Churn Rate',
    value: '2.4%',
    change: '+0.3%',
    direction: 'down',
    color: 'red',
    icon: '↓',
  },
  {
    id: 'session',
    label: 'Avg Session',
    value: '4m 32s',
    change: '+12.1%',
    direction: 'up',
    color: 'purple',
    icon: '◷',
  },
]

export const REVENUE_CHART = {
  labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  revenue: [22000, 26000, 24500, 31000, 28000, 35000, 38000, 44000, 48290],
  users:   [1800,  2100,  1950,  2400,  2200,  2800,  3000,  3500,  3842],
  sessions:[4200,  5100,  4800,  6200,  5600,  7100,  7800,  8500,  9400],
  signups: [210,   280,   240,   330,   290,   380,   410,   480,   520],
}

export const TRAFFIC_SOURCES = [
  { label: 'Organic',  pct: 42, color: '#00D4FF' },
  { label: 'Direct',   pct: 28, color: '#00E5A0' },
  { label: 'Social',   pct: 18, color: '#A855F7' },
  { label: 'Referral', pct: 12, color: '#FFB300' },
]

export const CUSTOMERS = [
  { name: 'Acme Corp',   plan: 'Enterprise', mrr: '$2,400', status: 'active' },
  { name: 'Startup XYZ', plan: 'Pro',        mrr: '$890',   status: 'trial'  },
  { name: 'Nova Labs',   plan: 'Enterprise', mrr: '$3,200', status: 'active' },
  { name: 'DevCo Inc',   plan: 'Starter',    mrr: '$0',     status: 'churned'},
  { name: 'Bright Media',plan: 'Pro',        mrr: '$1,200', status: 'active' },
]

export const ACTIVITY = [
  { user: 'Sara K.',  avatar: 'https://randomuser.me/api/portraits/women/12.jpg', action: 'upgraded to Enterprise plan',    time: '2 min ago'  },
  { user: 'Omar R.',  avatar: 'https://randomuser.me/api/portraits/men/33.jpg',   action: 'created a new campaign',         time: '14 min ago' },
  { user: 'Nour A.',  avatar: 'https://randomuser.me/api/portraits/women/55.jpg', action: 'exported the monthly report',    time: '1 hr ago'   },
  { user: 'Ali M.',   avatar: 'https://randomuser.me/api/portraits/men/71.jpg',   action: 'added 3 new team members',       time: '3 hr ago'   },
  { user: 'Hana S.',  avatar: 'https://randomuser.me/api/portraits/women/82.jpg', action: 'connected Google Analytics',     time: 'Yesterday'  },
]

export const NAV_ITEMS = [
  { section: 'Overview', items: [
    { icon: '◈', label: 'Dashboard',  badge: null,  badgeColor: '' },
    { icon: '◉', label: 'Analytics',  badge: null,  badgeColor: '' },
    { icon: '◎', label: 'Reports',    badge: null,  badgeColor: '' },
  ]},
  { section: 'Management', items: [
    { icon: '⊕', label: 'Users',      badge: '12',  badgeColor: 'red'   },
    { icon: '◻', label: 'Projects',   badge: null,  badgeColor: '' },
    { icon: '⊞', label: 'Campaigns',  badge: '3',   badgeColor: 'green' },
    { icon: '◫', label: 'Billing',    badge: null,  badgeColor: '' },
  ]},
  { section: 'System', items: [
    { icon: '◐', label: 'Integrations', badge: null, badgeColor: '' },
    { icon: '⊙', label: 'Settings',     badge: null, badgeColor: '' },
  ]},
]
