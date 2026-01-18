<?php

use App\Http\Controllers\Admin\AuditHistoryController;
use App\Http\Controllers\Admin\FacultyController;
use App\Http\Controllers\Admin\LibraryDocumentController;
use App\Http\Controllers\Admin\MasterIndicatorController;
use App\Http\Controllers\Admin\MasterStandardController;
use App\Http\Controllers\Admin\MonitoringRtmController;
use App\Http\Controllers\Admin\PeriodController;
use App\Http\Controllers\Admin\ProdiController;
use App\Http\Controllers\AssignmentDocumentController;
use App\Http\Controllers\{Auditee\RtlController, Auditor\AuditorRtmController, DashboardController, FileController, FilePreviewController, LibraryController, ReportExportController};
use App\Http\Controllers\Admin\AssignmentController as AdminAssignmentController;
use App\Http\Controllers\Auditor\{AssignmentController as AuditorAssignmentController, AssignmentIndicatorController as AuditorIndicatorController};
use App\Http\Controllers\Auditee\{AssignmentController as AuditeeAssignmentController, AssignmentIndicatorController as AuditeeIndicatorController};
use App\Http\Controllers\Settings\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;


/**
 * You can register your routes here.
 **/
include base_path('routes/web_modules/index.php');

/* Change Lang */
Route::get('lang/{locale}', function ($locale) {
    // Available languages
    $availableLangs = [
        'en' => 'en',
        'bg' => 'bg',
        'de' => 'de',
        'fr' => 'fr',
        'ru' => 'ru',
        'tr' => 'tr',
        'zh' => 'zh',
    ];
    if (array_key_exists($locale, $availableLangs)) {
        session()->put('locale', $locale);
    }
    return redirect()->back();


})->name('lang');
Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    // Route::get('/', function () {
    //     return Inertia::render('Dashboard', [
    //         'canLogin' => Route::has('login'),
    //         'canRegister' => Route::has('register'),
    //         'laravelVersion' => Application::VERSION,
    //         'phpVersion' => PHP_VERSION,
    //     ]);
    // })->name('/');


    /*They are the required pages for the system, don't delete it*/
    Route::prefix('settings')->group(function () {

        /*Settings Summary*/
        // Route::get('/', function () {
        //     return Inertia::render('Settings/Index', [
        //         'users_count' => count(\App\Models\User::all('id')),
        //         'roles_count' => count(Role::all()),
        //         'permissions_count' => count(Permission::all())
        //     ]);
        // })->name('settings');

        /*Get Routes*/
        Route::get('system', function () {
            return Inertia::render('Settings/System');
        })->name('settings-system');

        /*Resource Routes*/
        Route::resources([
            'settings-user' => \App\Http\Controllers\Settings\UserController::class,
            'settings-role' => \App\Http\Controllers\Settings\RoleController::class,
            'settings-permission' => \App\Http\Controllers\Settings\PermissionController::class
        ]);

        /*Search Routes for Resource Routes*/
        Route::post('settings-user', [\App\Http\Controllers\Settings\UserController::class, 'index'])->name('settings-user.search');
        Route::post('settings-role', [\App\Http\Controllers\Settings\RoleController::class, 'index'])->name('settings-role.search');
        Route::post('settings-permission', [\App\Http\Controllers\Settings\PermissionController::class, 'index'])->name('settings-permission.search');

    });

    /*This pages for example, you can delete when you design the your system*/
    //Example Pages
    Route::get('login-app', function () {
        return Inertia::render('Samples/Examples/Login');
    })->name('login-app');
    Route::get('login-app-demo', function () {
        return Inertia::render('Samples/Examples/Auth/Login');
    })->name('login-app-demo');
    Route::get('register-app', function () {
        return Inertia::render('Samples/Examples/Register');
    })->name('register-app');
    Route::get('register-app-demo', function () {
        return Inertia::render('Samples/Examples/Auth/Register');
    })->name('register-app-demo');
    ;
    Route::get('forgot-password-app', function () {
        return Inertia::render('Samples/Examples/ForgotPassword');
    })->name('forgot-password-app');
    Route::get('forgot-password-app-demo', function () {
        return Inertia::render('Samples/Examples/Auth/ForgotPassword');
    })->name('forgot-password-app-demo');
    Route::get('lock-app', function () {
        return Inertia::render('Samples/Examples/Lock');
    })->name('lock-app');
    Route::get('lock-app-demo', function () {
        return Inertia::render('Samples/Examples/Auth/Lock');
    })->name('lock-app-demo');
    Route::get('profile', function () {
        return Inertia::render('Samples/Examples/Profile');
    })->name('profile');
    Route::get('pricing', function () {
        return Inertia::render('Samples/Examples/Pricing');
    })->name('pricing');
    Route::get('project-management-app', function () {
        return Inertia::render('Samples/Examples/ProjectApp');
    })->name('project-management-app');
    Route::get('todo-app', function () {
        return Inertia::render('Samples/Examples/TodoApp');
    })->name('todo-app');
    Route::get('email-app', function () {
        return Inertia::render('Samples/Examples/EmailApp');
    })->name('email-app');
    Route::get('chat-app', function () {
        return Inertia::render('Samples/Examples/ChatApp');
    })->name('chat-app');
    //Component Pages
    Route::get('alert', function () {
        return Inertia::render('Samples/Components/Alert');
    })->name('alert');
    Route::get('avatar', function () {
        return Inertia::render('Samples/Components/Avatar');
    })->name('avatar');
    Route::get('badge', function () {
        return Inertia::render('Samples/Components/Badge');
    })->name('badge');
    Route::get('breadcrumb', function () {
        return Inertia::render('Samples/Components/Breadcrumb');
    })->name('breadcrumb');
    Route::get('button', function () {
        return Inertia::render('Samples/Components/Button');
    })->name('button');
    Route::get('chart', function () {
        return Inertia::render('Samples/Components/Chart');
    })->name('chart');
    Route::get('collapsible', function () {
        return Inertia::render('Samples/Components/Collapsible');
    })->name('collapsible');
    Route::get('content-box', function () {
        return Inertia::render('Samples/Component/ContentBox');
    })->name('content-box');
    Route::get('dropdown', function () {
        return Inertia::render('Samples/Components/Dropdown');
    })->name('dropdown');
    Route::get('list', function () {
        return Inertia::render('Samples/Components/List');
    })->name('list');
    Route::get('loading', function () {
        return Inertia::render('Samples/Components/Loading');
    })->name('loading');
    Route::get('modal', function () {
        return Inertia::render('Samples/Components/Modal');
    })->name('modal');
    Route::get('pagination', function () {
        return Inertia::render('Samples/Components/Paginate');
    })->name('pagination');
    Route::get('progress', function () {
        return Inertia::render('Samples/Components/Progress');
    })->name('progress');
    Route::get('tab', function () {
        return Inertia::render('Samples/Components/Tab');
    })->name('tab');
    Route::get('table', function () {
        return Inertia::render('Samples/Components/Table', [
            'users' => \App\Models\User::all()
        ]);
    })->name('table');
    Route::match(['get', 'post'], 'back-end-table', [\App\Http\Controllers\DemoContentController::class, 'index'])->name('back-end-table');

    Route::resource('product', \App\Http\Controllers\DemoContentController::class);
    Route::post('product', [\App\Http\Controllers\DemoContentController::class, 'index'])->name('product.search');

    /*TODO: Toastr Feature
    Route::get('toastr',function (){return Inertia::render('Samples/Components/Toastr');})->name('toastr');*/
    Route::get('tooltip', function () {
        return Inertia::render('Samples/Components/Tooltip');
    })->name('tooltip');
    // Layout Pages
    Route::get('layout-structure', function () {
        return Inertia::render('Samples/Layouts/LayoutStructure');
    })->name('layout-structure');
    Route::get('layout-grid', function () {
        return Inertia::render('Samples/Layouts/Grid');
    })->name('layout-grid');
    Route::get('layout-statistic-widget', function () {
        return Inertia::render('Samples/Layouts/StatisticWidget');
    })->name('layout-statistic-widget');
    Route::get('test', function () {
        return Inertia::render('Samples/Test');
    })->name('test');
    // Form Pages
    Route::get('form-structure', function () {
        return Inertia::render('Samples/FormElements/FormStructure');
    })->name('form-structure');
    Route::get('form-input-group', function () {
        return Inertia::render('Samples/FormElements/InputGroup');
    })->name('form-input-group');
    Route::get('form-simple-field', function () {
        return Inertia::render('Samples/FormElements/SimpleField');
    })->name('form-simple-field');
    Route::get('form-repeatable-field', function () {
        return Inertia::render('Samples/FormElements/RepeatableField');
    })->name('form-repeatable-field');
    Route::get('form-date-field', function () {
        return Inertia::render('Samples/FormElements/DateField');
    })->name('form-date-field');
    Route::get('form-select-input', function () {
        return Inertia::render('Samples/FormElements/SelectInput', [
            'users' => \App\Models\User::all()
        ]);
    })->name('form-select-input');
    Route::get('form-tag-input', function () {
        return Inertia::render('Samples/FormElements/TagInput');
    })->name('form-tag-input');
    Route::get('form-validation', function () {
        return Inertia::render('Samples/FormElements/Validation');
    })->name('form-validation');
});

