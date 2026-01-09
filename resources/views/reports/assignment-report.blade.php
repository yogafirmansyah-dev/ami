<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Laporan Hasil AMI</title>
    <style>
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            font-size: 11pt;
            color: #333;
            line-height: 1.5;
        }

        .page-header {
            text-align: center;
            border-bottom: 3px double #000;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .title {
            font-size: 16pt;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .info-table {
            width: 100%;
            margin-bottom: 20px;
        }

        .info-table td {
            padding: 3px 0;
            vertical-align: top;
        }

        .info-label {
            width: 150px;
            font-weight: bold;
        }

        .summary-box {
            background: #f2f2f2;
            border: 1px solid #ccc;
            padding: 15px;
            margin-bottom: 20px;
        }

        .summary-title {
            font-weight: bold;
            font-size: 12pt;
            border-bottom: 1px solid #ccc;
            margin-bottom: 10px;
        }

        table.main-table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 10px;
            table-layout: fixed;
        }

        table.main-table th,
        table.main-table td {
            border: 1px solid #000;
            padding: 8px;
            font-size: 9pt;
            word-wrap: break-word;
        }

        table.main-table th {
            background-color: #e6e6e6;
            text-align: center;
        }

        .badge {
            padding: 2px 5px;
            border-radius: 3px;
            font-weight: bold;
            font-size: 8pt;
        }

        .text-center {
            text-align: center;
        }

        .footer-sign {
            margin-top: 50px;
            width: 100%;
        }

        .footer-sign td {
            width: 50%;
            text-align: center;
        }

        .sign-space {
            height: 70px;
        }
    </style>
</head>

<body>

    <div class="page-header">
        <div class="title">LAPORAN HASIL AUDIT MUTU INTERNAL (AMI)</div>
        <div>UNIVERSITAS TEKNOLOGI AMI</div>
    </div>

    <table class="info-table">
        <tr>
            <td class="info-label">Unit Kerja</td>
            <td>: {{ $assignment->assignable->name }} ({{ class_basename($assignment->assignable_type) }})</td>
        </tr>
        <tr>
            <td class="info-label">Periode Audit</td>
            <td>: {{ $assignment->period->name }}</td>
        </tr>
        <tr>
            <td class="info-label">Standar Mutu</td>
            <td>: {{ $assignment->standard->name }}</td>
        </tr>
        <tr>
            <td class="info-label">Auditor</td>
            <td>: {{ $assignment->auditor->name }}</td>
        </tr>
    </table>

    <div class="summary-box">
        <div class="summary-title">RINGKASAN EKSEKUTIF</div>
        <table style="width: 100%">
            <tr>
                <td>Rata-rata Skor: <strong>{{ $stats['average_score'] }} / 4.00</strong></td>
                <td>Kategori: <strong>{{ strtoupper($stats['average_label']) }}</strong></td>
            </tr>
            <tr>
                <td>Total Indikator: {{ $stats['total_indicators'] }}</td>
                <td>Temuan (KTS/Cukup/Kurang): {{ $stats['kts_count'] }}</td>
            </tr>
        </table>
        <p style="margin-top: 10px;"><strong>Catatan Umum:</strong><br>
            {{ $assignment->summary_note ?? 'Belum ada ringkasan catatan dari auditor.' }}</p>
    </div>

    <h4 style="margin-bottom: 5px;">DETAIL PENILAIAN PER INDIKATOR</h4>
    <table class="main-table">
        <thead>
            <tr>
                <th style="width: 10%">Kode</th>
                <th style="width: 40%">Persyaratan / Indikator Mutu</th>
                <th style="width: 10%">Skor</th>
                <th style="width: 40%">Catatan & Rekomendasi Auditor</th>
            </tr>
        </thead>
        <tbody>
            @foreach($assignment->indicators as $indicator)
                <tr>
                    <td class="text-center">{{ $indicator->snapshot_code }}</td>
                    <td>{{ $indicator->snapshot_requirement }}</td>
                    <td class="text-center">
                        <strong>{{ $indicator->score ?? '-' }}</strong><br>
                        <small style="font-size: 7pt;">{{ $indicator->score_label }}</small>
                    </td>
                    <td>
                        <strong>Catatan:</strong> {{ $indicator->auditor_note ?? '-' }} <br>
                        <hr style="border: 0.1px solid #eee">
                        <strong>Rekomendasi:</strong> {{ $indicator->recommendation ?? '-' }}
                    </td>
                </tr>
            @endforeach
        </tbody>
    </table>

    <table class="footer-sign">
        <tr>
            <td>
                Auditee,<br>
                Ketua Unit Kerja
                <div class="sign-space"></div>
                ( ........................................... )
            </td>
            <td>
                Auditor,<br>
                Ketua Tim Auditor
                <div class="sign-space"></div>
                <strong>{{ $assignment->auditor->name }}</strong>
            </td>
        </tr>
    </table>

</body>

</html>
