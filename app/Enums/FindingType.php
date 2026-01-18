<?php

namespace App\Enums;

enum FindingType: string
{
    case KS = 'KS';
    case KTS = 'KTS';
    case OB = 'OB';

    // Helper untuk label di Frontend
    public function label(): string
    {
        return match ($this) {
            self::KS => 'Kesesuaian',
            self::KTS => 'Ketidaksesuaian (KTS)',
            self::OB => 'Observasi (OB)',
        };
    }
}
