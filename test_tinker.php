<?php
require __DIR__ . '/vendor/autoload.php';
$app = require_once __DIR__ . '/bootstrap/app.php';
$kernel = $app->make(Illuminate\Contracts\Console\Kernel::class);
$kernel->bootstrap();

$request = request();
$controller = app(App\Http\Controllers\Admin\AssignmentController::class);
$response = $controller->index($request);
$page = $response->toResponse($request)->original['page'];
$assignments = $page['props']['assignments'];
file_put_contents('output.json', json_encode($assignments['data'][0], JSON_PRETTY_PRINT));
