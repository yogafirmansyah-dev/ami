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
        Schema::create('library_documents', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // Nama tampilan dokumen
            $table->string('file_path');
            $table->string('type'); // 'public' atau 'auditor'
            $table->string('extension')->nullable();
            $table->foreignId('uploaded_by')->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('library_documents');
    }
};
