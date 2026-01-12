<?php

namespace App\Enums;

enum FindingType: string
{
    case KESESUAIAN = 'KS';
    case KETIDAKSESUAIAN = 'KTS';
    case OBSERVASI = 'OB';

    // Helper untuk label di Frontend
    public function label(): string
    {
        return match ($this) {
            self::KESESUAIAN => 'Kesesuaian',
            self::KETIDAKSESUAIAN => 'Ketidaksesuaian (KTS)',
            self::OBSERVASI => 'Observasi (OB)',
        };
    }
}
