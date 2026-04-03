<?php
/**
 * Pulsar SaaS Dashboard — Analytics API
 * File: api/metrics.php
 *
 * Run PHP dev server:  php -S localhost:8000 -t api/
 * Vite proxy:          /api → http://localhost:8000
 *
 * Endpoints:
 *   GET /api/metrics.php                → summary KPIs
 *   GET /api/metrics.php?type=revenue   → revenue time-series
 *   GET /api/metrics.php?type=traffic   → traffic breakdown
 *   GET /api/metrics.php?type=users     → recent activity
 *   GET /api/metrics.php?type=customers → customers table
 */

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: http://localhost:5173');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$type = $_GET['type'] ?? 'summary';

if ($type === 'summary') {
    echo json_encode([
        'revenue'     => ['value'=>48290,    'change'=>18.2, 'positive'=>true ],
        'activeUsers' => ['value'=>3842,     'change'=>6.4,  'positive'=>true ],
        'churnRate'   => ['value'=>2.4,      'change'=>0.3,  'positive'=>false],
        'avgSession'  => ['value'=>'4m 32s', 'change'=>12.1, 'positive'=>true ],
    ]);
    exit;
}

if ($type === 'revenue') {
    echo json_encode([
        'labels'  => ['Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb','Mar'],
        'revenue' => [22000,26000,24500,31000,28000,35000,38000,44000,48290],
        'users'   => [1800,2100,1950,2400,2200,2800,3000,3500,3842],
    ]);
    exit;
}

if ($type === 'traffic') {
    echo json_encode([
        'total'   => 8400,
        'sources' => [
            ['label'=>'Organic', 'pct'=>42,'color'=>'#00D4FF'],
            ['label'=>'Direct',  'pct'=>28,'color'=>'#00E5A0'],
            ['label'=>'Social',  'pct'=>18,'color'=>'#A855F7'],
            ['label'=>'Referral','pct'=>12,'color'=>'#FFB300'],
        ],
    ]);
    exit;
}

if ($type === 'users') {
    echo json_encode(['activities'=>[
        ['user'=>'Sara K.',  'action'=>'upgraded to Enterprise plan', 'time'=>'2 min ago'],
        ['user'=>'Omar R.',  'action'=>'created a new campaign',      'time'=>'14 min ago'],
        ['user'=>'Nour A.',  'action'=>'exported monthly report',     'time'=>'1 hr ago'],
        ['user'=>'Ali M.',   'action'=>'added 3 new team members',    'time'=>'3 hr ago'],
        ['user'=>'Hana S.',  'action'=>'connected Google Analytics',  'time'=>'Yesterday'],
    ]]);
    exit;
}

if ($type === 'customers') {
    echo json_encode(['customers'=>[
        ['name'=>'Acme Corp',    'plan'=>'Enterprise','mrr'=>2400,'status'=>'active'],
        ['name'=>'Startup XYZ', 'plan'=>'Pro',        'mrr'=>890, 'status'=>'trial'],
        ['name'=>'Nova Labs',   'plan'=>'Enterprise', 'mrr'=>3200,'status'=>'active'],
        ['name'=>'DevCo Inc',   'plan'=>'Starter',    'mrr'=>0,   'status'=>'churned'],
        ['name'=>'Bright Media','plan'=>'Pro',        'mrr'=>1200,'status'=>'active'],
    ]]);
    exit;
}

http_response_code(400);
echo json_encode(['error'=>"Unknown type: $type"]);