Route::middleware(['auth:sanctum', config('jetstream.auth_session'), 'verified'])->group(function () {

    // Dashboard utama
    Route::get('/', [DashboardController::class, 'index'])->name('/');

    Route::get('/admin/indicators/{indicator}/template', [MasterIndicatorController::class, 'showTemplate'])
        ->name('admin.indicators.show-template');
    Route::get('/files/evidence/{indicator}', [FileController::class, 'showEvidence'])
        ->name('files.evidence.show');
    Route::get('/files/official/{document}', [FileController::class, 'showOfficialDocument'])->name('files.official.show');

    Route::get('/admin/indicators/{indicator}/assignment-template', [MasterIndicatorController::class, 'showAssignmentTemplate'])
        ->name('admin.indicators.show-assignment-template');
    Route::get('/library', [LibraryController::class, 'index'])->name('library.index');
    Route::get('/library/download/{libraryDocument}', [LibraryController::class, 'download'])->name('library.download');

    // ==========================================
    // GROUP ADMIN
    // ==========================================
    Route::middleware(['role:admin'])->prefix('admin')->name('admin.')->group(function () {
        // Master Wilayah & Unit
        Route::resource('prodis', ProdiController::class)->except(['show', 'edit', 'create']);
        Route::resource('faculties', FacultyController::class)->except(['show', 'edit', 'create']); // Baru

        // Master Periode & Standar
        Route::resource('periods', PeriodController::class)->except(['show', 'edit', 'create']);
        Route::resource('standards', MasterStandardController::class)->except(['show', 'edit', 'create']);

        Route::prefix('standards/{standard}')->name('standards.')->group(function () {
            Route::resource('indicators', MasterIndicatorController::class)->except(['show', 'edit', 'create']);
            Route::get('indicators/{indicator}/history', [MasterIndicatorController::class, 'history'])->name('indicators.history');
        });

        // Penugasan Audit (Admin yang membuat tugas)
        Route::resource('assignments', AdminAssignmentController::class)->except(['edit', 'create']); // Baru
        // Rute Baru untuk Kontrol Tahapan (Stage Control)
        Route::prefix('assignments/{assignment}')->name('assignments.')->group(function () {
            // Menggunakan PATCH karena kita hanya mengupdate kolom 'current_stage'
            Route::patch('/next', [AdminAssignmentController::class, 'nextStage'])->name('next');
            Route::patch('/previous', [AdminAssignmentController::class, 'previousStage'])->name('previous');

            // Rute yang sudah Anda miliki (Pastikan konsisten)
            Route::post('/upload-document', [AdminAssignmentController::class, 'uploadDocument'])->name('upload-document');
            Route::post('/finalize', [AdminAssignmentController::class, 'finalize'])->name('finalize');
        });
        Route::get('/indicators/{indicator}/history', [AdminAssignmentController::class, 'history'])->name('indicators.history');

        // Manajemen User & History
        Route::resource('users', UserController::class)->except(['show', 'edit', 'create']);
        Route::post('/users/{user}/reset-2fa', [UserController::class, 'resetTwoFactor'])->name('users.reset-2fa');
        Route::get('/audit-history', [AuditHistoryController::class, 'index'])->name('history.index');

        // Manajemen Dokumen
        Route::resource('library', LibraryDocumentController::class)->except(['create', 'show', 'edit']);
    });

    // ==========================================
    // GROUP AUDITOR
    // ==========================================
    Route::middleware(['role:auditor', 'sync.ami'])->prefix('auditor')->name('auditor.')->group(function () {
        Route::get('/assignments', [AuditorAssignmentController::class, 'index'])->name('assignments.index');
        Route::get('/assignments/{assignment}', [AuditorAssignmentController::class, 'show'])->name('assignments.show');

        Route::patch('/indicators/{indicator}', [AuditorIndicatorController::class, 'update'])->name('indicators.update');
        Route::get('indicators/{indicator}/history', [AuditorIndicatorController::class, 'history'])->name('indicators.history');

        Route::post('/assignments/{assignment}/upload-document', [AuditorAssignmentController::class, 'uploadDocument'])->name('assignments.upload-document');
        Route::post('/assignments/{assignment}/finalize', [AuditorAssignmentController::class, 'finalize'])->name('assignments.finalize');

        Route::patch('/rtl/{rtl}/verify', [AuditorIndicatorController::class, 'verifyRtl'])->name('indicators.verify-rtl');
    });

    // ==========================================
    // GROUP AUDITEE
    // ==========================================
    Route::middleware(['role:auditee', 'sync.ami'])->prefix('auditee')->name('auditee.')->group(function () {
        Route::get('/assignments', [AuditeeAssignmentController::class, 'index'])->name('assignments.index');
        Route::get('/assignments/{assignment}', [AuditeeAssignmentController::class, 'show'])->name('assignments.show');

        Route::patch('/indicators/{indicator}', [AuditeeIndicatorController::class, 'update'])->name('indicators.update');
        Route::get('/indicators/{indicator}/history', [AuditeeIndicatorController::class, 'history'])->name('indicators.history');
        Route::patch('/rtl/{rtl}', [AuditeeIndicatorController::class, 'updateRtl'])->name('indicators.update-rtl');
    });

    // ==========================================
    // SHARED ROUTES (Dokumen, Preview, & Export)
    // ==========================================
    Route::prefix('shared')->name('shared.')->group(function () {
        // Download & Delete Dokumen Resmi
        Route::get('/documents/{document}/download', [AssignmentDocumentController::class, 'download'])->name('documents.download');
        Route::delete('/documents/{document}', [AssignmentDocumentController::class, 'destroy'])->name('documents.destroy');

        // File Preview (Keamanan Private Storage)
        Route::get('/preview/evidence/{indicator}', [FilePreviewController::class, 'previewEvidence'])->name('preview.evidence');
        Route::get('/preview/document/{document}', [FilePreviewController::class, 'previewDocument'])->name('preview.document');

        // Export Laporan PDF
        Route::get('/export/pdf/{assignment}', [ReportExportController::class, 'exportPdf'])->name('export.pdf');
    });
});
