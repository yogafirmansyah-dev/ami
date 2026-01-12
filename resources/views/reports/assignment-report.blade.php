<!DOCTYPE html>
<html>
<head>
    <title>Laporan AMI</title>
    <style>
        body { font-family: sans-serif; font-size: 10px; }
        .header { text-align: center; margin-bottom: 20px; }
        .info-table { width: 100%; margin-bottom: 20px; border-collapse: collapse; }
        .info-table td { padding: 5px; }
        .main-table { width: 100%; border-collapse: collapse; table-layout: fixed; }
        .main-table th, .main-table td { border: 1px solid #000; padding: 6px; word-wrap: break-word; }
        .main-table th { background-color: #f2f2f2; text-align: center; }
        .text-center { text-align: center; }
        .badge { padding: 2px 5px; border-radius: 3px; font-weight: bold; }
        .bg-ks { background-color: #dcfce7; color: #15803d; }
        .bg-kts { background-color: #fee2e2; color: #b91c1c; }
        .bg-ob { background-color: #fef3c7; color: #92400e; }
    </style>
</head>
<body>
    <div class="header">
        <h2>LAPORAN HASIL AUDIT MUTU INTERNAL</h2>
        <h3>{{ $assignment->period->name }}</h3>
    </div>

    <table class="info-table">
        <tr>
            <td width="15%">Unit Kerja</td><td>: <strong>{{ $assignment->target_name }}</strong></td>
            <td width="15%">Auditor</td><td>: <strong>{{ $assignment->auditor->name }}</strong></td>
        </tr>
        <tr>
            <td>Instrumen</td><td>: {{ $assignment->standard->name }}</td>
            <td>Status</td><td>: {{ strtoupper($assignment->current_stage) }}</td>
        </tr>
    </table>

    <table class="main-table">
        <thead>
            <tr>
                <th width="5%">Kode</th>
                <th width="20%">Pernyataan Standar</th>
                <th width="10%">Target</th>
                <th width="10%">Bukti Diperiksa</th>
                <th width="10%">File Bukti</th>
                <th width="10%">Temuan</th>
                <th width="15%">Catatan Temuan</th>
                <th width="5%">Skor</th>
                <th width="15%">Rekomendasi</th>
            </tr>
        </thead>
        <tbody>
            @foreach($indicators as $item)
            <tr>
                <td class="text-center">{{ $item->snapshot_code }}</td>
                <td>{{ $item->snapshot_requirement }}</td>
                <td class="text-center">{{ $item->snapshot_target }}</td>
                <td>{{ $item->snapshot_evidence_needed }}</td>
                <td class="text-center">
                    {{ $item->evidence_path ? 'Ada' : 'Tidak Ada' }}
                </td>
                <td class="text-center">
                    <span class="badge {{ strtolower($item->finding_type) == 'ks' ? 'bg-ks' : (strtolower($item->finding_type) == 'kts' ? 'bg-kts' : 'bg-ob') }}">
                        {{ $item->finding_type ?? '-' }}
                    </span>
                </td>
                <td>{{ $item->auditor_note ?? '-' }}</td>
                <td class="text-center" style="font-weight: bold;">{{ $item->score ?? '-' }}</td>
                <td>{{ $item->recommendation ?? '-' }}</td>
            </tr>
            @endforeach
        </tbody>
    </table>

    <div style="margin-top: 50px; float: right; width: 250px; text-align: center;">
        <p>Dicetak pada: {{ $date }}</p>
        <br><br><br>
        <p><strong>( __________________________ )</strong></p>
        <p>Tanda Tangan Auditor</p>
    </div>
</body>
</html>
