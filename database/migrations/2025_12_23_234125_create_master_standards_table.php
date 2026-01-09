<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('master_standards', function (Blueprint $table) {
            $table->id();
            $table->string('code', 6)->unique()->comment('Kode standar')->index();
            $table->string('name')->index()->comment('Nama standar');
            $table->text('description')->nullable()->comment('Deskripsi standar');
            $table->string('target_type', 25)->default('prodi')->comment('Target: prodi atau faculty');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('master_standards');
    }
};
