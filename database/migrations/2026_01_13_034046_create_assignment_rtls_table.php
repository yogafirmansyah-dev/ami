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
        Schema::create('assignment_rtls', function (Blueprint $table) {
            $table->id();

            // Relasi ke Indikator Penugasan (yang memiliki temuan KTS/OB)
            $table->foreignId('assignment_indicator_id')
                ->constrained('assignment_indicators')
                ->onDelete('cascade');

            // Kolom sesuai matriks yang Anda berikan
            $table->text('root_cause')->nullable();           // Akar Masalah
            $table->text('action_plan')->nullable();          // Rencana Tindak Lanjut
            $table->string('pic')->nullable();                // Penanggung Jawab
            $table->string('deadline')->nullable();           // Waktu Pelaksanaan
            $table->text('success_indicator')->nullable();    // Indikator Keberhasilan

            // Kolom untuk Evidence & Feedback
            $table->string('evidence_path')->nullable();      // File bukti tindak lanjut
            $table->text('auditor_feedback')->nullable();     // Komentar/catatan verifikasi auditor

            // Status Siklus: open (baru), in_progress (sedang diperbaiki), closed (selesai/disetujui)
            $table->string('status')->default('open');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('assignment_rtls');
    }
};
